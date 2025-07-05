// Simple email service that can work with multiple providers
export interface EmailMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function createContactEmail(data: ContactFormData, toEmail: string): EmailMessage {
  const subject = `Portfolio Contact Form: Message from ${data.name}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #00ADB5;">New Contact Form Message</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00ADB5;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
      <p style="color: #666; font-size: 14px;">
        This message was sent from your portfolio website contact form.
      </p>
    </div>
  `;

  const text = `
New Contact Form Message

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from your portfolio website contact form.
  `;

  return {
    to: toEmail,
    from: data.email,
    subject,
    html,
    text
  };
}

// Simple email service using built-in Node.js capabilities
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // For now, we'll log the email data and return success
    // In a real implementation, you would integrate with your preferred email service
    const emailData = createContactEmail(data, "john.smith@email.com"); // Replace with your actual email
    
    console.log("📧 Contact form submission:");
    console.log(`From: ${data.name} (${data.email})`);
    console.log(`Subject: ${emailData.subject}`);
    console.log(`Message: ${data.message}`);
    console.log("---");
    
    // TODO: Replace this with your preferred email service integration
    // Examples: Nodemailer with Gmail, Resend, EmailJS, etc.
    
    return {
      success: true,
      message: "Message received successfully! I'll get back to you soon."
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact me directly."
    };
  }
}