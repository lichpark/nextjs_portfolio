import Link from "next/link";

const Logo = () => {
  return (
    <li className="logo">
      <Link href="/portfolio">
        <img src="/imgs/funforge_logo.png" alt="logo" title=" " />
      </Link>
    </li>
  );
};

export default Logo;
