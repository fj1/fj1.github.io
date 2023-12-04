import styles from './Card.module.css';

type CardTypes = {
  href: string;
  icon: React.ReactNode | null;
  label: string;
};

export default function Card({ href, icon, label }: CardTypes) {
  return (
    <a className={styles.card} href={href}>
      <div className={styles.logoContainer}>{icon}</div>
      <div className={styles.resourceLabel}>{label}</div>
    </a>
  );
}
