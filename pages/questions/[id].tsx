import {FC} from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";
import {GetStaticPaths, GetStaticProps} from "next";
import {IQuestion} from "../../types/questions";
import {ParsedUrlQuery} from "querystring";

export const getStaticPaths: GetStaticPaths = async ( ) => {
    try {
        const response: Response = await fetch(`${process.env.API_HOST}/quest/`);

        const data: IQuestion[] = await response.json();

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

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const {id} = context.params as ParsedUrlQuery;
        const response: Response = await fetch(`${process.env.API_HOST}/quest/${id?.toString()}`);
        const data: IQuestion = await response.json();

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
    question: IQuestion;
}

const Question:FC<Props> = ({question}) => {

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
                <Title align={'left'} tag="h5">{question.title}</Title>
                {question.answer}
            </Layout>
        </>
    )
}

export default Question;