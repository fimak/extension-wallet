import { useEffect } from 'react';
import Overlay from './Overlay';
import styles from './Modal.module.sass';

export default function Modal({
                                open = false,
                                setOpen = () => {
                                },
                                children,
                              }) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return open && (
    <Overlay onClick={() => setOpen(false)}>
      <div className={styles.root}>
        {children}
      </div>
    </Overlay>
  );
}
