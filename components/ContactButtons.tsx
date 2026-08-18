const KAKAO_URL = "https://open.kakao.com/o/snvQKD4h";
const TELEGRAM_URL = "https://t.me/boom3230";

export default function ContactButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-[#FEE500] px-5 py-3 text-sm font-black text-black transition hover:brightness-110"
      >
        💬 카카오톡 상담
      </a>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-[#229ED9] px-5 py-3 text-sm font-black text-white transition hover:brightness-110"
      >
        ✈️ 텔레그램 상담
      </a>
    </div>
  );
}
