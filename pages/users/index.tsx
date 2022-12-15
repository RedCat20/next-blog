import Head from 'next/head'
import {FC} from "react";
import Title from "../../components/Title/Title";
import Layout from "../../components/Layout/Layout";
import {GetStaticProps} from "next";
import UsersTable from "../../components/UsersTable/UsersTable";
import {IUser} from "../../types/users";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: IUser[] = await response.json();

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
    users: IUser[];
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
                <title>Users list</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Users list</Title>

                <UsersTable users={users}/>
            </Layout>
        </>
    )
}

export default Users;