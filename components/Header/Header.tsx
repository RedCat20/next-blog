import {FC, ReactFragment, ReactNode} from "react";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import styles from './Header.module.scss';
import {useRouter} from "next/router";

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
    { id: 5, title: 'Feedback', path: '/feedback' },
]

interface Props {
    children?: ReactNode;
}

const Header:FC<Props> = ({ children} ) => {

    const {pathname} = useRouter();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'lightgreen',
            height: '100px',
            p: '15px 30px',
            borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc',
        }}>
            {/*<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
            <Box>
                <div className={styles.links}>
                    <Image src="/learning.png" alt="Blog Logo" width={62} height={42} />
                    <Typography variant={"h6"} sx={{fontWeight: 'bold', marginLeft: '5px', alignSelf: 'flex-end'}}>Blog</Typography>
                </div>
            </Box>
            <Box>
                <div className={styles.links}>
                    {navigation.map((link: INavLink) => (
                        <Link key={link.id} href={link.path}>
                            <span className={`${styles.link} ${(link.path === pathname) ? styles.active : null}`}>{link.title}</span>
                            {/*<Typography component={"div"} sx={{fontWeight: 'bold'}}>*/}
                            {/*    {link.title}*/}
                            {/*</Typography>*/}
                        </Link>
                    ))}

                    {/*<Link legacyBehavior href="/feedback">*/}
                    {/*    <a>*/}
                    {/*        <Typography component={"div"} sx={{fontWeight: 'bold'}}>*/}
                    {/*            Feedback*/}
                    {/*        </Typography>*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                </div>
            </Box>
        </Box>
    )
}

export default Header;