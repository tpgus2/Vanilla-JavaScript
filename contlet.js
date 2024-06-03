// let study = "프론트앤드";

// const myword = "그래 나도 한번 " + study + " 해보자!"; 아래와 동일하게 나옴
// const myword = `그래 나도 한번 ${study} 해보자!`;
// console.log(myword);

let _month = [2, 3, 7, 9];
let _study = ['피그마', '뷰', '리액트', 'css']; //집합체를 만들고 순서대로 나열하면 0,1,2,3 등으로 사용
let _name = ['홍길동', '나훈아', "세현", '아무개'];

const introduce0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]}입니다.`;
const introduce1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]}입니다.`;
const introduce2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]}입니다.`;

// console.log(introduce0, introduce1, introduce2);

// for (let i = 0; i < _study.length; i++) {
//     const introduce =` 저는 ${_month[i]}개월 간의 ${_study[i]} 공부를 한 ${_name[i]}입니다.`
//     console.log(introduce)
// }

// _study 배열의 길이: _study.length _study 배열에 있는 요소의 개수. 
// _study 배열이 [2, 3, 7, 9]이면, 이 배열의 길이(length)는 4.

// i 변수: for문에서 사용하는 반복 제어 변수. 
// i는 0에서 시작하여 루프가 한 번 실행될 때마다 1씩 증가합니다 (i++).

// 조건 i < _study.length
// : 이 조건은 i가 _study 배열의 길이보다 작을 때만 for문을 반복 실행하겠다는 의미. 
// 배열의 길이가 3이므로 i가 0, 1, 2, 3일 때는 조건이 참(True). 
// 그러나 i가 4가 되면 조건이 거짓(False)이 되어 루프가 종료됨

const myarr = [
    ["네이버", "http://www.naver.com"], 
    ["다음", "http://www.daum.net"],
    ["구글", "http://www.goolge.com"]
];

console.log("첫번째 배열", myarr[0], typeof myarr[0], 
            "첫번째 배열의 첫번째 값", myarr[0][0],  typeof myarr[0][0])

console.log(`<a href='${myarr[0][1]}'> ${myarr[0][0]} </a>`)
console.log(`<a href='${myarr[1][1]}'> ${myarr[1][0]} </a>`)
console.log(`<a href='${myarr[2][1]}'> ${myarr[2][0]} </a>`)


const myarrobj = {
    _month : [2, 3, 7, 9], 
    _study : ['피그마', '뷰', '리액트', 'css'],
    _name : ['홍길동', '나훈아', "세현", '아무개']
}

console.log(myarrobj._name[0])


const gnb = {
    d1:{
        text : "회사소개",
        href : "./company.html"
    },

    d2:[
        {
        text : "ceo인삿말",
        href : "./ceo.html"
    },
    {
        text : "조직도",
        href : "./organ.html"
    },
    ] 
}

console.log(`<a href="${gnb.d1.href}">${gnb.d1.text}</a>`)
console.log(`<a href="${gnb.d2[0].href}"> ${gnb.d2[0].text}</a>`)


const dog = {
    _name : {text:"짱구"},
    _kind:["강아지","고양이"],
    _age:8,
    _color: "흰색",
    _acting: function(){
        // return "빵을 하면 배를 까고 벌러덩 눕는다.";
         console.log("빵을 하면 배를 까고 벌러덩 눕는다.");
    }
}

// console.log(`나의 펫은 ${dog._name.text}이고 ${dog._acting()}`)

console.log(`나의 ${dog._kind[0]}의 이름은 ${dog._name.text}이고 ${dog._color}이며`)
dog._acting()



{/* <p class=''> 
<a href='' class=''>네비바</a> 
</p> */}