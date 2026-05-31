const questions = [
{
id: 1,
text: "나는 하천, 호수, 지하수 등 물 환경의 오염 문제에 관심이 많다.",
types: ["water"],
weight: 1
},

{
id: 2,
text: "오염된 물을 깨끗하게 처리하는 기술에 흥미를 느낀다.",
types: ["water"],
weight: 1
},

{
id: 3,
text: "미세먼지나 온실가스 문제를 보면 원인과 해결책이 궁금해진다.",
types: ["air"],
weight: 1
},

{
id: 4,
text: "대기오염 측정 데이터나 공기질 변화에 관심이 있다.",
types: ["air"],
weight: 1
},

{
id: 5,
text: "폐기물을 자원으로 다시 활용하는 기술이 중요하다고 생각한다.",
types: ["recycle"],
weight: 1
},

{
id: 6,
text: "제품 생산 과정에서 발생하는 폐기물을 줄이는 방법에 관심이 있다.",
types: ["recycle"],
weight: 1
},

{
id: 7,
text: "기업의 환경 성과를 수치화하고 평가하는 과정에 관심이 있다.",
types: ["esg"],
weight: 1
},

{
id: 8,
text: "환경 문제 해결에는 기술뿐 아니라 경영 전략도 중요하다고 생각한다.",
types: ["esg"],
weight: 1
},

{
id: 9,
text: "환경 데이터를 분석해 문제의 원인을 찾는 과정이 흥미롭다.",
types: ["data"],
weight: 1
},

{
id: 10,
text: "AI를 활용해 환경 문제를 예측하고 해결하는 기술에 관심이 있다.",
types: ["data"],
weight: 1
},

{
id: 11,
text: "태양광, 풍력, 수소 등 새로운 에너지 기술을 배우는 것이 흥미롭다.",
types: ["energy"],
weight: 1
},

{
id: 12,
text: "에너지 전환이 미래 환경 문제 해결의 핵심이라고 생각한다.",
types: ["energy"],
weight: 1
},

{
id: 13,
text: "산업 현장에서 발생할 수 있는 위험 요소를 줄이는 일에 관심이 있다.",
types: ["safety"],
weight: 1
},

{
id: 14,
text: "미세플라스틱, 중금속, 화학물질 등이 인간 건강에 미치는 영향을 연구하는 일에 관심이 있다.",
types: ["safety"],
weight: 1
},

{
id: 15,
text: "개발 사업이 자연환경에 미치는 영향을 조사하는 일에 관심이 있다.",
types: ["ecology"],
weight: 1
},

{
id: 16,
text: "훼손된 자연환경을 복원하는 활동에 관심이 있다.",
types: ["ecology"],
weight: 1
},

{
id: 17,
text: "나는 직감보다 데이터와 근거를 바탕으로 문제를 해결하는 편이다.",
types: ["data"],
weight: 1
},

{
id: 18,
text: "나는 환경 문제를 해결할 때 원인 분석을 먼저 하는 편이다.",
types: ["water","air","data"],
weight: 1
},

{
id: 19,
text: "나는 시설 운영보다 정책이나 전략 수립 업무가 더 흥미롭다.",
types: ["esg"],
weight: 1
},

{
id: 20,
text: "나는 환경시설을 직접 운영하고 관리하는 업무가 잘 맞는다.",
types: ["water","air","recycle"],
weight: 1
},

{
id: 21,
text: "나는 새로운 기술을 개발하는 연구 업무에 흥미가 있다.",
types: ["energy","data"],
weight: 1
},

{
id: 22,
text: "나는 규정 준수 여부를 점검하고 관리하는 업무가 잘 맞는다.",
types: ["safety"],
weight: 1
},

{
id: 23,
text: "나는 자연환경을 조사하고 관찰하는 업무를 선호한다.",
types: ["ecology"],
weight: 1
},

{
id: 24,
text: "나는 자원 효율을 높이는 방법을 고민하는 일이 흥미롭다.",
types: ["recycle"],
weight: 1
},

{
id: 25,
text: "환경 문제를 해결하기 위해서는 새로운 환경 기술 개발이 가장 효과적이라고 생각한다.",
types: ["water","air","recycle"],
weight: 0.5
},

{
id: 26,
text: "환경 문제는 정확한 데이터 분석을 통해 해결할 수 있다고 생각한다.",
types: ["data"],
weight: 0.5
},

{
id: 27,
text: "기업의 경영 방식 변화가 환경 문제 해결에 큰 영향을 준다고 생각한다.",
types: ["esg"],
weight: 0.5
},

{
id: 28,
text: "친환경 에너지로의 전환이 환경 문제 해결의 핵심이라고 생각한다.",
types: ["energy"],
weight: 0.5
},

{
id: 29,
text: "환경 분야에서 기술 발전보다 안전관리가 우선되어야 한다고 생각한다.",
types: ["safety"],
weight: 0.5
},

{
id: 30,
text: "자연 생태계를 보호하는 것이 환경 정책의 우선 목표가 되어야 한다고 생각한다.",
types: ["ecology"],
weight: 0.5
}

];
