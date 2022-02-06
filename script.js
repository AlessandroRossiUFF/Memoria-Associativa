document.addEventListener('DOMContentLoaded', () => { // Aqui cuidamos da parte de seleção de cartas e etc
  const cards = document.querySelectorAll('.memory-card') 

  let hasFlippedCard = false // carta já foi virada?
  let lockBoard = false  // carta bloqueada (já teve match)
  let firstCard, secondCard //Primeira e segunda carta selecionadas

  const score = document.querySelector('#score') // Pontuação
  var cadrdsMatched = [] //string com os pares de cartas já encontrados

  function flipCard() { // fun~]ao vira carta
    if (lockBoard) return 
    if (this === firstCard) return 

    this.classList.add('flip') 

    if (!hasFlippedCard) { // se a carta ainda não foi virada
      hasFlippedCard = true 
      firstCard = this 

      return 
    }

    secondCard = this //retorna o valor para a segunda carta
    checkForMatch() // verifica se houve match
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id 

    isMatch ? disableCards() : unflipCards() 
  } // mantem as duas cartas viradas se forem um match

  function disableCards() { // Se as cartas não forem um match (casal/par) o jogo vai desvirar elas e não contara nenhum ponto
    
    firstCard.removeEventListener('click', flipCard) 
    secondCard.removeEventListener('click', flipCard) 
    // remove cartas combinadas
    console.log([firstCard, secondCard])
    //firstCard.setAttribute('src', "blank")
    //secondCard.setAttribute('src', "blank")
    // Pontuação
    cadrdsMatched.push(firstCard)
    cadrdsMatched.push(secondCard)
    score.textContent = cadrdsMatched.length/2

    resetBoard() 
  }

  function unflipCards() {
    lockBoard = true 

    setTimeout(() => {
      firstCard.classList.remove('flip') 
      secondCard.classList.remove('flip') 

      resetBoard() 
    }, 500) 
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false] 
    [firstCard, secondCard] = [null, null] 
  }

  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12) 
      card.style.order = randomPos 
    }) 
  })() 

  cards.forEach(card => card.addEventListener('click', flipCard)) 
})