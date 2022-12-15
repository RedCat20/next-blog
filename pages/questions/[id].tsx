import {FC} from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import Link from "next/link";
import {Typography} from "@mui/material";
import {GetStaticPaths, GetStaticProps} from "next";

export const getStaticPaths: GetStaticPaths = async ( ) => {
    try {
        const response: any = await fetch(`${process.env.API_HOST}/quest/`);

        const data: any = await response.json();
        console.log('data: ', data)

        const paths = data.map(({id} : {id: string | number, [key: string]: any}) => ({
            params: {id: id.toString()}
        }));

        return {
            paths,
            fallback: false
        }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            paths: [],
            fallback: false
        }
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    try {
        const {id} = context.params;
        const response: any = await fetch(`${process.env.API_HOST}/quest/${id.toString()}`);
        const data: any = await response.json();

       // const data = null;
       if (!data) {
           return {
               notFound: true,
           }
       }

       return {
            props: {
               question: data
           }
       }
    }
    catch(e) {
        console.log('e: ', e);
        return {
            props: {
                question: {}
            }
        }
    }
}

interface Props {
    question: any;
}

const Question:FC<Props> = ({question}) => {
    console.log('question: ', question)

    if (!question?.title) {
        return(
            <>
                <Head>
                    <title>Posts list</title>
                </Head>
                <Layout>
                    <Title align={'left'} tag="h5">Incorrect question</Title>
                </Layout>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Posts list</title>
            </Head>
            <Layout>
                <Title align={'left'} tag="h4">{question.title}</Title>
                {question.answer}
            </Layout>
        </>
    )
}

export default Question;