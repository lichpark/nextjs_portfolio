import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <li className="logo">
      <Link href="/portfolio">
        <Image
          width={100}
          height={100}
          src="/imgs/funforge_logo.webp"
          alt="logo"
          title=" "
          quality={100}
        />
      </Link>
    </li>
  );
};

export default Logo;
