'use client'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";
import Link from "next/link";

const Menu1 = () => {
    return (
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Cyberware
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Choombas
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Distritos
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Gang
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Corpo
              </Link>
            </NavbarItem>
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