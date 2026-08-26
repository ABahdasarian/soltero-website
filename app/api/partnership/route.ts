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

    // Required fields
    if (!name || !email || !phone || !country || !city) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    /*
     * =========================
     * EMAIL TO SOLTERO
     * =========================
     */

    const adminEmail = await resend.emails.send({
      from: "SOLTERO Bridal <partnership@soltero.co.uk>",
      to: ["solterobridaluk@gmail.com"],
      replyTo: email,
      subject: `New Partnership Request — ${name}`,
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
          color: #2A2A2A;
          max-width: 650px;
          margin: 0 auto;
        ">

          <h1 style="
            font-weight: 400;
            font-size: 28px;
            margin-bottom: 30px;
          ">
            New Partnership Request
          </h1>

          <div style="
            border-top: 1px solid #ECE6DF;
            border-bottom: 1px solid #ECE6DF;
            padding: 25px 0;
          ">

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Mobile Number:</strong><br />
              ${phone}
            </p>

            <p>
              <strong>Shop:</strong><br />
              ${shop || "Not provided"}
            </p>

            <p>
              <strong>Country:</strong><br />
              ${country}
            </p>

            <p>
              <strong>City:</strong><br />
              ${city}
            </p>

            <p>
              <strong>Message:</strong><br />
              ${message || "No message provided"}
            </p>

          </div>

          <p style="
            margin-top: 30px;
            color: #978065;
            letter-spacing: 2px;
            font-size: 13px;
          ">
            SOLTERO BRIDAL BOUTIQUE
          </p>

        </div>
      `,
    });

    if (adminEmail.error) {
      console.error(adminEmail.error);

      return Response.json(
        { error: "Failed to send partnership request." },
        { status: 500 }
      );
    }

    /*
     * =========================
     * CONFIRMATION EMAIL
     * =========================
     */

    const customerEmail = await resend.emails.send({
      from: "SOLTERO Bridal <partnership@soltero.co.uk>",
      to: [email],
      subject: "Thank You for Your Partnership Request — SOLTERO",
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background: #FAF8F5;
          padding: 60px 20px;
          color: #2A2A2A;
        ">

          <div style="
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            padding: 55px 45px;
            text-align: center;
          ">

            <p style="
              margin: 0;
              color: #B9935D;
              font-size: 11px;
              letter-spacing: 4px;
              text-transform: uppercase;
            ">
              SOLTERO
            </p>

            <h1 style="
              margin: 30px 0 20px;
              font-size: 34px;
              font-weight: 400;
              line-height: 1.3;
            ">
              Thank You for Your Request
            </h1>

            <div style="
              width: 60px;
              height: 1px;
              background: #B9935D;
              margin: 30px auto;
            "></div>

            <p style="
              font-size: 16px;
              line-height: 1.9;
              color: #666666;
            ">
              Dear ${name},
            </p>

            <p style="
              font-size: 16px;
              line-height: 1.9;
              color: #666666;
            ">
              Thank you for your interest in becoming a SOLTERO partner.
              We have received your partnership enquiry and our team will
              review your request carefully.
            </p>

            <p style="
              font-size: 16px;
              line-height: 1.9;
              color: #666666;
            ">
              We will be in touch with you shortly.
            </p>

            <div style="
              margin-top: 45px;
              padding-top: 25px;
              border-top: 1px solid #ECE6DF;
            ">

              <p style="
                margin: 0;
                color: #978065;
                font-size: 12px;
                letter-spacing: 3px;
                text-transform: uppercase;
              ">
                SOLTERO Bridal Boutique
              </p>

              <p style="
                margin-top: 10px;
                color: #999999;
                font-size: 12px;
              ">
                soltero.co.uk
              </p>

            </div>

          </div>

        </div>
      `,
    });

    if (customerEmail.error) {
      console.error(customerEmail.error);

      // The admin email was already successfully sent,
      // so we don't fail the entire request here.
      return Response.json({
        success: true,
        warning: "Request received, but confirmation email could not be sent.",
      });
    }

    /*
     * =========================
     * SUCCESS
     * =========================
     */

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}