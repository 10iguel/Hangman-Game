class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetter = []
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetter.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })
        return puzzle
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left : ${this.remainingGuesses}.`
        } else if (this.status === 'failed') {
            return `Nice try. The Word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word'
        }
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetter.includes(letter) || letter === ' ')
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }

    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetter.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== 'playing') {
            return
        }
        if (isUnique) {
            this.guessedLetter.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }

}

// Hangman.prototype.calculateStatus = function(){
//     const finished = this.word.every((letter)=>
//         this.guessedLetter.includes(letter)
//     )
//     // let finished = true
//     // this.word.forEach((letter)=>{
//     //     if (this.guessedLetter.includes(letter)){
//     //
//     //     }else {
//     //         finished = false
//     //     }
//     // })
//
//     if (this.remainingGuesses===0){
//         this.status = 'failed'
//     }else if (finished){
//         this.status = 'finished'
//     }else {
//         this.status = 'playing'
//     }
// }


//synchronous and asynchronous , What is that , others call it blocking and non blocking
//it's all about time
