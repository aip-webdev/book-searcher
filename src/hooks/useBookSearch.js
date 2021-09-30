import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [count, setCount] = useState(0);

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
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
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, books, hasMore, count }
}
