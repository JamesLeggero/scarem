const button = document.getElementById("btn")

const information = document.getElementById('info')

const addText = text => {
    const node = document.createElement('li')
    const hello = document.createTextNode(text)
    node.appendChild(hello)
    information.appendChild(node)
}


button.addEventListener('click', () => {
    addText('Hello')
})
