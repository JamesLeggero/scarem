
const axios = require('axios')
require('dotenv').config()

const TEST_SECRET = process.env.TEST_SECRET
const ALPHA = process.env.ALPHAVANTAGE_API


const submission = document.getElementById('submission')

submission.addEventListener('submit', async event => {
    event.preventDefault()
    const ul = document.getElementById('list')
    ul.innerHTML = ''
    let stockName = document.getElementById('stockName')
    const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockName.value}&apikey=${ALPHA}`)
    const data = response.data
    const company = [data.Symbol, data.Sector, data.Exchange]
    
    for (let i = 0; i < company.length; i++) {
        const node = document.createElement('li')
        const text = document.createTextNode(company[i])
        node.appendChild(text)
        ul.appendChild(node)
    }
    // console.log(data.Symbol)
    // console.log(data.Sector)
    submission.reset()

})

// const addText = text => {
//     const ul = document.getElementById('list')
//     const node = document.createElement('li')
//     const hello = document.createTextNode(text)
//     node.appendChild(hello)
//     // information.appendChild(node)
//     ul.appendChild(node)
// }


// button.addEventListener('click', () => {
//     addText('Hello')
// })
