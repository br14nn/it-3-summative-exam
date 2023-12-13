"use client";

interface INavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: INavbarProps) {
  return (
    <nav className="group/navbar fixed left-0 z-[500] flex h-full w-[75px] flex-col items-start justify-center gap-8 rounded-r-lg bg-text px-3 transition-width duration-300 hover:w-[200px] ">
      {children}
    </nav>
  );
}
