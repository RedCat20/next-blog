import {MouseEvent, FC, ReactNode, useEffect, useState} from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import styles from './Header.module.scss';
import {useRouter} from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import {useWindowResize} from "../hooks/useWindowResize";

interface INavLink {
    id: number;
    title: string;
    path: string;
}

const navigation: Array<INavLink> = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Users', path: '/users' },
    { id: 4, title: 'Questions', path: '/questions' },
    // { id: 5, title: 'Feedback', path: '/feedback' },
]

interface Props {
    children?: ReactNode;
}

const Header:FC<Props> = ({ children} ) => {

    const {pathname} = useRouter();

    const size = useWindowResize();

    const [isMobileV, setIsMobileV] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsMobileV(prev => size.width < 575)
    },[size]);

    const menuBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={styles.header}>
            <AppBar position="static" sx={{boxShadow: 'none'}} color={"transparent"}>
                <Toolbar>
                    <Box className={styles.links} sx={{flexGrow: 1}}>
                        <Image src="/learning.png" alt="Blog Logo" width={62} height={42} />
                        <Typography variant={"h6"} sx={{fontWeight: 'bold', marginLeft: '5px', alignSelf: 'flex-end'}}>Blog</Typography>
                    </Box>
                    <div className={styles.links}>

                        {!isMobileV ?
                            <>
                            {navigation.map((link: INavLink) => (
                                <Link key={link.id} href={link.path}>
                                    <span className={`${styles.link} ${(link.path === pathname) ? styles.active : null}`}>{link.title}</span>
                                </Link>
                            ))}
                            </>
                            :
                            <div className={styles.mobile}>
                                <IconButton color="inherit" onClick={menuBtnClick} >
                                    <MenuIcon />
                                </IconButton>
                                {isOpen &&
                                    <>
                                        <div className={styles.column}>
                                            {navigation.map((link: INavLink) => (
                                                <Link key={link.id} href={link.path}>
                                                    <span className={`${styles.link} ${(link.path === pathname) ? styles.active : null}`}>{link.title}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                        }

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;