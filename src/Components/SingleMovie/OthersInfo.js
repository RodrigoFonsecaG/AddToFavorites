import React from 'react';
import styles from './OthersInfo.module.css';

const OthersInfo = ({movie}) => {
  return (
    <section className={styles.othersInfo}>
      {movie.overview && (
        <div className={styles.synopsis}>
          <h2 className="subtitle">Sinopse</h2>
          <p>{movie.overview}</p>
        </div>
      )}

      <div className={styles.extra}>
        {movie.budget !== 0 && (
          <div className={styles.budget}>
            <h3>Orçamento</h3>
            <p>
              {new Intl.NumberFormat('USD', {
                style: 'currency',
                currency: 'EUR'
              }).format(movie.budget)}
            </p>
          </div>
        )}

        {movie.revenue !== 0 && (
          <div className={styles.revenue}>
            <h3>Bilheteria</h3>
            <p>
              {new Intl.NumberFormat('USD', {
                style: 'currency',
                currency: 'EUR'
              }).format(movie.revenue)}
            </p>
          </div>
        )}

        {movie.production_companies && (
          <div className={styles.productions}>
            <h3>Produção</h3>
            <div className={styles.production}>
              {movie.production_companies.map((companie) =>
                companie.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`}
                    alt={companie.name}
                    key={companie.id}
                  />
                ) : (
                  <p key={companie.id}>{companie.name}</p>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OthersInfo