'use client'

import { useEffect, useState } from 'react';
import Loading from '@/pages/components/Loading';

const Results = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/results')
      .then(res => res.json())
      .then(data => {
        setResult(data);
        setLoading(false);
      });
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        Object.entries(result).map((item) => {
          const [time, results] = item;
          const title = `Resultado das ${time.slice(0, 2)}h`;

          return results.length > 0 ? (
            <div style={{ marginBottom: '1rem' }} key={time}>
              <h2 style={{ padding: '0.5rem' }}>{title}</h2>
              {results.map((result, index) => (
                <p key={index} style={{ padding: '0.275rem' }} >{result}</p>
              ))}
              <hr />
            </div>
          ) : (
            <></>
          );
        })
      )}
    </>
  )
}

export default Results;