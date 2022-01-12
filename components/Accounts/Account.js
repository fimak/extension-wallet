import styles from '../Accounts/Accounts.module.sass';

export default function Account({ user, active }) {
  const chooseAccount = () => {};
  return (
    <div className={styles.root} onClick={chooseAccount}>
      <div className={styles.avatar}>
        <img src={user.avatar} />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>{user.name}</p>
        <p className={styles.balance}>{user.balance} NEAR</p>
      </div>
      <div className={styles.checkbox_container}>
        <img src="/choosen-icon.svg" />
      </div>
    </div>
  );
}