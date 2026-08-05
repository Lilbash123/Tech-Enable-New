"use server";

import { createClient } from "@/lib/supabase/server";

export async function completeLesson(
  lessonId: string,
  studentId: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("lesson_progress")
    .upsert({
      lesson_id: lessonId,
      student_id: studentId,
      completed: true,
      completed_at: new Date().toISOString(),
    });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
  };
}
