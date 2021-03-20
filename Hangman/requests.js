//Promises using async and await ( a short way)
//async()={
// const variable = await fetch // instead of then
//
// }

const newGetPuzzle = async (wordCount) => {
    const puzzle = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (puzzle.status === 200) {
        const data = puzzle.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}


//promises
//return fetch(url).then((response)=>{if and else statements//response.status and throw errors}).then(()=>{})
//remember that to fetch and url and  interact with it

const getPuzzle = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch  puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}


//You cannot return from a parent function inside of a child function.
// const getPuzzle = (wordCount) => new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest()
//
//     request.addEventListener('readystatechange',(e)=>{
//         if (e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//            resolve(data.puzzle)
//         }else if (e.target.readyState === 4 ){
//             reject('An error has taken place')
//         }
//     })
//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

//create a new function for getting country details
// call it with two arguments: country code,the callback function
//make the HTTP request and call the callback with the country informacion
//use the callback to print the country name

//

const getCountry = (countryCode) => {
    return fetch('//restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the data')
        }
    }).then((data) =>
        data.find((country) => country.alpha2Code === countryCode))
}


// const getCountry = (countryCode)=> new Promise((resolve, reject)=>{
//
//     const countryRequest = new XMLHttpRequest()
//     countryRequest.addEventListener('readystatechange',(e)=>{
//         if (e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country)=>country.alpha2Code === countryCode)
//             resolve(country)
//             const region = data.find((continent)=>continent.region)
//             resolve(region.region)
//
//         }else if (e.target.readyState === 4){
//             reject('Unable to fetch the data')
//         }
//     })
//
//     countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })


const getLocation = () => {
    return fetch('//ipinfo.io/json?token=ea6160b8dbb4f7').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    }).then((data) => {
        return data
    })
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}
