import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";
import { SENDGRID_API_KEY } from "$env/static/private";

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL =
  "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({ request }) {
  const requestBody = await request.json();

  const response = await fetch(PDF_GUIDE_URL);
  const pdfBuffer = await response.arrayBuffer();
  const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

  const customerEmail = requestBody.data.object.customer_details.email;
  const customerName = requestBody.data.object.customer_details.name;

  const message = {
    to: customerEmail,
    from: "jacobleesinger@gmail.com",
    subject: "Your Purchase Confirmation - Complete Spain Relocation Guide",
    html: `
      <p>Hi ${customerName},</p>
      <p>Thank you for your purchase of the Complete Spain Relocation Guide. You will receive your ebook in your email.</p>
      <p>Best regards, <br />Jacob Singer</p>
    `,
    attachments: [
      {
        content: pdfBase64,
        filename: "Complete Spain Relocation Guide.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  try {
    const sendgridResponse = await sgMail.send(message);
    return json({ response: "email sent" });
  } catch (error) {
    console.error("error sending email", error);
    return json({ error: error.message }, { status: 500 });
  }
}
