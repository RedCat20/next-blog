import {Container, Typography, Box} from '@mui/material';
import {FC} from "react";
import Title from "../components/Title/Title";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Feedback:FC = () => {
    return (
        <>
            <Head>
                <title>Feedback</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Feedback</Title>
                <Typography variant={"h6"}>Feedback</Typography>
            </Layout>
        </>
    )
}

export default Feedback;