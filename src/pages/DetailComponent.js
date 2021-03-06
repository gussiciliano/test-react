import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ButtonBackHome } from '../components/ButtonBackHome'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  componentDidMount() {
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  _fetchMovie({ id }) {
    fetch(`${process.env.REACT_APP_OMDBAPI_API}/?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({ movie })
    })
  }

  render(){
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return(
      <div>
        <ButtonBackHome />
        <h1>{Title}</h1>
        <img alt='' src={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}