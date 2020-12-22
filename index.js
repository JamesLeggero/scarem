const submission = document.getElementById('submission')

submission.addEventListener('submit', event => {
    event.preventDefault()
    let stockName = document.getElementById('stockName')
    console.log(stockName.value)
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
