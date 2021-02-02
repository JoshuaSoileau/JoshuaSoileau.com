import Link from "next/link";
import "twin.macro";
import Container from "./Container";

export default function Header() {
  return (
    <>
      <Container as="header">
        <nav tw="flex justify-end items-center py-6  text-xl">
          <Link href="/">
            <a tw="mr-auto">📖 JS</a>
          </Link>
          <Link href="/">
            <a tw="mr-8 last:mr-0">Words</a>
          </Link>
          <Link href="/about">
            <a tw="mr-8 last:mr-0">About</a>
          </Link>
        </nav>
      </Container>
    </>
  );
}
