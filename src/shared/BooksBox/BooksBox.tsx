
import React, {useRef} from 'react';
import styles from './styles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import BookCard from "../BookCard/BookCard";
import Box from "@mui/material/Box";
import {useAppStore} from "../../hooks/useAppStore";
import useScrollEventToLoadData from "../../hooks/useScrollEventToLoadData";
import {loadBooksList} from "../../utils/lists/emptyBookList";

const BooksBox = () => {
    const { list, listItem, listItemLoading } = styles;
    const [{booksData}] = useAppStore();
    const ref = useRef(null);
    useScrollEventToLoadData(ref);

    return (
        <Box>
            <List
                ref={ref}
                //@ts-ignore
                sx={list}
            >
                {/*@ts-ignore*/}
                {booksData.books?.map(({ title, author }, index: any) => {
                    return (
                        <ListItem key={`${title}-${author}-${index}`} sx={listItem}>
                            <BookCard author={author} title={title}/>
                        </ListItem>
                    )
                })}
            </List>
            {booksData.loading &&
            //@ts-ignore
            <List sx={list}>
                { loadBooksList.map(({id, author, title}) =>
                    //@ts-ignore
                    <ListItem key={id} sx={listItemLoading}>
                        <BookCard author={author} title={title}/>
                    </ListItem>) }
            </List>
            }
        </Box>
    );
}

export default BooksBox;
