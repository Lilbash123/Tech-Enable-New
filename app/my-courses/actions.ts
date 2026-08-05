"use server";

import { createClient } from "@/lib/supabase/server";

export async function completeLesson(
  lessonId: string,
  studentId: string,
  courseId: string
) {
  const supabase = createClient();

  const { error } = await supabase
    .from("lesson_progress")
    .upsert(
      {
        lesson_id: lessonId,
        student_id: studentId,
        completed: true,
        completed_at: new Date().toISOString(),
      },
      {
        onConflict: "student_id,lesson_id",
      }
    );

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  const { count: totalLessons } = await supabase
    .from("lessons")
    .select("*", { count: "exact", head: true })
    .eq("course_id", courseId);

  const { count: completedLessons } = await supabase
    .from("lesson_progress")
    .select("*", { count: "exact", head: true })
    .eq("student_id", studentId)
    .eq("completed", true);

  const progress =
    totalLessons && totalLessons > 0
      ? Math.round(((completedLessons ?? 0) / totalLessons) * 100)
      : 0;

  await supabase
    .from("enrollments")
    .update({ progress })
    .eq("student_id", studentId)
    .eq("course_id", courseId);

  return {
    success: true,
    progress,
  };
}
