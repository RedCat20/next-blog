import {Container, Typography, Box} from '@mui/material';
import {FC} from "react";
import Title from "../../components/Title/Title";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import {IQuestion} from "../../types/questions";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    try {
        //const response: any = await fetch('http://localhost:3000/api/quest');
        const response: any = await fetch(`${process.env.API_HOST}/quest/`);
        const data: any = await response.json();

        // const data = null;
        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                questions: data
            }
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                questions: [],
            },
            fallback: false
        }
    }
}

interface Props {
    questions: IQuestion[] | any;
}

const Questions:FC<Props> = ({questions}) => {
    return (
        <>
            <Head>
                <title>Feedback</title>
            </Head>
            <Layout>
                <Title align={'center'} tag="h4">Questions</Title>
                <Typography variant={"h6"}>There are questions</Typography>
                <QuestionsList questions={questions}/>
            </Layout>
        </>
    )
}

export default Questions;