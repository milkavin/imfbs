const cacheKey = "NUMBER";
 
           const pict = document.querySelector(".produ");
           pict.addEventListener('click', function(event) {
               let number = localStorage.getItem(cacheKey);
               number++;
               localStorage.setItem(cacheKey, number);
           })
       
const cache = "NUMBER1";
 
           const button = document.querySelector(".btn");
           button.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number++;
               sessionStorage.setItem(cache, number);
           })
       
