import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography, Box} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC} from "react";
import Title from "../components/Title/Title";
import Layout from "../components/Layout/Layout";

const Home:FC = () => {
    return (
        <>
            <Head>{/*<title>Blog application</title>*/}</Head>

            <Layout>
                <div className={styles.description}>
                    <Title tag="h5" marginBottom={10}>Hello</Title>
                    <Typography>Page content</Typography>
                </div>
                <Title tag="h4" marginBottom={20}>Popular posts</Title>
                <Image src="/cat.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '10px', marginBottom: '15px'}}
                       blurDataURL={`/_next/image?url=${'/cat.jpg'}&w=16&q=1`}
                />
                <br/>
                <Image src="/kitten.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '10px', marginBottom: '15px'}}
                       blurDataURL={`/_next/image?url=${'/kitten.jpg'}&w=16&q=1`}
                />
                <br/>
                <Image src="/dog.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '10px'}}
                       blurDataURL={`/_next/image?url=${'/dog.jpg'}&w=16&q=1`}
                />
            </Layout>
        </>
    )
}

export default Home;