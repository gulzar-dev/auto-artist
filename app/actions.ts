'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    const { name, email, phone, service, message } = formData;

    const data = await resend.emails.send({
      from: 'Auto Artist <onboarding@resend.dev>', // Replace with your verified domain
      to: ['autoartist007@gmail.com'],
      subject: `New Enquiry from ${name} - ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Service Enquiry</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
