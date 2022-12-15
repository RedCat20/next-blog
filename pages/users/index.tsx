import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography, Box} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC, useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response: any = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: any = await response.json();

        // const data = null;
        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                users: data
            }
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                users: [],
            },
            fallback: false
        }
    }
}

interface Props {
    users: any[] | null | undefined;
}

const Users:FC<Props> = ({users}) => {

    // const [users, setData] = useState<any[] | null>(null);
    //
    // const fetchData = async () => {
    //     const response: any = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data: any = await response.json();
    //     setData(data);
    // }
    //
    // useEffect(()=> {
    //     fetchData().catch(err => console.log('Bad response', err));
    // },[]);

    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Users list</Title>
                <div style={{display: 'grid',
                         alignItems: 'center',
                         gridTemplateColumns: '1fr 2fr',
                         borderBottom: '1px solid #ccc',
                         borderTop: '1px solid #ccc',
                         borderLeft: '1px solid #ccc',
                         borderRight: '1px solid #ccc',
                         background: 'antiquewhite',

                     }}>
                    <div style={{borderRight: '1px solid #ccc', paddingTop: '15px', paddingBottom: '15px', fontWeight: 'bold', paddingLeft: '30px',
                        paddingRight: '30px',}}>Name</div>
                    <div style={{ paddingTop: '15px', paddingBottom: '15px', fontWeight: 'bold', paddingLeft: '30px',
                        paddingRight: '30px',}}>Email</div>
                </div>
                {Array.isArray(users) && users.map((user: any) => (

                    <Link key={user.id} href={`/users/${user.id}`}>
                        <div
                                    style={{display: 'grid',
                                        alignItems: 'center',
                                        gridTemplateColumns: '1fr 2fr',
                                        borderBottom: '1px solid #ccc',
                                        borderLeft: '1px solid #ccc',
                                        borderRight: '1px solid #ccc',
                        }}
                        >
                            <div style={{ paddingLeft: '30px', paddingRight: '30px',borderRight: '1px solid #ccc', paddingTop: '15px', paddingBottom: '15px'}}>{user.name}</div>
                            <div style={{  paddingLeft: '30px', paddingRight: '30px',paddingTop: '15px', paddingBottom: '15px'}}>{user.email}</div>
                        </div>

                    </Link>
                ))}
            </Layout>
        </>
    )
}

export default Users;