
const questionisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1541270941907-3f7143c8c7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMG5pYmxldHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "Photo of Empire State Building during daytime",
                credit: "Oliver Nilbett"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Time-lapse photography car lights on the bridge",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1436505743955-a98c0d3eb1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "High rise buildings",
                credit: "Zack Spear"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1541270941907-3f7143c8c7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JTIybmV3JTIwb3JsZWFucyUyMnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Road with people and house",
                credit: "Daivd Groves"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVwcGVyb25pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Pizza pepperoni",
                credit: "Alan Hardman"
            },

            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Ham sandwich",
                credit: "Pixolo Photography"
            },

            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Pasta in tomato sauce",
                credit: "amirali mirhashemian"
            },

            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1507589186315-6b6c2de672f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZGl0aW9uJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "focus photography of building windows",
                credit: "Zoltan Tasi"
            },


            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Low angle view of building",
                credit: "R Architecture"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1593047614267-378b863c98c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                alt: "white house",
                credit: "Tabrez Syed"
            },

            {
                text: "Mountains",
                image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGVuJTIwY2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                alt: "wooden cabin",
                credit: "eualauretta"
            }
        ]
    }
]

const unansweredQuestions = [];
const chosenAnswers = [];


const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');
        const titleHeading = document.createElement('h2');
        titleHeading.textContent = question.text;
        titleBlock.append(titleHeading);
        questionisplay.append(titleBlock);

        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)


        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            const answerTitle = document.createElement('h3');
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p');
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', answer.image);
            imageLink.textContent = answer.credit;

            const sourceLink = document.createElement('a');
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com');
            answerInfo.append(imageLink, ' to ', sourceLink);

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        });

        questionisplay.append(answersBlock)
    })

}
populateQuestions()
const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId));
    chosenAnswers.push(chosenAnswer)

    const itemToRemove = unansweredQuestions.indexOf(questionId);

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1);
    }

    console.log(chosenAnswers);
    console.log(unansweredQuestions);

    disableQuestionBlock(questionId, chosenAnswer);

    const lowestQuestionId = Math.min(...unansweredQuestions);
    location.href = '#' + lowestQuestionId;

    if (!unansweredQuestions.length) {
        //scroll to answer div
        location.href = '#answer'
        showAnswer()
    }

}
const showAnswer = () => {
    let result;
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            result = answers[0]           //first answer object is default
        }
    })


    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');

    const answerTitle = document.createElement('h3');
    answerTitle.textContent = result.text;

    const answerImage = document.createElement('img');
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt', result.alt);

    answerBlock.append(answerTitle, answerImage);

    answerDisplay.append(answerBlock);

    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions");

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}