import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demonstration
// In production, use a proper database
const subscribedEmails = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribedEmails.has(email.toLowerCase())) {
      return NextResponse.json(
        { error: 'Email is already subscribed' },
        { status: 409 }
      );
    }

    // Add to our simple storage
    subscribedEmails.add(email.toLowerCase());
    
    // For now, we'll simulate a successful subscription
    // and log the email (in production, remove this)
    console.log(`Newsletter subscription: ${email} (Total: ${subscribedEmails.size})`);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real implementation, you would:
    // 1. Add the email to your newsletter service
    // 2. Handle any errors from the service
    // 3. Return appropriate responses

    // Example with a hypothetical newsletter service:
    /*
    try {
      await newsletterService.subscribe({
        email,
        tags: ['bookfi-signup'],
        source: 'website'
      });
    } catch (serviceError) {
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }
    */

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter',
      email
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    totalSubscribers: subscribedEmails.size,
    message: 'Newsletter subscription stats'
  });
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}