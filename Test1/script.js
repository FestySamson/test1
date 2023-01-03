const result = document.querySelector('.result');
const form = document.getElementById('form');
let u = document.getElementById('u');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // FIXED
  let input1 = parseInt(u.value); // sir please check here 😥😥
  console.log(input1);
});

/*** if do any calculation it usually concat instead adding 😭😭😭😭😭 */
