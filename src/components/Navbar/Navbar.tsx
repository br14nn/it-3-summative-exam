"use client";

interface INavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: INavbarProps) {
  return (
    <nav className="bg-text group/navbar transition-width fixed left-0 z-[999] flex h-full w-[75px] flex-col items-start justify-center gap-8 rounded-r-lg px-3 duration-300 hover:w-[200px] ">
      {children}
    </nav>
  );
}
