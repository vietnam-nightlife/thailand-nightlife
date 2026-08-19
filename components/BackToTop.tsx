"use client";

export default function BackToTop() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
      }}
    >
      {/* 카카오톡 */}
      <a
        href="https://open.kakao.com/o/snvQKD4h"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/kakaotalk.web"
          alt="카카오톡 상담"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
          }}
        />

        <span
          style={{
            marginTop: "5px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          카카오 상담
        </span>
      </a>

      {/* 텔레그램 */}
      <a
        href="https://t.me/boom3230"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="/telegram.web"
          alt="텔레그램 상담"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
          }}
        />

        <span
          style={{
            marginTop: "5px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          텔레그램
        </span>
      </a>

      {/* TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="맨 위로 이동"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "none",
          background: "#00bfa5",
          color: "#ffffff",
          fontSize: "13px",
          fontWeight: "800",
          cursor: "pointer",
          boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
        }}
      >
        TOP
      </button>
    </div>
  );
}
