// IFFE - Maintain a clean global scope
(function(){
  'use strict';

var firebaseDB = new Firebase ('https://logcampoct2015.firebaseio.com');
var neighborhoodData = firebaseDB.child('categories');
var neighborhoodDataCate1 = neighborhoodData.child('southWest');
var neighborhoodDataCate2 = neighborhoodData.child('northWest');
var neighborhoodDataCate3 = neighborhoodData.child('north');
var neighborhoodDataCate4 = neighborhoodData.child('northEast');
var neighborhoodDataCate5 = neighborhoodData.child('southEast');

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('after').style.visibility='hidden';
});

function users(firstName, lastName, age, neighborHood){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.neighborHood = neighborHood;
}

function usersSubmit() {
  var firstName = document.getElementById('fn').value,
      lastName = document.getElementById('ln').value,
      age = document.getElementById('ag').value,
      neighborHood;
      
      if (document.getElementById('nei1').checked === true) {
        neighborHood = document.getElementById('nei1').value;
      }
      else if (document.getElementById('nei2').checked === true){
        neighborHood = document.getElementById('nei2').value;
      } 
      else if (document.getElementById('nei3' ).checked === true){
        neighborHood = document.getElementById('nei3').value;
      } 
      else if (document.getElementById('nei4').checked === true){
        neighborHood = document.getElementById('nei4').value;
      } 
      else{
        neighborHood = document.getElementById('nei5').value;
      }
     
      
  var user = new users(firstName, lastName, age, neighborHood);  
  
  console.log("test"+neighborHood);


// var question = prompt('what neighborhood do you live in?');
var catergoryChoice;

switch(neighborHood) {
  case 'Southwest':
    catergoryChoice = 'southWest';
    neighborhoodDataCate1.push(user);
    console.log(categoryChoice);
    break;
  case 'Northwest':
    catergoryChoice = 'northWest';
    neighborhoodDataCate2.push(user);
    console.log(catergoryChoice);
    break;
  case 'North':
    catergoryChoice = 'north';
    console.log(catergoryChoice);
    neighborhoodDataCate3.push(user);
    break;
  case 'Northeast':
    catergoryChoice = 'northEast';
    console.log(catergoryChoice);
    neighborhoodDataCate4.push(user);
    break;
  case 'Southeast':
    catergoryChoice = 'southEast';
    console.log(catergoryChoice);
    neighborhoodDataCate5.push(user);
    break;
  default:
    console.log('please enter a valid choice');
    break;
}

  
document.getElementById('after').style.visibility='visible';
document.getElementById('before').style.visibility='hidden';

}

}());
