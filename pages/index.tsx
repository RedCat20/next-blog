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
            <Head>
                {/*<title>Blog application</title>*/}
            </Head>
            <Layout>
                <Title tag="h5" marginBottom={10}>Hello</Title>
                <Typography>Page content</Typography>
                <Typography variant={"h4"}
                            sx={{alignSelf: 'flex-end', marginTop: '30px', marginBottom: '15px'}}>
                    Blog
                </Typography>
                <Image src="/cat.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '15px'}}
                       blurDataURL={`/_next/image?url=${'/cat.jpg'}&w=16&q=1`}
                />
                <br/>
                <Image src="/cat.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '15px'}}
                       blurDataURL={`/_next/image?url=${'/cat.jpg'}&w=16&q=1`}
                />
                <br/>
                <Image src="/cat.jpg"
                       alt="Blog"
                       width={500}
                       height={281}
                       placeholder="blur"
                       style={{borderRadius: '15px'}}
                       blurDataURL={`/_next/image?url=${'/cat.jpg'}&w=16&q=1`}
                />
            </Layout>
        </>
    )
}

export default Home;