import React from 'react';
import StingMovie from '../movies/sting-movie.mp4'

export default () => {
  return (
    <section id="movie">
      <div className="inner">
        <h2 className="title">STING紹介動画</h2>
        <video>
          <source src={StingMovie} type="video/mp4"/>
        </video>
      </div>
    </section>
  )
};