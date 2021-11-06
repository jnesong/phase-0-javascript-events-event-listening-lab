// function addingEventListener() {

// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert); 
// }


// new start on 11.6.21

function addingEventListener(){
  const variable = document.querySelector('#input');
  const clickAlert = () => {alert ('I was clicked!')};
  variable.addEventListener('click', clickAlert);
}

addingEventListener()