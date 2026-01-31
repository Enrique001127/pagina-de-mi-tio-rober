import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "roberqui75@gmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.log("[v0] Error completo:", error)
    console.log("[v0] GMAIL_USER está configurado:", !!process.env.GMAIL_USER)
    console.log("[v0] GMAIL_APP_PASSWORD está configurado:", !!process.env.GMAIL_APP_PASSWORD)
    return NextResponse.json(
      { error: error?.message || "Error al enviar el mensaje" },
      { status: 500 }
    )
  }
}
