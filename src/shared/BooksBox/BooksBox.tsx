import React, {useRef} from 'react';
import styles from './styles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import BookCard from "../BookCard/BookCard";
import Box from "@mui/material/Box";
import {useAppStore} from "../../hooks/useAppStore";
import useScrollEventToLoad from "../../hooks/useScrollEventToLoad";

const BooksBox = () => {
    const { list, listItem } = styles;
    const [{booksData}] = useAppStore();
    const ref = useRef(null);
    useScrollEventToLoad(ref);

    return (
        <Box>
            <List
                //@ts-ignore
                sx={list}>
                {booksData.books?.map((book: { title: any; author: any; }, index: any) => {
                    const { title, author } = book;
                    return (
                        <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                            <BookCard author={author} title={title}/>
                        </ListItem>
                    )
                })}
                <div ref={ref} />
                {booksData.loading &&
                //@ts-ignore
                <List sx={styles.list}>
                    {Array.apply(null, Array(10)).map((value: unknown, index: number) =>
                        (booksData.loading &&
                            <ListItem key={index + 1} sx={styles.listItemLoading}>
                                <BookCard author='' title=''/>
                            </ListItem>)
                    )}
                </List>
                }
            </List>
        </Box>
    );
}

export default BooksBox;
