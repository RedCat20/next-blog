import {Typography} from '@mui/material';
import {FC} from "react";
import Link from "next/link";

interface Props {
    path: string;
    title: string;
    styles: {};
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined;
    marginBottom?: number;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const CustomLink:FC<Props> = ({path,title,styles,variant,marginBottom,textAlign}) => {

    return (
        <div style={{marginBottom: `${marginBottom ?? 0}px`, textAlign: `${textAlign ?? 'left'}`}}>
            <Link href={path}>
                <Typography
                    variant={variant ?? 'subtitle1'}
                    sx={styles}>
                    {title}
                </Typography>
            </Link>
        </div>
    )
}

export default CustomLink;