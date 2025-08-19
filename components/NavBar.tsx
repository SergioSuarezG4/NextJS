"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
    const pathName = usePathname();
  return (
    <div>
        <nav>
            <Link  href="/" className={ pathName === "/" ? "bg-amber-300" : "px-3 py-2" }>Home</Link>
            <Link  href="/dashboard" className={ pathName === "/dashboard" ? "bg-blue-400" : "px-3 py-2" }>Dashboard</Link>
            <Link  href="/contacto" className={ pathName === "/contacto" ? "bg-red-400" : "px-3 py-2" }>Contacto</Link>
            <Link  href="/usuarios/checho" className={ pathName === "/usuarios/checho" ? "bg-sky-400" : "px-3 py-2" }>Mi perfil</Link>
        </nav>
    </div>
  )
}
