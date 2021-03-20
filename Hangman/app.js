//HTTP (hypertext transfer protocol)
//Request - What do we want to do
//Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guess')
let game1
// puzzleEl.textContent = game1.puzzle
// guessEl.textContent = game1.statusMessage
//
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})
const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('3')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle)=>{
//     console.log(puzzle)
// }).catch((error)=>{
//     console.log(`Error: ${error}`)
// })
//
// getCountry('PE').then((country)=>{
//     console.log(`Country name: ${country.name}`)
// }).catch((error)=>{
//         console.log(`Error:${error}`)
// })
//
// // getLocation().then((location)=>{
// //     console.log(`City:${location.city} Region:${location.region} Country:${location.country}`)
// // }).catch((error)=>{
// //     console.log(`Your Error : ${error}`)
// // })
//
// getLocation().then((location)=>{
//     return getCountry(location.country)
// }).then((country)=>{
//     console.log(country.name)
// }).catch((error)=>{
//     console.log(`Your Error : ${error}`)
// })
//
//
// getCurrentCountry().then((country)=>{
//     console.log(country.name)
// }).catch((error)=>{
//     console.log(`Your error is ${error}`)
// })


//down below is the same that up above
// getPuzzle((error,puzzle)=>{
//     if (error){
//         console.log(`Error : ${error}`)
//     } else{
//         console.log(puzzle)
//     }
// })


// const game2 = new Hangman('New Jersey',4)
// console.log(game2.puzzle);

//Making on HTTP request

// const request = new XMLHttpRequest()
//
// request.addEventListener('readystatechange',(e)=>{
//     if (e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     }else if (e.target.readyState === 4 ){
//         console.log('An error has taken place')
//     }
// })
//
// request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()
//
//  const countryCode = 'US'
//  const countryRequest = new XMLHttpRequest()
//
//  countryRequest.addEventListener('readystatechange',(e)=>{
//      if (e.target.readyState === 4 && e.target.status === 200){
//          const parsedData = JSON.parse(e.target.responseText)
//          console.log(parsedData)
//          const country = parsedData.find((country)=>country.alpha2Code === countryCode)
//          console.log(country.name)
//          const region = parsedData.find((continent)=>continent.region)
//          console.log(region.region)
//
//      }else if (e.target.readyState === 4){
//          console.log('Unable to fetch data')
//      }
//  })
//
//  countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
//  countryRequest.send()

// getCountry('PE',(error,country)=>{
//     if (error){
//         console.log(`Error : ${error}`)
//     }else {
//         console.log(`Country name: ${country.name}`)
//     }
// })

// getCountry('PE').then((country)=>{
//     console.log(`Country name: ${country.name}`)
// },(error)=>{
//     console.log(`Error:${error}`)
// })


//fetch API
//1 the url, then the promise (then and catch )




