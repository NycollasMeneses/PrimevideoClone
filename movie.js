const main = document.querySelector('.main .center');

const fetchData = (url, limit, category) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.results.slice(0, limit).forEach((item, index) => {
        if (index === 0) {
          main.innerHTML += `
            <div class="banner-principal" style="background-image: url('https://image.tmdb.org/t/p/original${item.backdrop_path}')"></div>
          `;
        } else {
          if (index === 1) {
            main.innerHTML += `
              <h2><span style="color: blue;">${category}</span> Amazon Originais e exclusivos</h2>
              <div class="card movie" data-title="${item.title}" data-description="${item.overview}">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"/>
              </div>
            `;
          } else {
            main.innerHTML += `
              <div class="card movie" data-title="${item.title}" data-description="${item.overview}">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}"/>
              </div>
            `;
          }
        }
      });

      const movieCards = document.querySelectorAll('.card.movie');
      movieCards.forEach(card => {
        card.addEventListener('mouseenter', showMovieDescription);
        card.addEventListener('mouseleave', hideMovieDescription);
      });
    });
};

const showMovieDescription = (event) => {
  const card = event.target;
  const title = card.getAttribute('data-title');
  const description = card.getAttribute('data-description');
  
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <h3>${title}</h3>
    <p style="color: white;">${description}</p>
  `;
  
  card.appendChild(popup);
};

const hideMovieDescription = (event) => {
  const card = event.target;
  const popup = card.querySelector('.popup');
  if (popup) {
    card.removeChild(popup);
  }
};

fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=1', 16, 'Prime');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=2', 19, 'Filmes Fresquinhos da Telona');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=3', 16, 'Filmes Que Deveria Assistir');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=4', 16, 'Filmes Para Maratonar');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=5', 16, 'Filmes Que A Gente Recomenda');
