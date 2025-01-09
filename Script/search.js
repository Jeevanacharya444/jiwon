const search = [];

function search(){
const inputElement = document.querySelector('.js-name');
  const name = inputElement.value;
  search.push(name);
  console.log(search);
  inputElement.value = '';
}