"use client";

import { jsPDF } from "jspdf";

type Props = {
  studentName: string;
  courseTitle: string;
  completedAt?: string;
};

export default function CertificateButton({
  studentName,
  courseTitle,
  completedAt,
}: Props) {
  const downloadCertificate = () => {
    const doc = new jsPDF("landscape", "mm", "a4");

    // Border
    doc.setDrawColor(0, 170, 150);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Company
    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    doc.setTextColor(0, 170, 150);
    doc.text("Tech Enable Solution", 148, 30, { align: "center" });

    // Title
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text("CERTIFICATE OF COMPLETION", 148, 50, {
      align: "center",
    });

    doc.setFontSize(14);
    doc.text("This certificate is proudly presented to", 148, 70, {
      align: "center",
    });

    // Student
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.text(studentName, 148, 92, {
      align: "center",
    });

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("For successfully completing the course", 148, 112, {
      align: "center",
    });

    // Course
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 170, 150);
    doc.text(courseTitle, 148, 132, {
      align: "center",
    });

    // Date
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(
      `Completion Date: ${
        completedAt
          ? new Date(completedAt).toLocaleDateString()
          : new Date().toLocaleDateString()
      }`,
      20,
      180
    );

    // Signature
    doc.line(200, 175, 260, 175);
    doc.text("Authorized Signature", 230, 183, {
      align: "center",
    });

    doc.save(`${courseTitle}-Certificate.pdf`);
  };

  return (
    <button
      onClick={downloadCertificate}
      className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white"
    >
      Download Certificate
    </button>
  );
}
