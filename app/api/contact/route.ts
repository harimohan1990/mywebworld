import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, project, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // For now, just log the submission (you'll configure email later)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      project,
      budget,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Configure email service (Nodemailer, SendGrid, or Mailgun)
    // For production, you'll want to:
    // 1. Set up email service credentials in environment variables
    // 2. Send notification email to yourself
    // 3. Send auto-reply to the client
    // 4. Store submission in database (optional)

    return NextResponse.json(
      { message: 'Thank you for your message! I will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'There was an error sending your message. Please try again.' },
      { status: 500 }
    );
  }
}