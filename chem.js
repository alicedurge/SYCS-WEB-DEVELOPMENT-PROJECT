const quizData = [
    {
        question: "What is chemical formula for water?",
        a: "H2O",
        b: "H2O2",
        c: "H4O2",
        d: "H2O6",
        correct: "a",
    },
    {
        question: "The symbol Ag stands for which element?",
        a: "Gallium",
        b: "Magnesium",
        c: "Gold",
        d: "Silver",
        correct: "d",
    },
    {
        question: "A mole contains Avogadro's number of items. What is Avogadro's number?",
        a: "6023",
        b: "6.023 x 10^23",
        c: "6.02 x 10^-23",
        d: "3 x 10^8",
        correct: "b",
    },
    {
        question: "What do you call an atom that has more protons than electrons?",
        a: "Molecule",
        b: "Isotope",
        c: "Anion",
        d: "Cation",
        correct: "d",
    },
    {
        question: "A drop of food coloring spreading out in a cup of water is an example of which transport process?",
        a: "Diffusion",
        b: "Osmosis",
        c: "Vapor Pressure",
        d: "Effusion",
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