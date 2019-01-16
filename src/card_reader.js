export function getRandomCard(){
  let req = getRequest();

  req.then(function(response) {
    let stuff = JSON.parse(response);
    console.log(stuff.name);
  }, function(error) {
    console.log(error);
  });
}

function getRequest(){
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.scryfall.com/cards/random`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });
  return promise;
}
