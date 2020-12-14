import React from 'react';


function video () {
    return (
        <video className="video" autoPlay loop>
            <source src="video.mp4"></source>
        </video>
    )
}

function mBox (val) {
    return (
        <Box value={val}></Box>
    )
}

function Score () {
    return (
        <h1>Score : <span id="scoring"></span></h1>
    )
}

function Grid () {
    return (
        <>
            <div className="grid">
                {Data.map(mBox)}
            </div>
        </>
    )
}


function Box (props) {
    return (
        <div className="box boxing">
            <div className="element fade">
                <p>{props.value}</p>
            </div>
        </div>
    )
}

function Buttons () {
    return (
        <div className="butContain">
            <But id="rst" value="Reset"></But>
            <But id="gold" value="Show All"></But>
        </div>
    )
}

function But (props) {
    return (
        <button id={props.id}>{props.value}</button>
    )
}

let numbered = [];
let bombs = [];
for (let i = 0; i < 85; i++) {
    numbered[i] = Math.floor(Math.random() * 4);
}
for (let i = 0; i < 15; i++) {
    bombs[i] = 'p';
}    

const shuffle = numbered.concat(bombs);

// Random Array Algorithm
const shuffleData = array => {
    for (let i = array.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[j] = temp;
    }
    return array;
}
let Data = shuffleData(shuffle);

export default video;
export {Grid , Score, Buttons};