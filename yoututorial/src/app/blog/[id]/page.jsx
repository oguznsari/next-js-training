import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { cache: 'no-store' }
    );

    if (!res.ok) {
        return notFound();
    }

    return res.json()
}

const Post = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quasi, maxime dolorem quas unde neque, totam sequi ducimus, sed veniam modi assumenda ullam quidem vitae corporis. Eum voluptas corporis quibusdam.
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/6090285/pexels-photo-6090285.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/6090285/pexels-photo-6090285.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam hic quas id ratione! Quaerat ducimus maxime dolores. Voluptatem debitis eveniet adipisci minus eos aliquam quae aut iusto dolore officiis?
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non quae, delectus error saepe quaerat mollitia architecto esse ad. Dicta sit minus eaque est consectetur minima atque at facere dolore?
                    <br /><br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, porro corrupti. Optio, adipisci. Ratione voluptatem cum iure quod numquam alias voluptates eligendi! Amet quidem eos cum eum molestiae fugiat doloremque?
                </p>
            </div>

        </div>
    )
}

export default Post;