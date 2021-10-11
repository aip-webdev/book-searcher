import { useEffect } from 'react'
import axios from 'axios'
import { booksMock } from '../utils/fixtures';
import {useAppStore} from "./useAppStore";
import {fetchBooks, fetchBooksFailure, fetchBooksSuccess, resetBooksData} from "../context/actions";

export default function useBookSearch() {
  const [{query, pageNumber, offlineMode, booksData}, dispatch] = useAppStore();

  useEffect(() => {
    dispatch(resetBooksData())
  }, [query, offlineMode])

  useEffect(() => {
    dispatch(fetchBooks())
    let cancel

    if (offlineMode) {
      setTimeout(() => {
        dispatch(fetchBooksSuccess([booksMock, false, true, 10000, false]));
      }, 500)
    } else {
      axios({
        method: 'GET',
        timeout: 5000,
        url: 'https://openlibrary.org/search.json',
        params: { q: query, page: pageNumber, limit: 10*pageNumber },
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
      .then((booksRes) => {
        dispatch(fetchBooksSuccess(booksRes));
      }).catch(e => {
        if (axios.isCancel(e)) return
        dispatch(fetchBooksFailure())
      })
      return () => cancel()
    }
  }, [query, pageNumber, offlineMode])
  let { loading, error, books, hasMore, count } = booksData
  return { loading, error, books, hasMore, count }
}
