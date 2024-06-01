import "./Header.scss";
import Image from "next/image";
import myLogo from "../../public/favicon.ico";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <Link href={"/"} className="logo">
          <div className="img">
            <Image src={myLogo} alt="Logo" />
          </div>
          <span>
            Trust <span>.downloads</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
