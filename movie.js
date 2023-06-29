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
              <div class="card movie"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}"/></div>
            `;
          } else {
            main.innerHTML += `
              <div class="card movie"><img src="https://image.tmdb.org/t/p/w500${item.poster_path}"/></div>
            `;
          }
        }
      });
    });
};

fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=1', 16, 'Prime');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=2', 19, 'Filmes Fresquinhos da Telona');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=3', 16, 'Filmes Que Deveria Assistir');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=4', 16, 'Filmes Para Maratonar');
fetchData('https://api.themoviedb.org/3/movie/popular?api_key=95bf46ca4de17d681a30e5c223fef7f4&language=en-US&page=5', 16, 'Filmes Que A Gente Recomenda');
