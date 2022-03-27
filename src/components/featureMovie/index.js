import React from 'react';
import './featureMovie.css';

export default ({item}) => {
    
    let firstDate = new Date(item.first.air_date);
    
    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }

    return (
        <section className="feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(https://image.tmdb.org/t/p/original${item.backdrop_path})'
        }}>
            <div className="feature--vertical">
                <div className="feature--horizontal"></div>
                <div className="feature--name">{item.original_name}</div>
                <div className="feature--info">
                    <div className="feature-point">{item.vote_average} pontos</div>
                    <div className="feature--year">{firstDate.getFullYear}</div>
                    <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons < 2 ? 's' : ''}</div>
                </div>
                <div className="feature--description">{item.overview}</div>
                <div className="feature--buttons">
                    <a href={`/watch/${item.id}`} className="buttons--watch"> ▶ Assistir </a>
                    <a href={`/list/add/${item.id}`} className="buttons-list"> x Minha Lista</a>
                </div>
                <div className="feature--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>
            </div>
        </section>
    )
}