import Link from "next/link";
import "twin.macro";
import Container from "./Container";

export default function Header() {
  return (
    <>
      <Container as="header">
        <nav tw="flex justify-end items-center py-6  text-xl">
          <Link href="/">
            <a tw="mr-auto  font-rubik text-2xl font-bold">J 📖 S</a>
          </Link>
        </nav>
      </Container>
    </>
  );
}
