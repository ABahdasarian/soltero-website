import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz4SyVw37f84EpgejESzMCZbzeYVsA6QSwvOybIQ1D4nUM3BSNE-4WdTFqxlStI9COUjg/exec";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } =
      await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all fields.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    ==========================================
    1. SAVE TO GOOGLE SHEETS → АРКУШ3
    ==========================================
    */

    try {
      const googleResponse = await fetch(
        GOOGLE_SHEETS_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            source: "contact",
          }),
        }
      );

      if (!googleResponse.ok) {
        console.error(
          "Google Sheets error:",
          await googleResponse.text()
        );
      }
    } catch (googleError) {
      console.error(
        "Google Sheets request failed:",
        googleError
      );
    }

    /*
    ==========================================
    2. EMAIL TO SOLTERO
    ==========================================
    */

    const adminEmail = await resend.emails.send({
      from: "SOLTERO Bridal <hello@soltero.co.uk>",
      to: "solterobridaluk@gmail.com",
      replyTo: email,
      subject: `New Contact Message: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px; color: #333;">
          <h1 style="color: #978065;">
            New Contact Message
          </h1>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p><strong>Message:</strong></p>

          <div style="white-space: pre-wrap; line-height: 1.7;">
            ${message}
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error(
        "Admin email error:",
        adminEmail.error
      );

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message.",
        },
        {
          status: 500,
        }
      );
    }

    /*
    ==========================================
    3. CONFIRMATION EMAIL TO CUSTOMER
    ==========================================
    */

    const customerEmail = await resend.emails.send({
      from: "SOLTERO Bridal <hello@soltero.co.uk>",
      to: email,
      subject: "We received your message – SOLTERO Bridal",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px; color: #333; line-height: 1.7;">
          <h1 style="color: #978065;">
            Thank You for Contacting SOLTERO
          </h1>

          <p>Dear <strong>${name}</strong>,</p>

          <p>
            Thank you for contacting SOLTERO Bridal Boutique.
            We have successfully received your message.
          </p>

          <p>
            A member of our team will get back to you as soon
            as possible.
          </p>

          <p>
            We usually respond within one business day.
          </p>

          <br />

          <p>
            Kind regards,
            <br />
            <strong>SOLTERO Bridal Boutique</strong>
          </p>
        </div>
      `,
    });

    if (customerEmail.error) {
      console.error(
        "Customer email error:",
        customerEmail.error
      );
    }

    /*
    ==========================================
    4. SUCCESS
    ==========================================
    */

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}