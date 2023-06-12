import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        { next: { revalidate: 10 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Blog = async () => {
    const data = await getData();

    return (
        <div className={styles.mainContainer}>
            {data.map(item => (
                <Link href="/blog/testId" className={styles.container} key={item.id} >
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
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.content}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, totam asperiores vel quo eaque omnis quos iste minima et nihil. Ducimus quam doloribus itaque, ipsam illo accusantium numquam est.
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog;