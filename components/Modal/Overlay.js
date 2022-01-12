import styles from './Overlay.module.sass';

export default function Overlay({ onClick, children }) {
  return (
    <div className={styles.root} onClick={onClick}>
      {children}
    </div>
  );
}