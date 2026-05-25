import Image from "next/image";

export default function Logo() {
  return (
    <a className="brand" href="/" aria-label="Engain home">
      <span className="brand-mark" aria-hidden="true">
        <Image src="/assets/link-icon.png" alt="" width={26} height={24} priority />
      </span>
      <span>engain</span>
    </a>
  );
}
