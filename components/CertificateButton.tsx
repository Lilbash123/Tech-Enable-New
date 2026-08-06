"use client";

import { useEffect, useState } from "react";
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
  const [logoBase64, setLogoBase64] = useState("");

  useEffect(() => {
    fetch("/logo.png")
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          setLogoBase64(reader.result as string);
        };

        reader.readAsDataURL(blob);
      });
  }, []);

  const downloadCertificate = () => {
    const doc = new jsPDF("landscape", "mm", "a4");

    // Border
    doc.setDrawColor(0, 170, 150);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Logo
    if (logoBase64) {
      doc.addImage(logoBase64, "PNG", 18, 18, 22, 22);
    }

    // Company
    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    doc.setTextColor(0, 170, 150);
    doc.text("Tech Enable Solution", 148, 30, {
      align: "center",
    });

    // Title
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text("CERTIFICATE OF COMPLETION", 148, 50, {
      align: "center",
    });

    // Presented text
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("This certificate is proudly presented to", 148, 70, {
      align: "center",
    });

    // Student Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text(studentName, 148, 92, {
      align: "center",
    });

    // Completion text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("For successfully completing the course", 148, 112, {
      align: "center",
    });

    // Course
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 170, 150);
    doc.text(courseTitle, 148, 132, {
      align: "center",
    });

    // Date
    doc.setFont("helvetica", "normal");
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

    // Founder
    doc.setFont("helvetica", "bold");
    doc.text("Founder & CEO", 230, 168, {
      align: "center",
    });

    doc.line(200, 175, 260, 175);

    doc.setFont("helvetica", "normal");
    doc.text("Bashir Abdulkarim Liman", 230, 183, {
      align: "center",
    });

    doc.save(`${courseTitle}-Certificate.pdf`);
  };

  return (
    <button
      onClick={downloadCertificate}
      className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
    >
      Download Certificate
    </button>
  );
}
