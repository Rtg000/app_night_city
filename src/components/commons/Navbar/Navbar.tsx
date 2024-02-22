'use client'
import { ILink } from "@/interfaces/ILink";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  links: ILink[],
}

export const Menu:FC<Props> = ({links}) => {
    return (
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {
              links.map((link) => (
                <NavbarItem key={link.name}>
                  <Link color="foreground" href={link.href}>
                    {link.name}
                  </Link>
                </NavbarItem>
              ))
            }
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
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