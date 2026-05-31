let currentQuestion = 0;
let answers = [];

let resultHTML = "";

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

<div class="progress-bar">
  <div class="progress-fill" id="progress-fill"></div>
</div>

<div class="top-bar">

<h3 id="progress"></h3>

<div class="question-header">

  <button class="back-btn" onclick="goBack()">
    ← 이전
  </button>

  <h2 id="question-number"></h2>

</div>

<p id="question-text"></p>

<div id="buttons">
<div id="buttons">

  <button onclick="answerQuestion(1)">1</button>
  <button onclick="answerQuestion(2)">2</button>
  <button onclick="answerQuestion(3)">3</button>
  <button onclick="answerQuestion(4)">4</button>
  <button onclick="answerQuestion(5)">5</button>

</div>

<div class="likert-guide">

  <span>① 전혀 그렇지 않다</span>
  <span>② 그렇지 않다</span>
  <span>③ 보통이다</span>
  <span>④ 그렇다</span>
  <span>⑤ 매우 그렇다</span>

</div>
  `;

  showQuestion();
}

function showQuestion() {

  document.getElementById("progress").innerText =
    `${currentQuestion + 1} / ${questions.length}`;

const percent =
((currentQuestion + 1) / questions.length) * 100;

document.getElementById("progress-fill").style.width =
`${percent}%`;

document.getElementById("progress-fill").style.width =
`${percent}%`;
  document.getElementById("question-number").innerText =
    `Q${questions[currentQuestion].id}`;

  document.getElementById("question-text").innerText =
    questions[currentQuestion].text;
}

function answerQuestion(value) {

answers.push(value);
  
  const q = questions[currentQuestion];

  q.types.forEach(type => {
    scores[type] += value * q.weight;
    counts[type] += 1;
  });

  currentQuestion++;

if (currentQuestion < questions.length) {

  showQuestion();

} else {

  showLoading();
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
  let third = sorted[2];
  
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

  let mainType = first[0];
let data = resultData[mainType];

resultHTML = `
<h1>${resultText}</h1>
<p>${data.description}</p>

<hr>

<h3>💼 추천 직무</h3>
<ul>
${data.jobs.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>🏢 추천 공기업·공공기관</h3>
<ul>
${data.publics.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>🏭 추천 사기업</h3>
<ul>
${data.companies.map(item => `<li>${item}</li>`).join("")}
</ul>

<h3>📜 추천 자격증</h3>
<ul>
${data.licenses.map(item => `<li>${item}</li>`).join("")}
</ul>

<hr>

<h3>🏆 나의 상위 유형</h3>

<p>
🥇 ${getTypeName(first[0])}
(${first[1].toFixed(2)})
</p>

<p>
🥈 ${getTypeName(second[0])}
(${second[1].toFixed(2)})
</p>

<p>
🥉 ${getTypeName(third[0])}
(${third[1].toFixed(2)})
</p>

<button onclick="showScores()">
📊 내 점수 보기
</button>

<button onclick="location.reload()">
🔄 다시 검사하기
</button>

`;
  document.querySelector(".container").innerHTML =
resultHTML;
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

function goBack() {

  if (currentQuestion === 0) {
    return;
  }

  currentQuestion--;

  let previousAnswer = answers.pop();

  const q = questions[currentQuestion];

  q.types.forEach(type => {

    scores[type] -= previousAnswer * q.weight;

    counts[type] -= 1;

  });

  showQuestion();
}

function showScores() {

  let averages = {};

  for(let type in scores){
    averages[type] =
      (scores[type] / counts[type]).toFixed(2);
  }

  // 점수 높은 순 정렬
  let sorted = Object.entries(averages)
    .sort((a, b) => b[1] - a[1]);

  let html = "<h2>📊 유형별 점수</h2>";

  sorted.forEach(item => {

    html += `
      <p>
      ${getTypeName(item[0])}
      : ${item[1]}
      </p>
    `;
  });

  html += `
    <br>

    <button onclick="showResult()">
      ⬅ 결과 화면으로 돌아가기
    </button>

    <button onclick="location.reload()">
      🔄 다시 검사하기
    </button>
  `;

  document.querySelector(".container").innerHTML = html;
}

function showResult() {

  document.querySelector(".container").innerHTML =
    resultHTML;
}

function showLoading() {

  document.querySelector(".container").innerHTML = `

    <h1>🔍 결과 분석 중...</h1>

    <p>
      나에게 가장 적합한 환경공학 분야를 찾고 있습니다.
    </p>

    <p>
      잠시만 기다려 주세요.
    </p>

  `;

  setTimeout(() => {

    calculateResult();

  }, 2000);

}
