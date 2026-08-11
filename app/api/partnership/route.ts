import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      shop,
      country,
      city,
      message,
    } = body;

    if (!name || !email || !phone || !country || !city) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "SOLTERO Website <onboarding@resend.dev>",
      to: ["solterobridaluk@gmail.com"],
      replyTo: email,
      subject: `New Partnership Request — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #2A2A2A;">
          <h1 style="font-weight: 400;">
            New Partnership Request
          </h1>

          <hr />

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Mobile Number:</strong> ${phone}</p>

          <p><strong>Shop:</strong> ${shop || "Not provided"}</p>

          <p><strong>Country:</strong> ${country}</p>

          <p><strong>City:</strong> ${city}</p>

          <p><strong>Message:</strong></p>

          <p>
            ${message || "No message provided"}
          </p>

          <hr />

          <p style="color: #978065;">
            SOLTERO Bridal Boutique
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}