import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxBdoXbBg6mNVvpckqu_CCqw71tBPggYRJU9kOYJV8Sp6OfEcCTyv1b8cGnOerUsGpA5w/exec";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email address.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    ==========================================
    SAVE EMAIL TO GOOGLE SHEETS
    ==========================================
    */

    const googleSheetsResponse = await fetch(
      GOOGLE_SHEETS_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          source: "newsletter",
          email,
        }),
      }
    );

    if (!googleSheetsResponse.ok) {
      console.error(
        "Google Sheets error:",
        googleSheetsResponse.status
      );
    }

    /*
    ==========================================
    SEND NOTIFICATION TO ADMIN
    ==========================================
    */

    const adminEmail = await resend.emails.send({
      from: "SOLTERO Bridal <hello@soltero.co.uk>",
      to: "solterobridaluk@gmail.com",
      replyTo: email,
      subject: "New Newsletter Subscriber",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px; color: #333;">
          <h1 style="color: #978065;">
            New Newsletter Subscriber
          </h1>

          <p>
            A new person has subscribed to the SOLTERO newsletter.
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error(
        "Admin newsletter email error:",
        adminEmail.error
      );
    }

    /*
    ==========================================
    SEND CONFIRMATION TO SUBSCRIBER
    ==========================================
    */

    const customerEmail = await resend.emails.send({
      from: "SOLTERO Bridal <hello@soltero.co.uk>",
      to: email,
      subject: "Welcome to SOLTERO Bridal",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 40px; color: #333; line-height: 1.7;">
          <h1 style="color: #978065;">
            Welcome to SOLTERO
          </h1>

          <p>
            Thank you for subscribing to our newsletter.
          </p>

          <p>
            You will receive updates about new bridal collections,
            inspiration and exclusive news from SOLTERO Bridal Boutique.
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
        "Subscriber email error:",
        customerEmail.error
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed!",
    });

  } catch (error) {
    console.error("Newsletter error:", error);

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