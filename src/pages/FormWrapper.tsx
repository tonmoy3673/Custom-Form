import React, { type ReactNode } from "react";

// ========= formData ======/
interface FormData {
  title: string;
  children: ReactNode;
}

const FormWrapper: React.FC<FormData> = ({ title, children }) => {
  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          padding: "5px 0",
          fontSize: "18px",
          color: "gray",
        }}
      >
        {title}
      </h4>
      {/* ====== children ====== */}
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
        alignItems:"center",
          gridTemplateColumns: "auto minmax(auto,400px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
