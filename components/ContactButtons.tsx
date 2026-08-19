import kakaoImage from "../kakaotalk.webp";
import telegramImage from "../telegram.webp";

type ContactButtonsProps = {
  className?: string;
};

export default function ContactButtons({
  className = "",
}: ContactButtonsProps) {
  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}>
      {/* 카카오톡 */}
      <a
        href="여기에 기존 카카오톡 주소"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-yellow-400/80 bg-[#111] px-4 py-4 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400/10"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-black">
          <img
            src={kakaoImage.src}
            alt="카카오톡"
            className="h-7 w-7 object-contain"
          />
        </div>

        <div className="h-10 w-px shrink-0 bg-yellow-400/40" />

        <div className="min-w-0 flex-1">
          <div className="whitespace-nowrap text-base font-black text-yellow-400">
            카카오톡 상담
          </div>
          <div className="mt-1 whitespace-nowrap text-xs text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>

      {/* 텔레그램 */}
      <a
        href="여기에 기존 텔레그램 주소"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-sky-400/80 bg-[#111] px-4 py-4 transition-all duration-200 hover:border-sky-400 hover:bg-sky-400/10"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-400/70 bg-black">
          <img
            src={telegramImage.src}
            alt="텔레그램"
            className="h-7 w-7 object-contain"
          />
        </div>

        <div className="h-10 w-px shrink-0 bg-sky-400/40" />

        <div className="min-w-0 flex-1">
          <div className="whitespace-nowrap text-base font-black text-sky-400">
            텔레그램 상담
          </div>
          <div className="mt-1 whitespace-nowrap text-xs text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>
    </div>
  );
}
