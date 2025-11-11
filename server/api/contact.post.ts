import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    // Validation
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs sont requis'
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

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Limbo Contact <onboarding@resend.dev>', // Vous changerez cela avec votre domaine vérifié
      to: [config.contactEmail],
      replyTo: body.email,
      subject: `Nouveau message de ${body.name}`,
      html: `
        <h2>Nouveau message depuis Limbo.club</h2>
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
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
      message: 'Email envoyé avec succès'
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de l\'envoi de l\'email'
    })
  }
})
