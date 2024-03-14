'use client'
import { ILink } from "@/interfaces/ILink";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  links: ILink[],
}

export const Menu:FC<Props> = ({links}) => {
    return (
        <Navbar className="bg-yellow-400 text-black w-screen fixed">
          <NavbarBrand>
            <Link color="foreground" href="/">
              <Image alt="logo" src="/cyberpunk2.png" width={175} height={175}/>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-9 " justify="center">
            {
              links.map((link) => (
                <NavbarItem key={link.name}>
                  <Link color="foreground" href={link.href} className="font-bold">
                    {link.name}
                  </Link>
                </NavbarItem>
              ))
            }
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
    );
}