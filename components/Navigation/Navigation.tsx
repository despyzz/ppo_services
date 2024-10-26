import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/dictionary">Dictionary</Link>
        </li>
        <li>
          <Link href="/documents">Documents</Link>
        </li>
        <li>
          <Link href="/join">Join</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
}