"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const verifyCertificate = async () => {
    setLoading(true);

    const supabase = createClient();

   const { data, error } = await supabase
  .from("certificates")
  .select(`
    certificate_id,
    issued_at,
    profiles:student_id (
      full_name
    ),
    courses:course_id (
      title
    )
  `)
  .eq("certificate_id", certificateId)
  .single();

    console.log(error);
console.log(data);

if (error) {
  alert(error.message);
  setResult(null);
} else {
  setResult(data);
}

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Verify Certificate
      </h1>

      <input
        type="text"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        placeholder="Enter Certificate ID"
        className="w-full border rounded-lg p-3"
      />

      <button
        onClick={verifyCertificate}
        className="mt-4 rounded-lg bg-teal-600 px-6 py-3 text-white"
      >
        {loading ? "Checking..." : "Verify"}
      </button>

      {result && (
        <div className="mt-8 rounded-lg border p-4">
          <h2 className="text-xl font-bold text-green-600">
            ✅ Certificate Verified
          </h2>

          <p>
            <strong>Certificate ID:</strong>{" "}
            {result.certificate_id}
          </p>

          <p>
  <strong>Student:</strong>{" "}
  {result.profiles?.full_name}
</p>

<p>
  <strong>Course:</strong>{" "}
  {result.courses?.title}
</p>

          <p>
            <strong>Issued:</strong>{" "}
            {new Date(result.issued_at).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}
