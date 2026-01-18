const questions = [
    {
        q: "Which city is known as the 'Pink City' of India?",
        a: ["Delhi", "Jaipur", "Mumbai", "Udaipur"],
        correct: 1
    },
    {
        q: "Who was the first Prime Minister of India?",
        a: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 2
    },
    {
        q: "What is the national animal of India?",
        a: ["Lion", "Elephant", "Tiger", "Leopard"],
        correct: 2
    },
    {
        q: "Which river is known as the 'Ganges of the South'?",
        a: ["Kaveri", "Godavari", "Krishna", "Narmada"],
        correct: 0
    },
    {
        q: "In which year did India gain Independence?",
        a: ["1942", "1945", "1947", "1950"],
        correct: 2
    },
    {
        q: "Which state is known as the 'Spice Garden of India'?",
        a: ["Tamil Nadu", "Karnataka", "Kerala", "Assam"],
        correct: 2
    },
    {
        q: "Who is known as the 'Iron Man of India'?",
        a: ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Lal Bahadur Shastri"],
        correct: 1
    },
    {
        q: "What is the capital of India?",
        a: ["Kolkata", "Chennai", "Mumbai", "New Delhi"],
        correct: 3
    },
    {
        q: "Which Indian state has the longest coastline?",
        a: ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
        correct: 1
    },
    {
        q: "The classical dance form 'Kathakali' originated in which state?",
        a: ["Odisha", "Kerala", "Andhra Pradesh", "Tamil Nadu"],
        correct: 1
    }
];

let currentIndex = 0;
let score = 0;
const labels = ["A", "B", "C", "D"];

function initQuiz() {
    const q = questions[currentIndex];
    document.getElementById("curr").innerText = (currentIndex + 1).toString().padStart(2, '0');
    document.getElementById("question-text").innerText = q.q;

    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    document.getElementById("next-btn").classList.add("hidden");

    questions[currentIndex].a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span style="color:var(--neon-pink); font-weight:bold; margin-right:10px">${labels[i]}</span> ${opt}`;
        btn.onclick = () => handleSelect(i, btn);
        grid.appendChild(btn);
    });
}

function handleSelect(idx, btn) {
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    btn.dataset.chosen = idx;
    document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").onclick = () => {
    const selected = document.querySelector(".option-btn.selected");
    if (parseInt(selected.dataset.chosen) === questions[currentIndex].correct) {
        score++;
    }

    currentIndex++;
    if (currentIndex < questions.length) {
        initQuiz();
    } else {
        showResults();
    }
};

function showResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.querySelector(".progress-box").classList.add("hidden");
    const resultScreen = document.getElementById("result-screen");
    resultScreen.classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score}/10`;
}

document.getElementById("re-attempt-btn").onclick = () => {

    currentIndex = 0;
    score = 0;


    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.querySelector(".progress-box").classList.remove("hidden");


    initQuiz();
};

initQuiz();