import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.min'
import 'swiper/dist/css/swiper.min.css'
import './TapMovieCollection.css'
import TapMovieCard from './TapMovieCard'


// http://idangero.us/swiper/
class TapMovieCollection extends Component {

    constructor(props) {
        super(props)
        // console.log(props.movies);
        this.state = {
            movies: props.movies
        };
        //
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({movies: nextProps.movies});
        // console.log(this.state.movies);
    }

    componentDidMount() {
        this.siper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 3,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    componentDidUpdate (prevProps) {
        // if(this.siper) {
        //     this.siper.update();
        // }
        this.siper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 3,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        var indents = [];
        for (var i = 0; i < this.state.movies.length; i++) {
            indents.push(
                <div className='swiper-slide'>
                    <TapMovieCard id={this.state.movies[i].movieId} name={this.state.movies[i].nameEng} rt={this.state.movies[i].rottenTomatoesRating} posterUrl={this.state.movies[i].posterUrl} releaseDate={this.state.movies[i].releaseDate} descriptionEng={this.state.movies[i].descriptionEng}></TapMovieCard>
                </div>
            );
        }
        return (
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                    {indents}
                    </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

            </div>
        );
    }
}

export default TapMovieCollection;