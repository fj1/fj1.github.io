import { firaCode } from '../../fonts';
import Nav from '../Nav/Nav';

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header>
        <h1 className={`${firaCode.className} ${styles.title}`}>
          Frances Jurek
        </h1>
        <h2 className={firaCode.className}>
          Software engineer with a love for frontend
        </h2>
      </header>
      <Nav />
    </>
  );
}
