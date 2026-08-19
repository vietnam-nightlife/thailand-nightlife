"use client";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#292929",
        color: "white",
        border: "1px solid #555",
        fontSize: "28px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      ↑
    </button>
  );
}
