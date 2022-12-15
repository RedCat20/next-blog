import Head from 'next/head'
import Image from 'next/image'
import {Container, Typography, Box} from '@mui/material';
import styles from '../styles/Home.module.css'
import {FC, useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";

interface Props {
    user: any | null;
}

const User:FC<Props> = ({user}) => {
    const {name, email, address} = user || {};
    const {street, suite, city, zipcode} = address || {};

    if (!user) {
        return <Title align={'center'} tag="h4">No user with this id</Title>
    }

    else {
        return (
            <>
                <Title align={'center'} tag="h4">User info</Title>
                <Typography sx={{mb: '15px', fontWeight: 'bold'}}>{name}</Typography>
                <div style={{marginBottom: '10px'}}>{email}</div>
                <div>{`${street}, ${suite}, ${city}, ${zipcode}`}</div>
            </>
        )
    }

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

    // return (
    //     <>
    //         <Layout>
    //             <Title align={'center'} tag="h4">User info</Title>
    //             <div style={{ paddingLeft: '30px',
    //                 paddingRight: '30px',borderRight: '1px solid #ccc', paddingTop: '15px', paddingBottom: '15px'}}>{name}</div>
    //             <div style={{  paddingLeft: '30px',
    //                 paddingRight: '30px',paddingTop: '15px', paddingBottom: '15px'}}>{email}</div>
    //         </Layout>
    //     </>
    // )
}

export default User;