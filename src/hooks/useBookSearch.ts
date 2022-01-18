import {useEffect} from 'react'
import axios, { Canceler } from 'axios'
import {booksMock} from '../utils/lists/fixtures';
import {useAppStore} from "./useAppStore";
import {fetchBooks, fetchBooksFailure, fetchBooksSuccess, resetBooksData} from "../context/actions";
import {IBookProps, IBookResProps} from "../../types/global";
import {setHeightOfPage} from "../utils/setHeightOfPage";

export default function useBookSearch() {
  const [{query, pageNumber, offlineMode, booksData}, dispatch] = useAppStore();
  useEffect(() => {  dispatch(resetBooksData()) }, [query, offlineMode]);
  useEffect(() => {
    if (booksData.loading) return;
    dispatch(fetchBooks())
    let cancel: Canceler;

    if (offlineMode) {
      let bookList = [...booksMock].map((book: { [x: string]: any; title: any; }) => (
          {
            title: book.title,
            author: book['author_name']
          }))

      bookList.length = 10*pageNumber
      setTimeout(() => {
        dispatch(fetchBooksSuccess({
          books: bookList,
          hasMore: booksMock.length > 10*pageNumber,
          count: 30,
        }));
      }, 500)

    } else {
      const fetch = async () => {
        try {
          await axios({
            method: 'GET',
            timeout: 5000,
            url: 'https://openlibrary.org/search.json',
            params: { q: query, page: pageNumber, limit: 10*pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
          }).then(res => {
            const editedBooks: IBookProps [] | [] = res.data.docs.length > 0 ?
                res.data.docs.map((book: IBookResProps) => (
                    {
                      title: book.title,
                      author: book.author_name[0],
                    }
                )) : [];
            return [editedBooks, res.data.docs.length > 0, res.data.numFound || 0]
          })
              .then(([books, hasMore, count]): void => {
                return dispatch(fetchBooksSuccess({books, hasMore, count}));
              })
        } catch (e) {
          if (axios.isCancel(e)) return
          dispatch(fetchBooksFailure())
          window.scroll(0, 0)
          setHeightOfPage(window.document.body.clientHeight);
        }
      }
      fetch().then(() => cancel())
    }
  }, [query, pageNumber, offlineMode])

  return booksData
}
