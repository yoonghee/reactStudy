import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from "./Movie"
import "./App.css"

/*
function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>// JSX + props
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
//rating: PropTypes.number 경우 undefined는 갠찮, string은 number를 예상했으니 에러
// 멀 내릴건지 타입을 지정해주는것 array boolean true false object 체크
// arrayof(number) objectof(string)과 같은 방식으로 체크해줄 수 있음

// food의 object 배열이됨 
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.9
  }
]

function App() {
  return <div>
    {foodILike.map(dish => (
      <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating}
      /> 
    ))}
  </div>
}

// react가 가진 많은것 중 하나가 state
class App extends React.Component{
  constructor(props) {
    super(props)
    console.log("hello")
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component rendered")
  }
  componentDidUpdate(){
    console.log("just update")
  }
  render() {
    console.log("im rendering")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
*/
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }) // movies get : movies와 같이 동작함
  } // 4.1 3:23
  componentDidMount () {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // ES6문법
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
              <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default App;
