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

    await resend.emails.send({
      from: "SOLTERO <onboarding@resend.dev>",
      to: "solterobridaluk@gmail.com",
      subject: `New Bridal Appointment - ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;max-width:700px;margin:auto">
      
      <h1 style="color:#978065;margin-bottom:30px">
      New Bridal Appointment
      </h1>

      <table style="width:100%;border-collapse:collapse">

      <tr>
      <td style="padding:10px;font-weight:bold;">Name</td>
      <td>${name}</td>
      </tr>

      <tr>
      <td style="padding:10px;font-weight:bold;">Email</td>
      <td>${email}</td>
      </tr>

      <tr>
      <td style="padding:10px;font-weight:bold;">Phone</td>
      <td>${phone}</td>
      </tr>

      <tr>
      <td style="padding:10px;font-weight:bold;">Wedding Date</td>
      <td>${weddingDate}</td>
      </tr>

      <tr>
      <td style="padding:10px;font-weight:bold;">Dress</td>
      <td>${dress}</td>
      </tr>

      <tr>
      <td style="padding:10px;font-weight:bold;">Message</td>
      <td>${message}</td>
      </tr>

      </table>

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