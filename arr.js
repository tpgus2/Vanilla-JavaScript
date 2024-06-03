// const nav_data = [
//     {
//         gnb_li_a : "회사소개",
//         gnb_li_a_href : "./company.html"
//     },
//     {
//         gnb_li_a : "제품소개",
//         gnb_li_a_href : "./product.html"
//     },
//     {
//         gnb_li_a : "커뮤니티",
//         gnb_li_a_href : "./board.html"
//     }
// ]

// console.log(nav_data[2].gnb_li_a)



//console.log("한번만 실행되지");

// 초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식실행, 아직도 참이라면 실행하고 연산식실행...
// 그러다가 조건이 거짓이 되는 순간 for문 종료

for(var i = 0; i < 5; i++ ){
    //console.log("나는 다섯번 실행되지");
}

let count = 10; 
    count += 100; //110
    count += 1; //111
    ++count; //112
    count++; //112

//console.log(count) //113

let multy = 10;
    multy = multy * 3; // multy *= 3

//문자 연산식 (결합연산만 가능함)

let mystudy = "리액트";
    mystudy = "리액트" + "뷰";  // mystudy += "뷰"

let startjs = 10;
    startjs += "원"; //10원 문자로 변환되어 뒤에 나오는 연산도 숫자가 아닌 문자로 연산. 형변환이 이루어짐
    startjs += 100; //10원100
    startjs += 100; //10원100100

//console.log(multy, mystudy, startjs)

let meg = "";
for(let i = 0; i < 10; i++){
    meg += "나 \"열번\" 나오게 해줘 \n"; // 줄바꿈해주는 \n
}

//console.log(meg)


const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_a_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_a_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_a_href : "./board.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_a_href : "./intro.html"
    }
]

// 오브젝트 접근법
//console.log(nav_data[1].gnb_li_a_href);
// /console.log(nav_data[1]["gnb_li_a_href"]); //★★오브젝트를 어레이화 시켜 같은 값이 나옴. 리액트에서 쓰는 표현

let mygnb = "";
for (let liea = 0;  liea < nav_data.length; liea++){
    mygnb += nav_data[liea].gnb_li_a_href;
}
//console.log(mygnb);


let mygnb2 = "";
for (let li in nav_data){
    mygnb2 += nav_data[li]["gnb_li_a"]+"\n"+nav_data[li]["gnb_li_a_href"]+"\n";
}
console.log(mygnb2)



//document.getElementsByClassName("gnb").length;
//document.querySelectorAll(".gnb").length; 
//document은 html이 있어야 실행이되기때문에 자바스크립트 파일에서는 에러가 뜨는 것