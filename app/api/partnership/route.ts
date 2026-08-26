import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycby1GqitoCo1tHrz76j_CkBEJND7R7bzxdOAKd6_hY9Z542PPgNQI0HjSCv_PkZzVVpuWg/exec";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      shop,
      country,
      city,
      message,
    } = await req.json();

    // REQUIRED FIELDS
    if (!name || !email || !phone || !country || !city) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    /*
    ==========================================
    1. SAVE PARTNER TO GOOGLE SHEETS
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
          shop: shop || "",
          country,
          city,
          message: message || "",
          source: "partnership",
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
      from: "SOLTERO Bridal <hello@soltero.co.uk>",
      to: "solterobridaluk@gmail.com",
      replyTo: email,

      subject: `New Partnership Request – ${name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 700px;
            margin: auto;
            color: #2A2A2A;
          "
        >

          <h1
            style="
              color: #978065;
              margin-bottom: 30px;
              font-weight: 400;
            "
          >
            New Partnership Request
          </h1>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
            "
          >

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Name
              </td>
              <td style="padding: 12px;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Email
              </td>
              <td style="padding: 12px;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Mobile Number
              </td>
              <td style="padding: 12px;">
                ${phone}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Boutique / Shop
              </td>
              <td style="padding: 12px;">
                ${shop || "Not provided"}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Country
              </td>
              <td style="padding: 12px;">
                ${country}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                City
              </td>
              <td style="padding: 12px;">
                ${city}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; font-weight: bold;">
                Message
              </td>
              <td style="padding: 12px;">
                ${message || "-"}
              </td>
            </tr>

          </table>

          <hr
            style="
              margin: 30px 0;
              border: none;
              border-top: 1px solid #eee;
            "
          />

          <p
            style="
              color: #978065;
              font-size: 14px;
            "
          >
            SOLTERO Bridal Boutique
          </p>

        </div>
      `,
    });

    /*
    ==========================================
    3. CONFIRMATION EMAIL TO PARTNER
    ==========================================
    */

    try {
      await resend.emails.send({
        from: "SOLTERO Bridal <onboarding@resend.dev>",
        to: email,

        subject:
          "Thank You for Your Partnership Request – SOLTERO Bridal",

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 700px;
              margin: auto;
              padding: 40px;
              color: #333;
              line-height: 1.8;
            "
          >

            <h1
              style="
                color: #978065;
                margin-bottom: 30px;
                font-weight: 400;
              "
            >
              Thank You for Your Interest
            </h1>

            <p>
              Dear <strong>${name}</strong>,
            </p>

            <p>
              Thank you for your interest in partnering
              with <strong>SOLTERO Bridal Boutique</strong>.
            </p>

            <p>
              We have successfully received your
              partnership request.
            </p>

            <p>
              Our team will review your details and
              contact you shortly to discuss the
              next steps.
            </p>

            <hr
              style="
                margin: 35px 0;
                border: none;
                border-top: 1px solid #eee;
              "
            />

            <p>
              <strong>Boutique / Shop:</strong>
              ${shop || "Not provided"}
            </p>

            <p>
              <strong>Country:</strong>
              ${country}
            </p>

            <p>
              <strong>City:</strong>
              ${city}
            </p>

            <p style="margin-top: 40px;">
              Kind regards,
              <br /><br />
              <strong>SOLTERO Bridal Boutique</strong>
            </p>

          </div>
        `,
      });
    } catch (customerEmailError) {
      console.error(
        "Partner confirmation email failed:",
        customerEmailError
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