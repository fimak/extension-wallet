import { useState } from 'react';
import Toolbar from '../components/Toolbar';
import AccountsMenu from '../components/Accounts/AccountsMenu';
import Overlay from '../components/Overlay';
import styles from '../styles/Experience.module.sass';

export default function Experience() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.root}>
      <Toolbar openMenu={openMenu} />

      {showMenu && (
        <>
          <Overlay />
          <AccountsMenu />
        </>
      )}

      <div className={styles.content}>

      </div>
    </div>
  );
}
