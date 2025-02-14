export const nameQuestion = {
    question: 'Who are you?',
    nextQuestion: 'food',
    choices: {
        'Cesilie': { },
        'Jaxon': { },
        'Levi': { },
        'Maverick': { },
    }
};

const foodQuestion = {
    question: 'Which food do you want in your card?',
    nextQuestion: 'animal',
    choices: {
        'Hot Dogs': { },
        'Pizza': { },
        'Peanut Butter & Jelly': { },
        'Potatoes': { },
    }
}

const animalQuestion = {
    question: 'What exotic animal do you want in your card?',
    nextQuestion: 'dance',
    choices: {
        'A Giraffe': { },
        'A Capybara': { },
        'An Axolotl': { },
        'A Panda': { }
    }
}

const danceQuestion = {
    question: 'What kind of dancing do you want in your card?',
    nextQuestion: 'character',
    choices: {
        'Group Dancing': { },
        'Stylish Dancing': { },
        'Laid Back Dancing': { }
    }
}

const characterQuestion = {
    question: "What movie series/character theme?",
    choices: {
        'Toothless': {},
        'Jurassic World': {},
        'Black Panther': {}
    }
}

export const questions = {
    'name': nameQuestion,
    'food': foodQuestion,
    'animal': animalQuestion,
    'dance': danceQuestion,
    'character': characterQuestion
}