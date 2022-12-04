const quizData = [
    {
        question: "A pull or a push applied or exerted on an object is _______ ",
        a: "Energy",
        b: "Force",
        c: "Velocity",
        d: "Distance",
        correct: "b",
    },
    {
        question: "The ability to do work is _______",
        a: "Velocity",
        b: "Force",
        c: "Energy",
        d: "Heat",
        correct: "c",
    },
    {
        question: "_______ is said to be done when a force of 1Newton moves an object of mass 1gram, 1 meter in the direction of the force.",
        a: "Force",
        b: "Time",
        c: "Energy",
        d: "Work",
        correct: "d",
    },
    {
        question: "What type of lens is a Magnifying Glass?",
        a: "Convex",
        b: "Concave",
        c: "Parabolic",
        d: "Plane",
        correct: "a",
    },
    {
        question: "Mirrors _____ light rays to make an image.",
        a: "Reflect",
        b: "Refract",
        c: "Diffract",
        d: "Diffuse",
        correct: "a",
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