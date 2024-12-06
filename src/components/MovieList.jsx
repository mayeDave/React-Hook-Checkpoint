import MovieCard from "./MovieCard"

const MovieList = ({formData}) => {
    const movieList = [
        {
            title: 'The Shawshank',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZ9SxyuGaV5RpcfsUTqWZ6_euqYcqgsPTug&s',
            rating: 9.3
        },
        {
            title: 'The Godfather',
            description: 'The aging patriarch of an organized crime dynasty in postwar New York City is forced to face his destiny.',
            image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            rating: 9.2
        },
        {
            title: 'The Dark Knight',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his greatest challenges as a symbol of hope.',
            image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
            rating: 9.0
        }

    ]

    //get data from form data and update the movielist
    if (Object.keys(formData).length > 0) {
        movieList.push(formData)
    }
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {/* map through movieList */}
        {movieList.map((movie) => (
            <MovieCard
             key={movie.title}
             title={movie.title}
             description={movie.description}
             image={movie.image}
             rating={movie.rating} />
        ))}

    </div>
  )
}

export default MovieList