import styles from './Category.module.sass';

export default function Category({ category }) {
  return (
    <div className={styles.root} style={{ backgroundColor: category.backgroundColor }}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <img src={category.icon} />
        </div>
        <p>{category.name}</p>
      </div>
      <div className={styles.arrow_wrapper}>
      </div>
    </div>
  );

}