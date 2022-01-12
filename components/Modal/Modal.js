import Overlay from './Overlay';
import styles from './Modal.module.sass';

export default function Modal({
                                open = false,
                                setOpen = () => {},
                                children,
                              }) {
  return open && (
    <Overlay onClick={() => setOpen(false)}>
      <div className={styles.root}>
        {children}
      </div>
    </Overlay>
  );
}
