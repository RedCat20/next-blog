import {FC} from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Link from "next/link";
import {Typography} from "@mui/material";
import {GetStaticPaths, GetStaticProps} from "next";
import {IPost} from "../../types/posts";
import {ParsedUrlQuery} from "querystring";

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: IPost[] = await response.json();

        const paths = data.map(({id}: { id: string | number, [key: string]: any }) => ({
            params: {id: id.toString()}
        }));

        return {
            paths,
            fallback: false
        }
    } catch(e) {
        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {id} = context.params as ParsedUrlQuery;
        const response: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data: IPost = await response.json();

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                post: data
            }
        }
    } catch(e) {
        return {
            props: {
                post: {}
            }
        }
    }
}

interface Props {
    post: IPost;
}

const Post:FC<Props> = ({post}) => {
    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <Title align={'left'} tag="h4">{post.title}</Title>
                {post.body}
            </Layout>
        </>
    )
}

export default Post;