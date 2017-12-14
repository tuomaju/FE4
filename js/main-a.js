'use strict';
//Lisää punainen
const lisaa = document.querySelector('#lisaa');
const eka = document.querySelector('p');
lisaa.addEventListener('click', (evt) =>{
  eka.classList.add('punainen');
});
//vaihda sininen
const vaihda = document.querySelector('#vaihda');
const toka = document.querySelector('p:nth-child(2)');
vaihda.addEventListener('click', (evt) =>{
  toka.classList.toggle('sininen');
});
//vaihda vihreä
const toggle = document.querySelector('#toggle');
const kolmas = document.querySelector('p:nth-child(3)');
toggle.addEventListener('click', (evt) =>{
  kolmas.classList.toggle('vihrea');
});