import { useState } from 'react';
import Toolbar from '../components/Toolbar';
import AccountsMenu from '../components/Accounts/AccountsMenu';
import Modal from '../components/Modal/Modal';
import styles from '../styles/Experience.module.sass';

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Toolbar openMenu={() => setIsOpen(true)} />

      <Modal open={isOpen} setOpen={setIsOpen}>
        <AccountsMenu />
      </Modal>

      <div className={styles.content}>

      </div>
    </div>
  );
}
