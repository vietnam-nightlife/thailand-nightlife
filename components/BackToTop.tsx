"use client";

export default function BackToTop() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "94px",
        padding: "16px 8px",
        background: "#ffffff",
        border: "1px solid #e5e5e5",
        borderRadius: "20px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "18px",
      }}
    >
      {/* 카카오톡 */}
      <a
        href="https://open.kakao.com/o/snvQKD4h"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#444",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#FEE500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 7px",
            fontSize: "12px",
            fontWeight: "800",
          }}
        >
          TALK
        </div>
        카카오 상담
      </a>

      {/* 텔레그램 */}
      <a
        href="https://t.me/boom3230"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "#444",
          textAlign: "center",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#229ED9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 7px",
            fontSize: "24px",
            color: "#fff",
          }}
        >
          ➤
        </div>
        텔레그램
      </a>

      {/* TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "none",
          background: "#00bfae",
          color: "#fff",
          fontSize: "13px",
          fontWeight: "800",
          cursor: "pointer",
        }}
      >
        TOP
      </button>
    </div>
  );
}
