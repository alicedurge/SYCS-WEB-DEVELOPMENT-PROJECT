const quizData = [
    {
        question: "Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?",
        a: "22",
        b: "24",
        c: "25",
        d: "26",
        correct: "c",
    },
    {
        question: "FAG, GAF, HAI, IAH, ____",
        a: "JAK",
        b: "HAL",
        c: "HAK",
        d: "JAI",
        correct: "a",
    },
    {
        question: "An Informal Gathering occurs when a group of people get together in a casual, relaxed manner. Which situation below is the best example of an Informal Gathering?",
        a: "The book club meets on the first Thursday evening of every month.",
        b: "After finding out about his promotion, Jeremy and a few coworkers decide to go out for a quick drink after work.",
        c: "Mary sends out 25 invitations for the bridal shower she is giving for her sister",
        d: "Whenever she eats at the Mexican restaurant, Clara seems to run into Peter",
        correct: "b",
    },
    {
        question: "Melt : Liquid :: Freeze : ",
        a: "Ice",
        b: "Solid",
        c: "Condense",
        d: "Push",
        correct: "b",
    },
    {
        question: "'He is the son of the only son of my grandfather,' Lauren says, pointing to a photograph. How is the man in the related to Lauren?",
        a: "The man is the father of Lauren",
        b: "The man is the grandfather of Lauren",
        c: "The man is the son of Lauren",
        d: " The man is the brother of Lauren",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})