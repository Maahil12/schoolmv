import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Important News</span>
          <h3 className={styles.postTitle}>
            The end of the acadamic year 2023
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Manta</span>
            <span className={styles.date}> - 20.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Important News
          </span>
          <h3 className={styles.postTitle}>
            The end of the acadamic year 2023
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Manta</span>
            <span className={styles.date}> - 20.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Important News</span>
          <h3 className={styles.postTitle}>
            The end of the acadamic year 2023
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Manta</span>
            <span className={styles.date}> - 20.12.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Important News
          </span>
          <h3 className={styles.postTitle}>
            The end of the acadamic year 2023
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Manta</span>
            <span className={styles.date}> - 20.12.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
