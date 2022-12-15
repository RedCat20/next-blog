import {FC, ReactFragment, ReactNode} from "react";
import {Typography} from "@mui/material";

interface Props {
    text?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    isBold?: boolean;
    color?: string;
    align?: 'left' | 'right' | 'center' | 'justify';
    marginBottom?: number;
    children?: ReactNode;
}

const Title:FC<Props> = ({ text, tag,
                           isBold = false,
                           color,
                           align, marginBottom,
                           children} ) => {
    return (
        <>
            <Typography align={align ?? "left"} variant={tag} sx={{mb: `${marginBottom ?? 20}px`, color: color ?? '#38383b', fontWeight: `{${isBold ? 'bold' : 'normal'}`}}>
                {children ?? text ?? ''}
            </Typography>
        </>
    )
}

export default Title;