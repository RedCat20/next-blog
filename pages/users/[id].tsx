import Head from 'next/head'
import {FC} from "react";
import Layout from "../../components/Layout/Layout";
import UserInfo from "../../components/UserInfo/UserInfo";
import {GetServerSideProps} from "next";
import {IUser} from "../../types/users";
import {ParsedUrlQuery} from "querystring";

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { id } = context.params as ParsedUrlQuery;

        const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data: IUser = await response.json();

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
    user: IUser;
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