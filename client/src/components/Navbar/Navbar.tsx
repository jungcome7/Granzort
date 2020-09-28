import Link from 'next/link';
import './Navbar.module.scss'

const Navbar = () => {
  return (
    <ul>
      <li className='firstLi'>
        <Link href="/">
          <a className="home">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
