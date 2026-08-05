import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Email to SOLTERO
    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      subject: `New Bridal Appointment – ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:700px;margin:auto">

        <h1 style="color:#978065;margin-bottom:30px;">
          New Bridal Appointment
        </h1>

        <table style="width:100%;border-collapse:collapse;">

          <tr>
            <td style="padding:12px;font-weight:bold;">Name</td>
            <td>${name}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">Email</td>
            <td>${email}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">Phone</td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">Wedding Date</td>
            <td>${weddingDate}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">Wedding Dress</td>
            <td>${dress || "Not specified"}</td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;">Message</td>
            <td>${message || "-"}</td>
          </tr>

        </table>

      </div>
      `,
    });

    // Confirmation email to customer
    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      subject: "Your Appointment Request – SOLTERO",
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:700px;margin:auto">

        <h1 style="color:#978065;">
          Thank You
        </h1>

        <p>Dear <strong>${name}</strong>,</p>

        <p>
          Thank you for booking your bridal consultation with
          <strong>SOLTERO Bridal Boutique</strong>.
        </p>

        <p>
          We have successfully received your appointment request.
        </p>

        <h3 style="margin-top:35px;">
          Your Request
        </h3>

        <table style="width:100%;border-collapse:collapse;">

          <tr>
            <td style="padding:10px;font-weight:bold;">Wedding Dress</td>
            <td>${dress || "Not specified"}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Wedding Date</td>
            <td>${weddingDate}</td>
          </tr>

        </table>

        <p style="margin-top:35px;">
          One of our bridal stylists will contact you within
          <strong>24 hours</strong>
          to confirm your appointment.
        </p>

        <p>
          We look forward to welcoming you to SOLTERO.
        </p>

        <br>

        <p>
          Kind regards,<br>
          <strong>SOLTERO Bridal Boutique</strong>
        </p>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}