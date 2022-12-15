import {Container, Typography, Box} from '@mui/material';
import {FC, ReactNode, useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import {IQuestion} from "../../types/questions";
import Link from "next/link";
import styles from './QuestionsList.module.scss';

interface Props {
    questions: IQuestion[];
}

const QuestionsList:FC<Props> = ({questions}) => {

    if (!questions) return null;

    return (
        <>
            <ul>
                {questions.map((quest: IQuestion) => (
                    <Link key={quest.id} href={`/questions/${quest.id}`}>
                        <li className={styles.listItem}>{quest.title}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default QuestionsList;