import Button from './Button';

import styles from './Toolbar.module.css';

export default function Toolbar() {
  return (
    <div className={styles.root}>
      <Button icon="/arrow.svg" />
      <Button icon="/home.svg" />

      <Button icon="/avatar1.svg" caption={'johndoe.near'} className={styles.select} />

      <Button icon="/notification.svg" iconSize={26} />
      <Button icon="/settings.svg" iconSize={26}/>
    </div>
  )
}