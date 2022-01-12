import { useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import AccountsMenu from '../components/Accounts/AccountsMenu';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import ExperienceItem from '../components/Expirience/ExpirienceItem';
import Category from '../components/Expirience/Category';
import experiences from '../mock/experiences';
import categories from '../mock/categories';
import styles from '../styles/Categories.module.sass';

export default function Categories() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Toolbar openMenu={() => setIsOpen(true)} />

      <Modal open={isOpen} setOpen={setIsOpen}>
        <AccountsMenu />
      </Modal>

      <div className={styles.content}>
        <div className={styles.search_container}>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Search experiences"
              className={styles.search_input} />
            <img className={styles.search_icon} src="/experience/search.svg" alt="search" />

          </div>
          <Button className={styles.vortex_wrapper} icon={'/experience/vortex.svg'} />
        </div>

        <div className={styles.experiences_container}>
          <p>Recent Experiences</p>
          <div className={styles.experiences_wrapper}>
            {
              experiences.recent.map((experience, index) => <ExperienceItem item={experience} key={index} />)
            }
          </div>
        </div>

        <div className={styles.categories_container}>
          <div className={styles.categories_header}>
            <span className={styles.title}>Popular Categories</span>

            <span className={styles.see_all}>
              <a href="#">See All</a>
              <img src="/experience/arrow-right-blue.svg" alt="arrow" />
            </span>
          </div>
          <div className={styles.categories_wrapper}>
            {
              categories.map((category, index) => <Category category={category} key={index} />)
            }
          </div>
        </div>
        <div className={styles.trending_container}>
          <div className={styles.categories_header}>
            <span className={styles.title}>Trending experiences</span>

            <span className={styles.see_all}>
              <a href="#">See All</a>
              <img src="/experience/arrow-right-blue.svg" alt="arrow" />
            </span>
          </div>
          <div className={styles.experiences_wrapper}>
            {
              experiences.other.map((experience, index) => <ExperienceItem item={experience} key={index} />)
            }
          </div>
        </div>

      </div>
    </div>
  );
}
