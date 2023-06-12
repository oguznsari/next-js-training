import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/6090285/pexels-photo-6090285.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, totam asperiores vel quo eaque omnis quos iste minima et nihil. Ducimus quam doloribus itaque, ipsam illo accusantium numquam est.
                    </p>
                </div>
            </Link>

            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/6090285/pexels-photo-6090285.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, totam asperiores vel quo eaque omnis quos iste minima et nihil. Ducimus quam doloribus itaque, ipsam illo accusantium numquam est.
                    </p>
                </div>
            </Link>

            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/6090285/pexels-photo-6090285.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, totam asperiores vel quo eaque omnis quos iste minima et nihil. Ducimus quam doloribus itaque, ipsam illo accusantium numquam est.
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Blog;