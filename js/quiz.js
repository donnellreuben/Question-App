/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0

// 2. Store the rank of a player

let playerRank = ''


// 3. Select the <main> HTML element

document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

// Question 1
    const answer1 = prompt('How many assists does Tyrese Haliburton average?')
     if ( +answer1 === 10 ) {
      correct += 1
      alert('correct')
    } else {
      alert('wrong')
    }
    
// Question 2
    const answer2 = prompt('What is Tyrese Haliburtons career 3pt percentage?')
     if ( +answer2 === 40 ) {
      correct += 1
      alert('correct')
    } else {
      alert('wrong')
    }
    
// Question 3
    const answer3 = prompt('Who holds the record for the most points in the NBA (career)?')
     if ( answer3.toUpperCase() === 'LEBRON JAMES' || answer3.toUpperCase() === 'LEGOAT' || answer3.toUpperCase() === 'LE GOAT') {
      correct += 1
      alert('correct')
    } else if (answer3.toUpperCase() === 'LEBRON' || answer3.toUpperCase() === 'LBJ') {
      alert('Wrong: Please enter first and last name next time!')
    } else {
      alert('wrong')
    }
    
// Question 4
    const answer4 = prompt('Who has scored the most points in the 4th quarter in the playoffs?')
     if ( answer4.toUpperCase() === 'STEPHEN CURRY' || answer4.toUpperCase() === 'STEPH CURRY' || answer4.toUpperCase() === 'CHEF CURRY'  ) {
      correct += 1
      alert('correct')
    } else if (answer4.toUpperCase() === 'STEPH' || answer4.toUpperCase() === 'CURRY') {
      alert('Wrong: Please enter first and last name next time!')
    } else {
      alert('wrong')
    }
    
// Question 5
    const answer5 = prompt('Who won last years nba finals?')
    
     if ( answer5.toUpperCase() === 'GOLDEN STATE WARRIORS' || answer5.toUpperCase() === 'WARRIORS' ) {
      correct += 1
      alert('correct')
    } else {
      alert('wrong')
    }
   



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

playerRank = correct


// In Console
if ( correct === 5 ) {
  console.log('🏀🙋🏾‍♂️ Hi fellow Software Engineer, watcha doing here? Anyways you have showed your knowledge of basketball. Just remember with great power comes great....')
} else if (correct === 3 || correct === 4) {
  console.log('Oh, hi there fellow Software Engineer, try to get that Gold trophy! You were so close!')
} else if (correct === 1 || correct === 2) {
  console.log('Michael Phelps would not be happy right now, try again my fellow Software Engineer')
} else {
  console.log('You must be stuck in front of the computer too much my fellow Software Engineer 😬')
}

// Results on page
let message;
if ( playerRank === 5 ) {
  message = `
<h2>You got ${playerRank} out of 5 questions correct.<h2>
<h1>Trophy earned: Gold 🏆</h1>`
} else if (playerRank === 3 || playerRank === 4) {
  message = `
<h2>You got ${playerRank} out of 5 questions correct.<h2>
<h1>Medal earned: Silver 🥈</h1>`
} else if (playerRank === 1 || playerRank === 2) {
  message = `
<h2>You got ${playerRank} out of 5 questions correct.<h2>
<h1>Medal earned:</h1> <h1>Bronze 🥉</h1>`
} else {
  message = `
<h2>You got ${playerRank} out of 5 questions correct.<h2>
<h1>No Crowns or Medals Earned, Watch some more NBA Games 😬🪦</h1>`
}



// 6. Output results to the <main> element

document.querySelector('main').innerHTML = message
