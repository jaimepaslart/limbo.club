import { Resend } from 'resend'
import type { EventSide, EventType } from '~/types/event'

interface SubmissionBody {
  title: string
  type: EventType
  date: string
  time: string
  city: string
  side: EventSide
  venue: string
  url: string
  description: string
  email: string
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<SubmissionBody>(event)

  // Validation basique
  if (!body.title || !body.type || !body.date || !body.city || !body.side || !body.venue || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Champs obligatoires manquants'
    })
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email invalide'
    })
  }

  try {
    const resend = new Resend(config.resendApiKey)

    // Préparer le contenu de l'email
    const emailHtml = `
      <h2>Nouvelle proposition d'événement - Limbo</h2>

      <h3>Informations de l'événement</h3>
      <ul>
        <li><strong>Titre :</strong> ${body.title}</li>
        <li><strong>Type :</strong> ${body.type}</li>
        <li><strong>Date :</strong> ${body.date}${body.time ? ` à ${body.time}` : ''}</li>
        <li><strong>Lieu :</strong> ${body.venue}</li>
        <li><strong>Ville :</strong> ${body.city}</li>
        <li><strong>Côté :</strong> ${body.side === 'nord' ? 'Pays Basque Nord' : 'Pays Basque Sud'}</li>
        ${body.url ? `<li><strong>Site web :</strong> <a href="${body.url}">${body.url}</a></li>` : ''}
        ${body.description ? `<li><strong>Description :</strong><br/>${body.description}</li>` : ''}
      </ul>

      <h3>Contact</h3>
      <p><strong>Email :</strong> ${body.email}</p>

      <hr/>
      <p style="color: #666; font-size: 12px;">Cet email a été envoyé depuis le formulaire de proposition d'événement de Limbo.club</p>
    `

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Limbo <onboarding@resend.dev>', // Remplace par ton domaine vérifié
      to: config.contactEmail || 'contact@limbo.club', // Email où tu veux recevoir les soumissions
      replyTo: body.email,
      subject: `Nouvelle proposition : ${body.title}`,
      html: emailHtml
    })

    if (error) {
      console.error('Erreur Resend:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur lors de l\'envoi de l\'email'
      })
    }

    return {
      success: true,
      message: 'Événement soumis avec succès',
      data
    }
  } catch (error: any) {
    console.error('Erreur lors de la soumission:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Erreur lors de la soumission'
    })
  }
})
