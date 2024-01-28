import Link from "next/link";
import { SiBurgerking } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <Link legacyBehavior href="/">
          <a> Домой </a>
        </Link>
        <Link legacyBehavior href="/about">
          <a> О нас </a>
        </Link>
        <Link legacyBehavior href="/reviews">
          <a> Отзывы </a>
        </Link>
        <Link legacyBehavior href="/burgers">
          <a> Бургеры </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
