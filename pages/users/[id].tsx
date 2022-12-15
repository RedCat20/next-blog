import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography, Box} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC, useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import UserInfo from "../../components/UserInfo/UserInfo";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    try {
        //console.log(context);
        const { id } = context.params;

        const response: any = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data: any = await response.json();

        // const data = null;
        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                user: data
            }
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                user: {}
            }
        }
    }
}

interface Props {
    users: any[] | null | undefined;
}

interface Props {
    user: any | null;
}

const User:FC<Props> = ({user}) => {

    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <UserInfo user={user}/>
            </Layout>
        </>
    )
}

export default User;