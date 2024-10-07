import Link from "next/link";

import head from "@/styles/header.module.css";

export default function Header() {
  return (
    <div className={head["header-container"]}>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/radix">Radix</Link>
      <Link href="/react-icons">React Icons</Link>
    </div>
  );
}
