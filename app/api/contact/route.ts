// app/api/contact/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
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

    // EMAIL TO SOLTERO
    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      subject: `New Consultation Request – ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:700px;margin:auto">

        <h1 style="color:#978065;margin-bottom:30px;">
          New Consultation Request
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

    // EMAIL TO CLIENT
    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      subject: "Your Consultation Request – SOLTERO Bridal Boutique",
      html: `
      <div style="
        font-family:Arial,sans-serif;
        max-width:700px;
        margin:auto;
        padding:40px;
        color:#333;
        line-height:1.8;
      ">

        <h1 style="
          color:#978065;
          margin-bottom:30px;
        ">
          Thank You for Your Request
        </h1>

        <p>
          Dear <strong>${name}</strong>,
        </p>

        <p>
          Thank you for choosing
          <strong> SOLTERO Bridal Boutique</strong>.
        </p>

        <p>
          We have successfully received your consultation request.
        </p>

        <p>
          To complete your booking, please choose your preferred
          appointment time by clicking the button below.
        </p>

        <div style="text-align:center;margin:50px 0;">

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
          If you have any questions before your consultation,
          simply reply to this email and one of our bridal
          stylists will be delighted to assist you.
        </p>

        <p>
          We look forward to welcoming you to
          <strong> SOLTERO Bridal Boutique.</strong>
        </p>

        <br>

        <p>
          Kind regards,
          <br><br>

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
      },
      {
        status: 500,
      }
    );
  }
}