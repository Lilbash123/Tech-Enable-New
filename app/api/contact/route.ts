import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { full_name, email, phone, subject, message } = body;

    if (!full_name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const supabase = createClient();

    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name,
          email,
          phone,
          subject,
          message,
        },
      ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
