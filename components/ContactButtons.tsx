type ContactButtonsProps = {
  className?: string;
};

export default function ContactButtons({
  className = "",
}: ContactButtonsProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}
    >
      {/* 카카오톡 */}
      <a
        href="여기에 기존 카카오톡 주소"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-yellow-400/80 bg-[#111] px-5 py-4 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400/10"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-yellow-400/70 bg-black">
          <img
            src="/kakaotalk.webp"
            alt="카카오톡"
            className="h-8 w-8 object-contain"
          />
        </div>

        <div className="h-12 w-px bg-yellow-400/40" />

        <div className="flex-1">
          <div className="text-lg font-black text-yellow-400">
            카카오톡 상담
          </div>
          <div className="mt-1 text-sm text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>

      {/* 텔레그램 */}
      <a
        href="여기에 기존 텔레그램 주소"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-sky-400/80 bg-[#111] px-5 py-4 transition-all duration-200 hover:border-sky-400 hover:bg-sky-400/10"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-400/70 bg-black">
          <img
            src="/telegram.webp"
            alt="텔레그램"
            className="h-8 w-8 object-contain"
          />
        </div>

        <div className="h-12 w-px bg-sky-400/40" />

        <div className="flex-1">
          <div className="text-lg font-black text-sky-400">
            텔레그램 상담
          </div>
          <div className="mt-1 text-sm text-zinc-400">
            24시간 빠른 상담 →
          </div>
        </div>
      </a>
    </div>
  );
}
