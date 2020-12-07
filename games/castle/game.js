const textElement = document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')

let state = {}

function startGame() {
    //Starts game and sets state
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild) // This is supposed to remove the buttons but it doesn't.
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectionOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return true
}
function selectOption(option) {
    //We need to know which option the user selects
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place and see a jar of blue goo near you.',
        options: [
            {
                text: 'Take goo',
                setState: { blueGoo: true }, //Sets state
                nextText: 2 //Next text node
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame()