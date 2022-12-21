import {FC, useEffect, useMemo, useState} from "react";
import PostsList from "../../components/PostsList/PostsList";
import {IPost} from "../../types/posts";
import Search from "../../components/Search/Search";
import {Button, Container, Typography} from "@mui/material";
import styles from "./PostsPageComponent.module.scss";

interface Props {
    posts: IPost[];
}

const PostsPageComponent:FC<Props> = ({posts}) => {
    const [searchedPosts, setSearchedPosts] = useState<IPost[] | []>([]);
    const [collapsedPosts, setCollapsedPosts] = useState<IPost[] | []>([]);

    const [searchStr, setSearchedStr] = useState<IPost[] | []>([]);
    const [showAll, setShowAll] = useState(false);

    const searchPost = (searchValue: string) => {
        const searchedData = posts.filter((post: IPost) => {
            const title = post.title;
            return title.includes(searchValue);
        })
        if (searchedData?.length > 0) {
            setSearchedPosts(searchedData);
        } else {
            setSearchedPosts([]);
        }

        setSearchedStr(searchStr);
    }

    const getList = () => {
        if (!posts?.length) return [];

        let list = [];

        if (showAll) {
            list = searchedPosts;
        }
        else if (!showAll) {
            list = searchedPosts.slice(0, 3);
        } else {
            list = posts;
        }

        return list;
    }


    useEffect(() => {
        setCollapsedPosts(searchedPosts)
    },[searchedPosts]);

    useEffect(() => {
        let list = getList( );
        setCollapsedPosts( list );
    },[showAll]);

    useMemo(() => {
        setCollapsedPosts(posts);
        setSearchedPosts(posts);
    },[posts]);

    return (
        <>
            <Search searchLabel="Search post" onChangeSearchStr={searchPost} marginBottom={30}/>

            <Typography sx={{m: '15px 0'}} variant={"subtitle1"}>
                {searchedPosts.length} posts
            </Typography>

            <PostsList posts={(collapsedPosts?.length > 0 && searchStr) ? collapsedPosts : posts}/>

            <Container>
                <Button style={{margin: "30px 0"}}
                        size={"medium"}
                        variant="contained"
                        color="primary"
                        onClick={() => setShowAll(prev => !prev) }
                >
                    Show all / Collapse
                </Button>
            </Container>
        </>
    )
}

export default PostsPageComponent;