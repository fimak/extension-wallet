import Button from './Button';

import styles from './Toolbar.module.sass';

export default function Toolbar({ openMenu }) {
  return (
    <div className={styles.root}>
      <Button icon="/arrow.svg" />
      <Button icon="/home.svg" />

      <Button icon="/avatar1.svg" className={styles.select} onClick={openMenu}>johndoe.near</Button>

      <Button icon="/notification.svg" iconSize={26} />
      <Button icon="/settings.svg" iconSize={26} />
    </div>
  );
}