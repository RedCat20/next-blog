import {FC, ReactFragment, ReactNode} from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";

interface Props {
    children?: ReactNode;
}

const Footer:FC<Props> = ({ children} ) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            bgcolor: '#cfcfcf',
            height: '100px',
            p: '15px 30px',
            borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc',
            borderTop: '1px solid #ccc'
        }}>
            <Typography component="div" sx={{fontWeight: 'normal', fontSize: '14px'}}>(c) Diana Klymchyk, 2022</Typography>
        </Box>
    )
}

export default Footer;