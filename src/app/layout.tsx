import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { ILink } from "@/interfaces/ILink";
import { Menu } from "@/components/commons/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Night City",
  description: "Night City Web",
};

export default function HomeLayout({children}: { children: React.ReactNode }) {
  
  const links:ILink[] = [
    {name: "CYBERWARE", href: "/public/cyberware"},
    {name: "CHOOMBAS", href: "/public/choombas"},
    {name: "DISTRITOS", href: "/public/distritos"},
    {name: "FIXERS", href: "/public/fixers"},
    {name: "GANGS", href: "/public/gangs"},
    {name: "CORPOS", href: "/public/corpos"},
    // {name: "TEST", href: "/public/test"}
  ];

  return (
    <html lang="es" className='dark'>
      <body>
        <Providers>
          <header>
            <Menu links = {links}/>
          </header>
          <main className="mt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
