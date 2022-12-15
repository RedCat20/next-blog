import {Container, Typography, Box} from '@mui/material';
import {FC} from "react";
import Title from "../../components/Title/Title";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";

const Info:FC = () => {
    return (
        <>
            <Head>
                <title>Info page</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Main info</Title>
                <Typography variant={"subtitle1"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda commodi culpa cum distinctio dolorem ducimus esse, eveniet fuga impedit laborum, molestias obcaecati odit pariatur quaerat quis quo rerum tenetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda commodi culpa cum distinctio dolorem ducimus esse, eveniet fuga impedit laborum, molestias obcaecati odit pariatur quaerat quis quo rerum tenetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda commodi culpa cum distinctio dolorem ducimus esse, eveniet fuga impedit laborum, molestias obcaecati odit pariatur quaerat quis quo rerum tenetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda commodi culpa cum distinctio dolorem ducimus esse, eveniet fuga impedit laborum, molestias obcaecati odit pariatur quaerat quis quo rerum tenetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, assumenda commodi culpa cum distinctio dolorem ducimus esse, eveniet fuga impedit laborum, molestias obcaecati odit pariatur quaerat quis quo rerum tenetur.</p>
                </Typography>
            </Layout>
        </>
    )
}

export default Info;