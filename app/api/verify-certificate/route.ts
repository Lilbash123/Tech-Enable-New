import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@lib/supabase/server";

export async function GET(req: NextRequest) {
  const certificateId = req.nextUrl.searchParams.get("id");

  if (!certificateId) {
    return NextResponse.json(
      { error: "Certificate ID is required" },
      { status: 400 }
    );
  }

  const supabase = createClient();

  // Get certificate
  const { data: certificate, error } = await supabase
    .from("certificates")
    .select("*")
    .eq("certificate_id", certificateId)
    .single();

  if (error || !certificate) {
    return NextResponse.json(
      { error: "Certificate not found" },
      { status: 404 }
    );
  }

  // Get student profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", certificate.student_id)
    .single();

  // Get course
  const { data: course } = await supabase
    .from("courses")
    .select("title")
    .eq("id", certificate.course_id)
    .single();

  return NextResponse.json({
    certificate_id: certificate.certificate_id,
    student_name: profile?.full_name ?? "Unknown Student",
    course_name: course?.title ?? "Unknown Course",
    issued_at: certificate.issued_at,
  });
}
