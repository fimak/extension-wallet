import styles from './ExpirienceItem.module.sass';

export default function ExperienceItem({ item }) {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={item.image} />
      </div>

      <div className={styles.text}>
        <p className={styles.text_name}>{item.name}</p>
        <p className={styles.text_description}>{item.description}</p>
        <p className={styles.text_amount}>{item.subscribeAmount} users</p>
      </div>
      <div className={styles.arrow_block}>
        <img src="/experience/arrow-right.svg" />
      </div>
    </div>
  );
}