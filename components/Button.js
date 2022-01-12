import clsx from 'classnames';
import Image from 'next/image';
import styles from './Button.module.css';

export default function Button({ icon, iconSize = 22, caption, className }) {
  return (
    <button type="button" className={clsx(styles.root, className)}>
      {icon && <Image src={icon} alt="HomePage" width={iconSize} height={iconSize} />}
      {caption && (
        <span className={styles.caption}>{caption}</span>
      )}
    </button>
  )
}