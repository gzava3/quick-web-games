import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Wordle from './../pics/wordle.png'
import Ultimate_Tic_Tac_Toe from './../pics/Ultimate_Tic_Tac_Toe.png'
import Minesweeper from './../pics/minesweeper.png'
import Hangman from './../pics/hangman.png'

export default function Carouselpage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false} showThumbs={false}>
            <div>
                <img src={Wordle} alt="Wordle" style={{height:400, width:400}}/>
                <p>Wordle</p>
            </div>
            <div>
                <img src={Ultimate_Tic_Tac_Toe} alt="Ultimate_Tic_Tac_Toe" style={{height:400, width:400}}/>
                <p>Ultimate_Tic_Tac_Toe</p>
            </div>
            <div>
                <img src={Minesweeper} alt="Minesweeper" style={{height:400, width:400}}/>
                <p>Minesweeper</p>
            </div>
            <div>
                <img src={Hangman} alt="Hangman" style={{height:400, width:400}}/>
                <p>Hangman</p>
            </div>

        </Carousel>
    )
}
