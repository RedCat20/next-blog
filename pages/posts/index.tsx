import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography, Box, Button, Grid} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import PostsList from "../../components/PostsList/PostsList";
import {IPost} from "../../types/posts";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response: any = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: any = await response.json();

        // const data = null;
        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                posts: data
            }
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                posts: []
            }
        }
    }
}

interface Props {
    posts: IPost[] | null;
}

const Posts:FC<Props> = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Posts list</Title>

                <Typography variant="subtitle1" sx={{p: '20px 0', color: '#38383b'}}>
                    <Link href={'/posts/info'}>
                        <Typography sx={{textDecoration: 'underline', textAlign: 'right', marginBottom: '20px', marginLeft: 'auto', marginRight: '0', display: 'inline'}}>
                            Main information
                        </Typography>
                    </Link>
                </Typography>


                <PostsList posts={posts}/>


            </Layout>
        </>
    )
}

export default Posts;