import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Video, {Grid, Score, Buttons} from './App';
import pic from './pic.png'

const root = document.getElementById('root');

ReactDOM.render(
  <>
  <div className="container">

    <Video></Video>
    <Score></Score>
    <Grid></Grid>
    <Buttons />
  </div>
  </>, root
)

const border = document.querySelectorAll('.box');
// const p = document.querySelectorAll('.element');
const scoring = document.getElementById('scoring');

for (let i = 90; i < border.length; i++) {
  border[i].classList.add('border-bottom');
}
for (let i = 0; i < border.length; i++) {
  if (i % 10 === 0) {
    border[i].classList.add('border-left');
  }
}

const rst = document.getElementById('rst');
const gold = document.getElementById('gold');

border.forEach(item => {

 if (item.innerText === 'p') {
    item.children[0].classList.add('picked');
    item.children[0].innerText = " ";
  }

  item.addEventListener('click', def);

  function def () {
    item.children[0].classList.remove('fade');
    item.classList.remove('boxing');

     if (item.children[0].classList.contains('picked')){
      scoring.innerText = "GAME OVER";
      border.forEach(rev => {
        rev.children[0].classList.remove('fade');
        rev.classList.remove('boxing');
      })
      item.removeEventListener('click', def);
    } else if (Number(item.innerText) >=0 && Number(item.innerText) <= 3) {
      
      if(scoring.innerText === "GAME OVER") {
        return
      } else {
        scoring.innerText = Number(scoring.innerText) + Number(item.innerText);
      }
      item.removeEventListener('click', def);
      }
    }

    rst.addEventListener('click', load );

    function load () {
    window.location.reload();
    }


    gold.addEventListener('click', () => {
      border.forEach(item => {
        item.children[0].classList.remove('fade');
        item.classList.remove('boxing');
        item.removeEventListener('click', def);
    
      })
    })
    
  
})






console.log(rst);


