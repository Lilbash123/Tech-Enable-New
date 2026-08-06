"use server";

import { createClient } from "@/lib/supabase/server";

export async function completeLesson(
  lessonId: string,
  studentId: string,
  courseId: string
) {
  const supabase = createClient();

  // 1. Mark lesson as completed
  const { error: progressError } = await supabase
    .from("lesson_progress")
    .upsert({
      lesson_id: lessonId,
      student_id: studentId,
      completed: true,
      completed_at: new Date().toISOString(),
    });

  if (progressError) {
    return {
      success: false,
      error: progressError.message,
    };
  }

  // 2. Count total lessons in the course
  const { count: totalLessons } = await supabase
    .from("lessons")
    .select("*", { count: "exact", head: true })
    .eq("course_id", courseId);

  // 3. Count completed lessons
  
const { data: completedLessonsData, error: completedError } = await supabase
  .from("lesson_progress")
  .select(`
    lesson_id,
    lessons!inner(course_id)
  `)
  .eq("student_id", studentId)
  .eq("completed", true)
  .eq("lessons.course_id", courseId);

if (completedError) {
  return {
    success: false,
    error: completedError.message,
  };
}

const completedLessons = completedLessonsData.length;

  const progress =
    totalLessons && totalLessons > 0
      ? Math.round(((completedLessons ?? 0) / totalLessons) * 100)
      : 0;

  // 4. Update enrollment progress
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
