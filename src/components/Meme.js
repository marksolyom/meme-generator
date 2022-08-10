import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    );

    const [allMemeImgs, setAllMemeImgs] = useState(memesData);


    function getMemeImg() {
        const memesArray = allMemeImgs.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                    className="form-btn"
                    onClick={getMemeImg}>
                    GET RANDOM MEME
                </button>
            </div>
            <img src={meme.randomImg} alt="meme" />
        </main>
    )
}