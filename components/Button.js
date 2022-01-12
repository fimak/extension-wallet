import clsx from 'classnames';
import Image from 'next/image';
import styles from './Button.module.sass';

export default function Button({ icon, iconSize = 22, caption, className, onClick }) {
  return (
    <button type="button" className={clsx(styles.root, className)} onClick={onClick}>
      {icon && <Image src={icon} alt="HomePage" width={iconSize} height={iconSize} />}
      {caption && (
        <span className={styles.caption}>{caption}</span>
      )}
    </button>
  );
}