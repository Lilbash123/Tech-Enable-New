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
    const doc = new jsPDF();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Tech Enable Solution", 105, 25, { align: "center" });

    // Subtitle
    doc.setFontSize(18);
    doc.text("Certificate of Completion", 105, 45, {
      align: "center",
    });

    // Body
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);

    doc.text("This certificate is proudly presented to", 105, 70, {
      align: "center",
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(studentName, 105, 85, {
      align: "center",
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("for successfully completing", 105, 100, {
      align: "center",
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(courseTitle, 105, 115, {
      align: "center",
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(
      `Date: ${
        completedAt
          ? new Date(completedAt).toLocaleDateString()
          : new Date().toLocaleDateString()
      }`,
      20,
      160
    );

    doc.text("Authorized by Tech Enable Solution", 20, 180);

    doc.save(`${courseTitle}-Certificate.pdf`);
  };

  return (
    <button
      onClick={downloadCertificate}
      className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
    >
      Download Certificate
    </button>
  );
}
