import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image src="/logo.png" alt="useS logo" width={80} height={40} className="hidden dark:block" />
      <Image src="/logo-dark.png" alt="useS logo" width={80} height={40} className="dark:hidden" />
    </>
  );
}
