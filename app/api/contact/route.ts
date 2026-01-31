import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    const formattedMessage = String(message).split("\n").join("<br />")

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>
        <h3 style="color: #333; margin-top: 20px;">Mensaje:</h3>
        <p style="background-color: #fff; border-left: 4px solid #007bff; padding: 15px; line-height: 1.6;">${formattedMessage}</p>
      </div>
    `

    const result = await resend.emails.send({
      from: "noreply@resend.dev",
      replyTo: email,
      to: "roberqui75@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true, data: result })
  } catch (err: any) {
    console.error("Error en /api/contact:", err)
    const message = err?.message || "Error interno del servidor"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
