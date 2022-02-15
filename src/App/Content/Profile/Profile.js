import React from "react";
import styles from "./Profile.module.css";

const Profile = () => (
    <section className={styles.profile} id='profile'>
        <div className={styles.name}>
            <p>Hello</p>
            <h1>I'm Jackson</h1>
            <p class="details">I am a full stack developer who is proficient in both Front End and Back End web development. Front End development refers to user-facing software, built and managed using programming languages like HTML, CSS, and JavaScript.</p>
            <a href="/website/src/resources/FullStackdeveloper_resume.docx" className={styles.cv__btn}>Download CV</a>
        </div>
        <div className={styles.social}>
            <a href="#"><i class="fab fa-facebook-f"></i></a>	
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>	
        </div>
    </section>
)

export default Profile