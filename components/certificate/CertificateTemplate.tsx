"use client";

type Props = {
  studentName: string;
  courseTitle: string;
  completedAt?: string;
};

export default function CertificateTemplate({
  studentName,
  courseTitle,
  completedAt,
}: Props) {
  return (
    <div
      id="certificate"
      style={{
        width: "1123px",
        height: "794px",
        background: "#fff",
        border: "8px solid #14b8a6",
        padding: "40px",
        boxSizing: "border-box",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Tech Enable Solution"
        style={{
          width: "220px",
          position: "absolute",
          top: 30,
          left: 30,
        }}
      />

      {/* Company */}
      <h1
        style={{
          textAlign: "center",
          color: "#14b8a6",
          marginTop: "80px",
          fontSize: "40px",
        }}
      >
        Tech Enable Solution
      </h1>

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "32px",
        }}
      >
        CERTIFICATE OF COMPLETION
      </h2>

      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "22px",
        }}
      >
        This certificate is proudly presented to
      </p>

      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "48px",
        }}
      >
        {studentName}
      </h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "22px",
        }}
      >
        For successfully completing the course
      </p>

      <h2
        style={{
          textAlign: "center",
          color: "#14b8a6",
          fontSize: "38px",
        }}
      >
        {courseTitle}
      </h2>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          fontSize: "18px",
        }}
      >
        Completion Date:{" "}
        {completedAt
          ? new Date(completedAt).toLocaleDateString()
          : new Date().toLocaleDateString()}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 60,
          textAlign: "center",
        }}
      >
        <div
          style={{
            borderTop: "3px solid #14b8a6",
            width: "220px",
            marginBottom: "10px",
          }}
        />

        <strong>Founder & CEO</strong>
        <br />
        Bashir Abdulkarim Liman
      </div>
    </div>
  );
}
