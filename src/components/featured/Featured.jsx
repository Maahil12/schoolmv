import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>School News MV.</b> Your latest school news website.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/food.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>2023 School Year Ending.</h1>
          <p className={styles.postDesc}>
            The first term of 2023 is coming to an end is 21st dec 2023
            The second term is said to be 7th jan of 2024 and the year
            2023-2024 will end.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
