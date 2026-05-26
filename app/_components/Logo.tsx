import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Engain home">
      <span className="brand-mark" aria-hidden="true">
        <Image src="/assets/link-icon.png" alt="" width={26} height={24} priority />
      </span>
      <span>engain</span>
    </Link>
  );
}
