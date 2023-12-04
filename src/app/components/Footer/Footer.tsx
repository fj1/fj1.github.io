import { FOOTER_ITEMS } from './data';

import globalStyles from '../../globals.module.css';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      {FOOTER_ITEMS.map(({ href, name, icon }) => {
        return (
          <a
            key={crypto.randomUUID()}
            className={`${styles.footerItem} ${globalStyles.pill}`}
            href={href}
          >
            {icon}
            {name}
          </a>
        );
      })}
    </footer>
  );
}
