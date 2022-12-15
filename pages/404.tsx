import {Container, Typography, Box} from '@mui/material';
import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import Title from "../components/Title/Title";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Error:FC = () => {
    const router = useRouter();

    useEffect(() => {
        let timer = setTimeout(() => {
            router.push('/').then(r => console.log('Redirect is success')).catch(e => console.log('Redirect is wrong', e));
        },3000)
        return () => {
            clearTimeout(timer);
        };
    },[router]);

    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>
            <Layout>
                <Title tag="h4">Error 404</Title>
                <Typography variant={"h6"}>Something is going wrong</Typography>

            </Layout>
        </>
    )
}

export default Error;