import { useEffect } from 'react'
import axios from 'axios'
import { booksMock } from '../utils/fixtures';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, fetchBooksFailure, fetchBooksSuccess, resetBooksData} from "../store/actions";

export default function useBookSearch() {
  const dispatch = useDispatch();

  const offline = useSelector(state => state.offlineMode);
  const query = useSelector(state => state.query);
  const pageNumber = useSelector(state => state.pageNumber);

  const loading = useSelector(state => state.booksData.loading);
  const error = useSelector(state => state.booksData.error);
  const books = useSelector(state => state.booksData.books);
  const hasMore = useSelector(state => state.booksData.hasMore);
  const count = useSelector(state => state.booksData.count);

  useEffect(() => {
    dispatch(resetBooksData())
  }, [query, offline])

  useEffect(() => {
    dispatch(fetchBooks())
    let cancel

    if (offline) {
      setTimeout(() => {
        dispatch(fetchBooksSuccess(booksMock, false, true, 10000, false));
      }, 500)
    } else {
      axios({
        method: 'GET',
        timeout: 5000,
        url: 'https://openlibrary.org/search.json',
        params: { q: query, page: pageNumber, limit: 10 },
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        const editedBooks = res.data.docs.length > 0 ?
          res.data.docs.map(book => (
            {
              title: book.title,
              author: book['author_name']
            }
          )) : [];
          return [editedBooks, false, res.data.docs.length > 0, res.data.numFound || 0, false]
      })
      .then((booksData) => {
        dispatch(fetchBooksSuccess(booksData));
      }).catch(e => {
        if (axios.isCancel(e)) return
        dispatch(fetchBooksFailure())
      })
      return () => cancel()
    }
  }, [query, pageNumber, offline])

  return { loading, error, books, hasMore, count }
}
