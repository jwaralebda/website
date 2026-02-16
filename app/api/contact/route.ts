import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false, // IMPORTANT for 587
      auth: {
        user: process.env.EMAIL_USER, // contact@yourdomain.com
        pass: process.env.EMAIL_PASS, // mailbox password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email, // 👈 user ke email par reply ja sake
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { success: false, error: "Mail not sent" },
      { status: 500 }
    );
  }
}
