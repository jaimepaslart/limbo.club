import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    // Validation des champs requis
    if (!body.title || !body.type || !body.date || !body.city || !body.side || !body.venue || !body.email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs obligatoires doivent être remplis'
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

    // Initialiser Resend
    const resend = new Resend(config.resendApiKey)

    // Formater les informations de l'événement
    const sideLabel = body.side === 'nord' ? 'Pays Basque Nord' : 'Pays Basque Sud'
    const typeLabels: { [key: string]: string } = {
      concert: 'Concert',
      expo: 'Exposition',
      festival: 'Festival',
      cinema: 'Cinéma',
      atelier: 'Atelier',
      theatre: 'Théâtre',
      danse: 'Danse',
      conference: 'Conférence'
    }

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Limbo Propositions <onboarding@resend.dev>', // Vous changerez cela avec votre domaine vérifié
      to: [config.contactEmail],
      replyTo: body.email,
      subject: `Nouvelle proposition d'événement: ${body.title}`,
      html: `
        <h2>Nouvelle proposition d'événement</h2>

        <h3>Informations de l'événement</h3>
        <ul>
          <li><strong>Titre:</strong> ${body.title}</li>
          <li><strong>Type:</strong> ${typeLabels[body.type] || body.type}</li>
          <li><strong>Date:</strong> ${body.date}${body.time ? ` à ${body.time}` : ''}</li>
          <li><strong>Lieu:</strong> ${body.venue}</li>
          <li><strong>Ville:</strong> ${body.city}</li>
          <li><strong>Côté:</strong> ${sideLabel}</li>
          ${body.url ? `<li><strong>Site web:</strong> <a href="${body.url}">${body.url}</a></li>` : ''}
        </ul>

        ${body.description ? `
          <h3>Description</h3>
          <p>${body.description.replace(/\n/g, '<br>')}</p>
        ` : ''}

        <h3>Contact</h3>
        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>

        <hr>
        <p style="font-size: 12px; color: #666;">
          Cette proposition a été soumise via le formulaire Limbo.club
        </p>
      `
    })

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      })
    }

    return {
      success: true,
      message: 'Proposition envoyée avec succès'
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de l\'envoi de la proposition'
    })
  }
})
