import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        School News
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        News by the MOE
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Important News
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Breaking News
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Update
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        New MOE News
      </Link>
    </div>
  );
};

export default MenuCategories;
