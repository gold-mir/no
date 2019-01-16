import './styles.css';
import { getRandomCard } from './card_reader.js';
import $ from 'jquery';

$(document).ready(() => {
  $("#getCard").click(getRandomCard);
});

async function foo() {
  console.log('async working!')
}

async function bar() {
  await foo()
  console.log('after foo')
}

bar()


// $(document).ready(function() {
//   $('#getCard').click(function() {
//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.scryfall.com/cards/random`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response) {
//       let stuff = JSON.parse(response);
//       console.log(stuff.name);
//     }, function(error) {
//       console.log(error);
//     });
//   });
// });
