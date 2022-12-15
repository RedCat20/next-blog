import {Button, Grid, Typography, Container} from "@mui/material";
import Link from "next/link";
import {FC} from "react";

import styles from './Posts.module.scss';
import {IPost} from "../../types/posts";

interface Props {
    posts: IPost[] |  null
}

const PostsList:FC<Props> = ({posts}) => {

    if (!posts?.length) {
        return <div>No posts</div>
    }


    return (

    // <Grid container columns={{ xs: 6, md: 6 }} spacing={2} sx={{background: '#ccc', margin: '0 auto'}}>
    <Grid container spacing={'2px'} columns={{ xs: 2, sm: 6, lg: 12}}>

        {Array.isArray(posts) && posts.map((post: IPost) => (

            <Grid item key={post.id} xs={3}>
                <div className={styles.post}>
                    <Typography sx={{fontWeight: 'bold'}}>
                        Post # {post.id}
                    </Typography>

                    <div className={styles.title}>
                        {post.title}
                    </div>

                    <Link href={`/posts/${post.id}`} style={{marginBottom: '20px'}}>
                        <Button variant="outlined" color="success">Show more</Button>
                    </Link>
                </div>
            </Grid>
        ))}

    </Grid>
    )
}

export default PostsList;