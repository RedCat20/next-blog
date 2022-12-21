import {FC, useEffect, useState} from "react";
import PostsList from "../../components/PostsList/PostsList";
import {IPost} from "../../types/posts";
import Search from "../../components/Search/Search";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import styles from "./PostsPageComponent.module.scss";

interface Props {
    posts: IPost[];
}

const PostsPageComponent:FC<Props> = ({posts}) => {
    const [searchedPosts, setSearchedPosts] = useState<IPost[] | []>([]);
    const [searchStr, setSearchedStr] = useState<IPost[] | []>([]);
    const [showAll, setShowAll] = useState(false);

    const searchPost = (searchValue: string) => {
        const searchedData = posts.filter((post: IPost) => {
            const title = post.title;
            return title.includes(searchValue);
        })
        setSearchedStr(searchStr);
        setSearchedPosts(searchedData);
    }

    const getList = () => {
        if (!posts?.length) return [];

        let list = [];

        if (showAll) {
            list = posts;
        }
        else {
            list = posts.slice(0, 3);
        }

        return list;
    }

    useEffect(() => {
        let list = getList();
        setSearchedPosts( list );
    },[posts,showAll]);

    return (
        <>
            <Search searchLabel="Search post" onChangeSearchStr={searchPost} marginBottom={30}/>

            <Typography sx={{m: '15px 0'}} variant={"subtitle1"}>
                {searchedPosts.length} posts
            </Typography>

            <PostsList posts={(searchedPosts?.length > 0 && searchStr) ? searchedPosts : posts}/>

            <Container>
                <Button style={{margin: "30px 0"}}
                        size={"medium"}
                        variant="contained"
                        color="primary"
                        onClick={() => setShowAll(!showAll) }>
                    Show all / Collapse
                </Button>
            </Container>
        </>
    )
}

export default PostsPageComponent;