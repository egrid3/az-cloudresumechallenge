
window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

const localApi = 'count.json'; //http://localhost:0000';
const apiFunction = ''; 

const getVisitCount = () => {
  let count = 2;
  fetch(localApi)
  .then(response => {
      return response.json()
  })
  .then(response => {
      console.log("The website called the API function.");
      count = response.count;
      document.getElementById('counter').innerText = count;
  }).catch(function(error) {
      console.log(error);
    });
  return count;
}