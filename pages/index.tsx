import Head from 'next/head'
import Image from 'next/image';
import {Typography} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC} from "react";
import Title from "../components/Title/Title";
import Layout from "../components/Layout/Layout";
import {GetStaticProps} from "next";
import {IUser} from "../types/users";
import {IPost} from "../types/posts";

export const getServerSideProps: GetStaticProps = async () => {
    try {
        const user: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.ceil(Math.random() * 10)}`);
        const userData: IUser = await user.json();

        const post: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.ceil(Math.random() * 10)}`);
        const postData: IPost = await post.json();

        if (!post || !user) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                user: userData,
                post: postData
            }
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                user: {},
                post: {}
            },
            fallback: false
        }
    }
}

interface Props {
    user: IUser;
    post: IPost;
}

const Home:FC<Props> = ({user,post}) => {

    return (
        <>
            <Head>{/*<title>Blog application</title>*/}</Head>

            <Layout>
                <div className={styles.description}>
                    <Title tag="h4" marginBottom={10}>Hello</Title>
                    <Typography sx={{marginBottom: '30px'}}>You are welcome to my blog</Typography>
                    <Image src="/cat.jpg"
                           alt="Blog"
                           width={300}
                           height={168}
                           placeholder="blur"
                           style={{borderRadius: '10px', marginBottom: '15px'}}
                           blurDataURL={`/_next/image?url=${'/cat.jpg'}&w=16&q=1`}
                    />
                </div>

                <Title tag="h5" color="green" marginBottom={20}>Random user</Title>
                <Typography variant="subtitle1" sx={{marginBottom: '20px'}}>
                    <p>{user?.name} &ndash; {user?.email}</p>
                </Typography>

                <Title tag="h5" color="green" marginBottom={20}>Popular post</Title>
                <Typography variant="subtitle1" sx={{marginBottom: '20px'}}>
                    <p>{post?.title}</p>
                    <p>{post?.body}</p>
                </Typography>

            </Layout>
        </>
    )
}

export default Home;