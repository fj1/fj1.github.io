import Link from 'next/link';

import { MENU_ITEMS } from './data';

import globalStyles from '../../globals.module.css';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.navContainer}>
        {MENU_ITEMS.map(({ href, label }) => (
          <Link
            key={crypto.randomUUID()}
            href={href}
            className={`${globalStyles.pill} ${styles.navItem}`}
          >
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
