"use client";

export default function BackToTop() {
  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-end",
      }}
    >
      {/* 맨 위로 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로 이동"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#292929",
          color: "white",
          border: "1px solid #555",
          fontSize: "28px",
          cursor: "pointer",
        }}
      >
        ↑
      </button>

      {/* 카카오톡 상담 */}
      <a
        href="https://open.kakao.com/o/snvQKD4h"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "150px",
          height: "48px",
          borderRadius: "24px",
          background: "#FEE500",
          color: "#191919",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          textDecoration: "none",
          fontSize: "15px",
        }}
      >
        💬 카카오톡 상담
      </a>

      {/* 텔레그램 상담 */}
      <a
        href="https://t.me/boom3230"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "150px",
          height: "48px",
          borderRadius: "24px",
          background: "#229ED9",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          textDecoration: "none",
          fontSize: "15px",
        }}
      >
        ✈️ 텔레그램 상담
      </a>
    </div>
  );
}
