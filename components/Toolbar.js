import Button from './Button';
import { useRouter } from 'next/router';
import styles from './Toolbar.module.sass';

export default function Toolbar({ openMenu }) {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <Button icon="/arrow.svg" onClick={() => router.push('/')} />
      <Button icon="/home.svg" onClick={() => router.push('/')} />

      <Button icon="/avatar1.svg" className={styles.select} onClick={openMenu}>johndoe.near</Button>

      <Button icon="/notification.svg" iconSize={26} />
      <Button icon="/settings.svg" iconSize={26} />
    </div>
  );
}