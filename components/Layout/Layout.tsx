import {FC, ReactNode} from "react";
import {Box, Container} from "@mui/material";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
    children?: ReactNode;
}

const Layout:FC<Props> = ({ children} ) => {
    return (
        <Container disableGutters sx={{background: 'white', }}>
            <Header/>
            <Container
                sx={{
                    p: '45px 30px',
                    maxWidth: '100%',
                    minHeight: 'calc(100vh - 200px)',
                    borderLeft: '1px solid #ccc',
                    borderRight: '1px solid #ccc'
            }}>
                {children}
            </Container >
            <Footer/>
        </Container>
    )
}

export default Layout;