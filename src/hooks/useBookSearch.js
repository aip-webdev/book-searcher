import { useEffect, useState } from 'react'
import axios from 'axios'
import { booksMock } from '../utils/fixtures';

export default function useBookSearch(query, pageNumber, offline) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    setBooks([])
    setCount(0)
    setHasMore(false)
  }, [query, offline])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel

    if (offline) {
      setTimeout(() => {
        setBooks(prevBooks => [...prevBooks, ...booksMock])
        setLoading(false)
        setHasMore(true)
        setCount(100000)
        setError(false)
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

        setBooks(prevBooks => {
          return [...new Set([...prevBooks, ...editedBooks])]
        })
        setCount(res.data.numFound || 0)
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
        setLoading(false)
      })
      return () => cancel()
    }
  }, [query, pageNumber, offline])

  return { loading, error, books, hasMore, count }
}
