
window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

//const localApi = 'http://localhost:7071/api/GetResCount';
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