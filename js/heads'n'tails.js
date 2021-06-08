

let heads = document.querySelector('#heads')
let tails = document.querySelector("#tails")
let drop = document.querySelector('.drop')
let winrate = document.querySelector('.score')

let score = 0
let score2 = 0

heads.addEventListener('click', () => {

   let result = (Math.floor(Math.random() * 2))

      result == 1 ? 
      drop.innerHTML = ('you win!') :
      drop.innerHTML = ('you lose!')

   if (result == 1) {
       score = parseInt(++score)
   }
   score2 = parseInt(++score2)
   winrate.innerHTML = (`${Math.round(score / score2 * 100)} %`)
})


tails.addEventListener('click', () => {

   let result = (Math.floor(Math.random() * 2))

      result != true ? 
      drop.innerHTML = ('you win!') :
      drop.innerHTML = ('you lose!')

      if (result != 1) {
         score = parseInt(++score)
     }
     score2 = parseInt(++score2)
     winrate.innerHTML = (`${Math.round(score / score2 * 100)} %`)
   })


