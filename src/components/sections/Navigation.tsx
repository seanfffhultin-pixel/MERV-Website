import Image from "next/image";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between rounded-full px-7 py-4 glass glass-outline sticky top-6 z-30 backdrop-blur-md shadow-[0_18px_40px_rgba(120,5,15,0.12)] transition hover:shadow-[0_24px_56px_rgba(120,5,15,0.18)]">
      <div className="flex items-center gap-4">
        <Image
          src="/MERVA-logo-(transparent).png"
          alt="MERVÅ logo"
          width={180}
          height={60}
          className="h-10 w-auto transition hover:scale-[1.02]"
          priority
        />
        
      </div>
      <div className="hidden items-center gap-2 text-sm text-black/70 md:flex">
        <a
          className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700"
          href="https://seanfh.com"
          target="_blank"
          rel="noreferrer"
        >
          seanfh.com
        </a>
        <a
          className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700"
          href="https://youtube.com/@seanfhtravels"
          target="_blank"
          rel="noreferrer"
        >
          Sean FH Travels
        </a>
      </div>
    </nav>
  );
}
