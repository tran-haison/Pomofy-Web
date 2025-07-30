import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <h2 style="color: #333333; margin: 0; font-size: 24px; padding: 0;">New Contact Form Submission</h2>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #666666;"><strong style="color: #333333;">Name:</strong> ${firstName} ${lastName}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #666666;"><strong style="color: #333333;">Email:</strong> ${email}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #666666;"><strong style="color: #333333;">Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px 0; color: #333333;"><strong>Message:</strong></p>
              <p style="margin: 0; color: #666666; line-height: 1.5;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #999999; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the contact form on Pomofy website</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
