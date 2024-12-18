import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <li className="logo">
      <Link href="/portfolio">
        <Image
          width={200}
          height={200}
          src="/imgs/funforge_logo.png"
          alt="logo"
          title=" "
        />
      </Link>
    </li>
  );
};

export default Logo;
