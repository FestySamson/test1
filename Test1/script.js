const result =document.querySelector('.result')
const form = document.getElementById('form')
let u = document.getElementById('u').value


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let input1 = parseInt(u)// sir please check here 😥😥
    console.log(input1)
})

/*** if do any calculation it usually concat instead adding 😭😭😭😭😭 */