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

let mygnb = "";
for (let liea = 0;  liea < nav_data.length; liea++){
    mygnb += nav_data[liea].gnb_li_a_href;
}

console.log(mygnb);


let mygnb2 = "";
for (v in nav_data[1]){ //키는 겹칠 일이 없기 때문에 변수를 쓰지않아도 됨
    mygnb2 += nav_data[1][v];
}
console.log(mygnb2);