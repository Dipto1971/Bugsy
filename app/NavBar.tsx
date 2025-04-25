"use client";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import c_Names from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import Skeleton from "@/app/components/Skeleton";

// In the classnaame object,
// we can pass the classnames we want to render as keys and the condition as values.

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        {/* Container will keep every component in a container */}
        <Flex justify="between">
          {/* The available space is distributed among the children */}
          <Flex align="center" gap="3">
            {/* First Child of the Flex Component */}
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks />
          </Flex>
          {/* Second Child of the Flex Component */}
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};
export default NavBar;

const AuthStatus = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <Skeleton width="3rem" />;

  if (status === "unauthenticated") {
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Sign In
      </Link>
    );
  }
  return (
    <Box>
      {/* Second Child of the Flex Component */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user!.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
            // referrerPolicy is used to prevent the browser from sending the user's personal information to the server.
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Sign Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  // We need to convert this component to a Client-Side Component,
  // Because the usePathname hook is not supported on the server. This is a Browser API.

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];
  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={c_Names({
              "nav-link": true,
              "!text-zinc-900": currentPath === link.href,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
