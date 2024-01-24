import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Picture of Mountain"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a fullstack developer just starting off in the field, I'm here to gain new knowledge and meet some experienced developers who can help me on my career! I just graduated from my coding bootcamp and I'm ready to learn more!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
