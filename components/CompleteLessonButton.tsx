"use client";

import { useTransition } from "react";
import { completeLesson } from "@/app/courses/actions";

type Props = {
  lessonId: string;
  studentId: string;
  courseId: string;
};

export default function CompleteLessonButton({
  lessonId,
  studentId,
  courseId,
}: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="mt-2 rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700 disabled:opacity-50"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          const result = await completeLesson(
            lessonId,
            studentId,
            courseId
          );

          if (result.success) {
            alert(`Lesson completed! Progress: ${result.progress}%`);
            location.reload();
          } else {
            alert(result.error);
          }
        })
      }
    >
      {isPending ? "Saving..." : "✅ Complete Lesson"}
    </button>
  );
}
