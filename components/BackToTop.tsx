"use client";

import kakaotalkImage from "../kakaotalk.webp";
import telegramImage from "../telegram.webp";

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
      {/* 카카오톡 상담 */}
      <a
        href="https://open.kakao.com/o/snvQKD4h"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 상담"
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={kakaotalkImage.src}
          alt="카카오톡 상담"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
            display: "block",
          }}
        />

        <span
          style={{
            marginTop: "5px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textShadow: "0 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          카카오 상담
        </span>
      </a>

      {/* 텔레그램 상담 */}
      <a
        href="https://t.me/boom3230"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="텔레그램 상담"
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={telegramImage.src}
          alt="텔레그램 상담"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
            display: "block",
          }}
        />

        <span
          style={{
            marginTop: "5px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            textShadow: "0 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          텔레그램
        </span>
      </a>

      {/* TOP 버튼 */}
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
