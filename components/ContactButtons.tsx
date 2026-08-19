import kakaoImage from "../kakaotalk.webp";
import telegramImage from "../telegram.webp";

type ContactButtonsProps = {
  className?: string;
};

export default function ContactButtons({
  className = "",
}: ContactButtonsProps) {
  return (
    <div
      className={`flex w-full min-w-0 flex-col gap-2 sm:flex-row ${className}`}
    >
      {/* 카카오톡 */}
      <a
        href="https://open.kakao.com/o/snvQKD4h"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden rounded-xl border border-yellow-400/70 bg-[#111] px-3 py-3 transition-all hover:border-yellow-400 hover:bg-yellow-400/10"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/60 bg-black">
          <img
            src={kakaoImage.src}
            alt="카카오톡"
            className="h-6 w-6 object-contain"
          />
        </div>

        <div className="h-8 w-px shrink-0 bg-yellow-400/30" />

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-black text-yellow-400">
            카카오톡 상담
          </div>
          <div className="truncate text-[11px] text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>

      {/* 텔레그램 */}
      <a
        href="https://t.me/boom3230"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden rounded-xl border border-sky-400/70 bg-[#111] px-3 py-3 transition-all hover:border-sky-400 hover:bg-sky-400/10"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-400/60 bg-black">
          <img
            src={telegramImage.src}
            alt="텔레그램"
            className="h-6 w-6 object-contain"
          />
        </div>

        <div className="h-8 w-px shrink-0 bg-sky-400/30" />

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-black text-sky-400">
            텔레그램 상담
          </div>
          <div className="truncate text-[11px] text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>
    </div>
  );
}
