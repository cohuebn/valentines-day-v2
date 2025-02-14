export const nameQuestion = {
    question: 'Who are you?',
    nextQuestion: 'color',
    choices: {
        'Cesilie': { },
        'Jaxon': { },
        'Levi': { },
        'Maverick': { },
    }
};

const colorQuestion = {
    question: 'Which food do you want in your card?',
    nextQuestion: 'animal',
    choices: {
        'Hot Dog': { },
        'Pizza': { },
        'Peanut Butter & Jelly': { },
        'Potatoes': { },
    }
}

const animalQuestion = {
    question: 'What exotic animal do you want in your card?',
    nextQuestion: 'who',
    choices: {
        'Giraffe': { },
        'Capybara': { },
        'Axolotl': { },
        'Panda': { }
    }
}

const whoQuestion = {
    question: 'Who would you want in your card?',
    nextQuestion: 'happiestToSee',
    choices: {
        'Baby Yoda': { },
        'Bluey & Bingo': { },
        'Dancing Grandpa': { }
    }
}

const happiestToSee = {
    question: "What action of love would you like?",
    choices: {
        'Ballons': {},
        'Romance': {},
        "A simple Happy Valentines Day wish": {}
    }
}

export const questions = {
    'name': nameQuestion,
    'happiestToSee': happiestToSee,
    'color': colorQuestion,
    'animal': animalQuestion,
    'who': whoQuestion
}