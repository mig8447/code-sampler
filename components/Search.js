import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/search.module.css';
import { searchIndex } from '../search/search-index';
import lunr from 'lunr';

const idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('tags')
  this.field('description')

  searchIndex.forEach(function (doc) {
    this.add(doc);
  }, this);
});

export default function Search() {

  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    setQuery(event.target.value);
  }

  const searchAction = () => {
    
    if (query.length) {
      const resultsRef = idx.search(query);
      console.log(resultsRef);

      let results = searchIndex.map((post) => {

        let isIn = false;
        resultsRef.forEach(function (result) {
          console.log(result.ref + " " + post.id);
          if (result.ref == post.id) {
            isIn = true;
          }

        })

        if (isIn) {
          return post;
        }
        return "";
      })
      results = results.filter(function (el) {
        return el != "";
      });
      setResults(results);
    } else {
      setResults([]);
    }
  }

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, []);

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search posts'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/[id]" as={`/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button type="button" onClick={searchAction}>Search</button>
    </div>
  );
}

