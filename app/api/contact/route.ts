// app/api/contact/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxW43icgjNDxxgGXIsqWHZocgNX-hR1Eu7JEtzKe19ZNwoWGD8zTdHboHNaT1u_mP40SQ/exec";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      weddingDate,
      dress,
      message,
    } = await req.json();

    // REQUIRED FIELDS
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    /*
    ==========================================
    1. SAVE TO GOOGLE SHEETS
    ==========================================
    */

    try {
      const googleResponse = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          weddingDate: weddingDate || "",
          dress: dress || "",
          message: message || "",
          source: "booking",
        }),
      });

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

    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      replyTo: email,

      subject: `New Consultation Request – ${name}`,

      html: `
        <div
          style="
            font-family:Arial,sans-serif;
            padding:40px;
            max-width:700px;
            margin:auto;
          "
        >

          <h1
            style="
              color:#978065;
              margin-bottom:30px;
            "
          >
            New Consultation Request
          </h1>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Name
              </td>

              <td style="padding:12px;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Email
              </td>

              <td style="padding:12px;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Phone
              </td>

              <td style="padding:12px;">
                ${phone}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Wedding Date
              </td>

              <td style="padding:12px;">
                ${weddingDate || "Not specified"}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Wedding Dress
              </td>

              <td style="padding:12px;">
                ${dress || "Not specified"}
              </td>
            </tr>

            <tr>
              <td style="padding:12px;font-weight:bold;">
                Message
              </td>

              <td style="padding:12px;">
                ${message || "-"}
              </td>
            </tr>

          </table>

          <hr style="margin:30px 0;border:none;border-top:1px solid #eee;" />

          <p
            style="
              color:#978065;
              font-size:14px;
            "
          >
            SOLTERO Bridal Boutique
          </p>

        </div>
      `,
    });

    /*
    ==========================================
    3. EMAIL TO CLIENT
    ==========================================
    */

    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",

      // IMPORTANT:
      // The email goes to the customer,
      // not to SOLTERO.
      to: email,

      subject: "Your Consultation Request – SOLTERO Bridal Boutique",

      html: `
        <div
          style="
            font-family:Arial,sans-serif;
            max-width:700px;
            margin:auto;
            padding:40px;
            color:#333;
            line-height:1.8;
          "
        >

          <h1
            style="
              color:#978065;
              margin-bottom:30px;
              font-weight:400;
            "
          >
            Thank You for Your Request
          </h1>

          <p>
            Dear <strong>${name}</strong>,
          </p>

          <p>
            Thank you for choosing
            <strong>SOLTERO Bridal Boutique</strong>.
          </p>

          <p>
            We have successfully received your
            consultation request.
          </p>

          ${
            weddingDate
              ? `
                <p>
                  <strong>Wedding Date:</strong>
                  ${weddingDate}
                </p>
              `
              : ""
          }

          ${
            dress
              ? `
                <p>
                  <strong>Preferred Dress:</strong>
                  ${dress}
                </p>
              `
              : ""
          }

          <p>
            To complete your booking, please choose your
            preferred appointment time by clicking the
            button below.
          </p>

          <div
            style="
              text-align:center;
              margin:50px 0;
            "
          >

            <a
              href="https://calendly.com/solterobridaluk/30min"
              style="
                background:#978065;
                color:#ffffff;
                text-decoration:none;
                padding:18px 38px;
                display:inline-block;
                letter-spacing:2px;
                text-transform:uppercase;
                font-size:13px;
                border-radius:2px;
              "
            >
              Choose Your Appointment
            </a>

          </div>

          <p>
            If you have any questions before your
            consultation, simply reply to this email
            and one of our bridal stylists will be
            delighted to assist you.
          </p>

          <p>
            We look forward to welcoming you to
            <strong>SOLTERO Bridal Boutique.</strong>
          </p>

          <br />

          <p>
            Kind regards,
            <br /><br />

            <strong>
              SOLTERO Bridal Boutique
            </strong>
          </p>

        </div>
      `,
    });

    /*
    ==========================================
    4. SUCCESS
    ==========================================
    */

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}