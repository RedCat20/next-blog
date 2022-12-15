import Head from 'next/head'
import {FC} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import PostsList from "../../components/PostsList/PostsList";
import {IPost} from "../../types/posts";
import {GetStaticProps} from "next";
import Search from "../../components/Search/Search";
import CustomLink from "../../components/CustomLink/CustomLink";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: IPost[] = await response.json();

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
    posts: IPost[];
}

const Posts:FC<Props> = ({posts}) => {

    const searchPost = (searchValue: string) => {
        console.log('searchValue', searchValue);
    }

    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Posts list</Title>

                <CustomLink title="Main information"
                            path="/posts/info"
                            variant="subtitle1"
                            styles={{
                                textDecoration: 'underline',
                                display: 'inline',
                                color: '#38383b'
                            }}
                            marginBottom={10} textAlign={'right'}
                />

                <Search searchLabel="Search post" onChangeSearchStr={searchPost} marginBottom={30}/>
                <PostsList posts={posts}/>

            </Layout>
        </>
    )
}

export default Posts;