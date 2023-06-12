import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="" fill={true} className={styles.img}>
                </Image>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who we are?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, vero quod praesentium nam quia vitae magnam esse sapiente, officia ipsam consequuntur neque repellendus distinctio rerum cupiditate voluptates. Aliquid, distinctio et.</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What we do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita ab veniam porro repudiandae sed blanditiis hic facilis aspernatur non officiis consequatur dicta, nostrum fuga accusantium eos vel esse nam.</p>
                    <Button url="contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About;