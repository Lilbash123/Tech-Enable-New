"use client";

type Props = {
  studentName: string;
  courseTitle: string;
  completedAt?: string;
  certificateId?: string;
};

export default function CertificateTemplate({
  studentName,
  courseTitle,
  completedAt,
  certificateId,
}: Props) {
  return (
    <div
      id="certificate"
      style={{
        width: "1123px",
        height: "794px",
        background: "#ffffff",
        border: "12px solid #14b8a6",
        boxSizing: "border-box",
        padding: "25px",
        position: "relative",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Inner Border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "3px solid #d4af37",
          padding: "35px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Tech Enable Solution"
          style={{
            width: "130px",
            position: "absolute",
            left: 10,
            top: 10,
          }}
        />

        {/* Company Name */}
        <h1
          style={{
            textAlign: "center",
            color: "#0f766e",
            fontSize: "42px",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          Tech Enable Solution
        </h1>

        <p
          style={{
            textAlign: "center",
            letterSpacing: "5px",
            color: "#777",
            marginTop: "8px",
            fontSize: "18px",
          }}
        >
          CERTIFICATE OF COMPLETION
        </p>

        <div
          style={{
            width: "180px",
            height: "3px",
            background: "#d4af37",
            margin: "20px auto",
          }}
        />

        <p
          style={{
            textAlign: "center",
            fontSize: "22px",
            color: "#555",
            marginTop: "35px",
          }}
        >
          This certificate is proudly presented to
        </p>

        <h1
          style={{
            textAlign: "center",
            color: "#111827",
            fontSize: "56px",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {studentName}
        </h1>

        <div
          style={{
            width: "420px",
            height: "2px",
            background: "#d4af37",
            margin: "0 auto",
          }}
        />

<div
  style={{
    width: "420px",
    height: "2px",
    background: "#d4af37",
    margin: "0 auto",
  }}
/>

<p
  style={{
    textAlign: "center",
    marginTop: "40px",
    fontSize: "22px",
    color: "#444",
  }}
>
  For successfully completing the professional course
</p>

<h2
  style={{
    textAlign: "center",
    color: "#0f766e",
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "18px",
    marginBottom: "25px",
    textTransform: "uppercase",
  }}
>
  {courseTitle}
</h2>

<p
  style={{
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto",
    lineHeight: 1.8,
    fontSize: "18px",
    color: "#555",
  }}
>
  This certifies that the above-named student has successfully completed all
  required learning activities and assessments for this course under
  <strong> Tech Enable Solution</strong>.
</p>

{/* Certificate Information */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "70px",
    fontSize: "18px",
  }}
>
  <div>
    <p>
      <strong>Certificate ID:</strong><br />
      {certificateId ?? "N/A"}
    </p>

    <p style={{ marginTop: "18px" }}>
      <strong>Completion Date:</strong><br />
      {completedAt
        ? new Date(completedAt).toLocaleDateString()
        : new Date().toLocaleDateString()}
    </p>
  </div>

  <div
    style={{
      width: "130px",
      height: "130px",
      border: "2px dashed #14b8a6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#888",
      fontSize: "14px",
    }}
  >
    QR CODE
  </div>
</div>

{/* Signature Section */}
<div
  style={{
    position: "absolute",
    bottom: "35px",
    left: "35px",
    right: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }}
>
  <div>
    <img
      src="/signature.png"
      alt="Signature"
      style={{
        width: "170px",
        marginBottom: "-5px",
      }}
    />

    <div
      style={{
        width: "220px",
        borderTop: "2px solid #0f766e",
        marginBottom: "8px",
      }}
    />

    <div
      style={{
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Bashir Abdulkarim Liman
    </div>

    <div
      style={{
        color: "#666",
        fontSize: "15px",
      }}
    >
      Founder / CEO
    </div>

    <div
      style={{
        color: "#14b8a6",
        fontSize: "15px",
        fontWeight: "bold",
      }}
    >
      Tech Enable Solution
    </div>
  </div>

  <div
    style={{
      textAlign: "right",
      color: "#888",
      fontSize: "14px",
    }}
  >
    <strong>Verify this certificate</strong>
    <br />
    https://tech-enable-new.vercel.app/verify-certificate
  </div>
</div>

      </div>
    </div>
  );
}
