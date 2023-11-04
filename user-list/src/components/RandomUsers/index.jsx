import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { loadUsers } from "../../api";
import styles from './RandomUsers.module.scss';

function RandomUsers() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ page, results })
      .then((data) => {
        setUsers(data.results);
        setIsFetching(false);
      })
      .catch((err) => {
        setError(err);
        setIsFetching(false);
      })
      .finally(() => setIsFetching(false));
  }, [results, page]);

  const handleResultChange = ({ target: { value } }) => setResults(value);
  const prev = () =>  page === 1 ? setPage(page) : setPage(page - 1);
  const next = () => setPage(page + 1);

  return (
    <>
      <section>
        <label>
          Results on Page:
          <input
            onChange={handleResultChange}
            type="number"
            value={results}
            min="1"
            max="20"
          />
        </label>
        <button onClick={prev}>{'<'}</button>
        <button onClick={prev}>{'||'}</button>
        <button onClick={next}>{'>'}</button>
      </section>

      {isFetching && <BeatLoader />}
      {error && <div style={{ color: "red" }}>!!!Error!!!</div>}
      <ul className={styles.usersList}>
        {!isFetching &&
          !error &&
          users.map((u) => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
      </ul>
    </>
  );
}

export default RandomUsers;
