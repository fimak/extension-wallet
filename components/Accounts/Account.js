import styles from '../Accounts/Accounts.module.sass';

export default function Account({ user, active }) {
  const chooseAccount = () => {
  };
  return (
    <div className={styles.root} onClick={chooseAccount}>
      <div className={styles.avatar}>
        <img src={user.avatar} />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.balance}>{user.balance} NEAR</div>
      </div>
      <div className={styles.checkbox_container}>
        <img src="/experience/chosen-icon.svg" />
      </div>
    </div>
  );
}