import { useState } from 'react';
import users from '../../mock/data';
import Account from './Account';
import styles from '../Accounts/AccountsMenu.module.sass';

export default function AccountsMenu() {
  return (
    <div>
      <div className={styles.accounts_container}>
        <div className={styles.header}>My Accounts</div>
        {users.map((user, index) => (
          <Account user={user} key={index} />
        ))}
      </div>
      <div className={styles.options_container}>
        <button className={styles.button} style={{ backgroundImage: `url("/Plus.svg")` }}>Create Account</button>
        <button className={styles.button} style={{ backgroundImage: `url("/Import.svg")` }}>Import Account</button>
      </div>
    </div>
  );
}