import Card from '../components/Card/Card';
import { RESOURCES } from './data';

import styles from './Resources.module.css';

export default function Resources() {
  return (
    <>
      <div>This site was built with: </div>
      <div className={styles.resourcesContainer}>
        {RESOURCES.map(({ href, icon, label }) => {
          return (
            <Card
              key={crypto.randomUUID()}
              href={href}
              icon={icon}
              label={label}
            />
          );
        })}
      </div>
    </>
  );
}
