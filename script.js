let currentQuestion = 0;
let answers = [];

// 유형 점수 저장
let scores = {
  water: 0,
  air: 0,
  recycle: 0,
  esg: 0,
  data: 0,
  energy: 0,
  safety: 0,
  ecology: 0
};

// 유형별 문항 수 계산용
let counts = {
  water: 0,
  air: 0,
  recycle: 0,
  esg: 0,
  data: 0,
  energy: 0,
  safety: 0,
  ecology: 0
};

function startTest() {

  document.querySelector(".container").innerHTML = `
    <h3 id="progress"></h3>
    <h2 id="question-number"></h2>
    <p id="question-text"></p>

    <div id="buttons">
      <button onclick="answerQuestion(1)">1</button>
      <button onclick="answerQuestion(2)">2</button>
      <button onclick="answerQuestion(3)">3</button>
      <button onclick="answerQuestion(4)">4</button>
      <button onclick="answerQuestion(5)">5</button>
    </div>

    <p>
      1 = 전혀 그렇지 않다<br>
      5 = 매우 그렇다
    </p>
  `;

  showQuestion();
}

function showQuestion() {

  document.getElementById("progress").innerText =
    `${currentQuestion + 1} / ${questions.length}`;

  document.getElementById("question-number").innerText =
    `Q${questions[currentQuestion].id}`;

  document.getElementById("question-text").innerText =
    questions[currentQuestion].text;
}

function answerQuestion(value) {

  const q = questions[currentQuestion];

  q.types.forEach(type => {
    scores[type] += value * q.weight;
    counts[type] += 1;
  });

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    calculateResult();
  }
}

function calculateResult() {

  let averages = {};

  for (let type in scores) {
    averages[type] = scores[type] / counts[type];
  }

  let sorted = Object.entries(averages)
    .sort((a, b) => b[1] - a[1]);

  let first = sorted[0];
  let second = sorted[1];

  let resultText = "";

  if ((first[1] - second[1]) < 0.5) {

    resultText =
      getTypeName(first[0]) +
      " - " +
      getTypeName(second[0]) +
      " 융합형";

  } else {

    resultText =
      getTypeName(first[0]);
  }

  document.querySelector(".container").innerHTML = `
    <h1>검사 완료!</h1>

    <h2>${resultText}</h2>

    <p>
      1위 : ${getTypeName(first[0])}
      (${first[1].toFixed(2)})
    </p>

    <p>
      2위 : ${getTypeName(second[0])}
      (${second[1].toFixed(2)})
    </p>

    <button onclick="location.reload()">
      다시 검사하기
    </button>
  `;
}

function getTypeName(type) {

  const names = {
    water: "💧 수질환경형",
    air: "🌫️ 대기환경형",
    recycle: "♻️ 자원순환형",
    esg: "🌎 ESG·환경경영형",
    data: "🤖 환경 데이터·AI형",
    energy: "⚡ 신재생에너지형",
    safety: "🧪 환경보건·안전형",
    ecology: "🌱 생태·보전형"
  };

  return names[type];
}
