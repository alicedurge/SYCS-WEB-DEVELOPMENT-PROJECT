const quizData = [
    {
        question: "FFC stands for",
        a: "Foreign Finance Corporation",
        b: "Film Finance Corporation",
        c: "Federation of Football Council",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Galileo was an Italian astronomer who ...",
        a: "developed the telescope",
        b: "discovered four satellites of Jupiter",
        c: "discovered that the movement of pendulum produces a regular time measurement",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Golf player Vijay Singh belongs to which country?",
        a: "USA",
        b: "Fiji",
        c: "India",
        d: "UK",
        correct: "b",
    },
    {
        question: "Fire temple is the place of worship of which of the following religion?",
        a: "Taoism",
        b: "Judaism",
        c: "Parsi Religion",
        d: "Shintoism",
        correct: "c",
    },
    {
        question: "Film and TV institute of India is located at",
        a: "Pune (Maharashtra)",
        b: "Rajkot (Gujarat)",
        c: "Pimpri (Maharashtra)",
        d: "Perambur (Tamilnadu)",
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