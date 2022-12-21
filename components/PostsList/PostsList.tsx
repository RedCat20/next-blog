import {Button,Container, Grid, Box} from "@mui/material";
import Link from "next/link";
import {FC, ReactNode, useEffect, useState, memo, useMemo} from "react";

import styles from './PostsList.module.scss';
import {IPost} from "../../types/posts";
import users from "../../pages/users";

interface Props {
    posts: IPost[] |  null;
}

const PostsList:FC<Props> = ({posts}) => {

    const [postsList, setPostsList] = useState<ReactNode[]>([]);


    const getList = () => {
        if (!posts?.length) return [];

        let list = [];

            list = posts.map((post: any, idx: number) =><Grid item key={post.id} xs={3}>
                <div className={styles.post}>
                    <Box sx={{fontWeight: 'bold'}}>
                        Post # {post.id}
                    </Box>

                    <div className={styles.title}>
                        {post.title}
                    </div>

                    <Link href={`/posts/${post.id}`}>
                        <Button variant="outlined" color="success">Show more</Button>
                    </Link>
                </div>
            </Grid>);

        return list;
    }

    useEffect(() => {
        let list = getList();
        setPostsList( list );
    },[posts]);

    // if (!posts?.length) {
    //     return <div>No posts</div>
    // }

    return (
        <Grid container spacing={'2px'} columns={{ xs: 2, sm: 6, lg: 12}}>

            {postsList}

            {/*{Array.isArray(posts) && showAll && posts?.slice(0, 10).map((post: IPost) => (*/}

            {/*    <Grid item key={post.id} xs={3}>*/}
            {/*        <div className={styles.post}>*/}
            {/*            <Box sx={{fontWeight: 'bold'}}>*/}
            {/*                Post # {post.id}*/}
            {/*            </Box>*/}

            {/*            <div className={styles.title}>*/}
            {/*                {post.title}*/}
            {/*            </div>*/}

            {/*            <Link href={`/posts/${post.id}`}>*/}
            {/*                <Button variant="outlined" color="success">Show more</Button>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </Grid>*/}
            {/*))}*/}


        </Grid>

    )
}

export default PostsList;