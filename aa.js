const hd_sh = {
    gnb : [
        {
        text : "펫시터가 와요",
        href : "/petopia/petsitter.html",
        gnb_ul_li : [
            {
                text : "방문 돌봄",
                href : "/petopia/homecare.html"
            },
            {
                text : "집중 호스피스",
                href : "/petopia/pethos.html"
            },
            {
                text : "펫 플래닛",
                href : "/petopia/petplan.html"
            },            {
                text : "웨딩케어",
                href : "/petopia/petwedding.html"
            },
            {
                text : "안심 픽업 & 드랍",
                href : "/petopia/petpick.html"
            },
        ]
        },
        {
        text : "훈련사", 
        href : "/petopia/petrainer.html",
        gnb_ul_li : [
        {
            text : "훈련사 소개",
            href : "/petopia/whopetrainer.html"
        },
        {
            text : "훈련사에게 물어봐",
            href : "/petopia/qnapetrainer.html"
        }
        ]
        }, 
        {
        text : "플레이스",
        href : "/petopia/petplace.html",
        gnb_ul_li :[
            {
                text : "입점 문의",
                href : "/petopia/askpartnership.html"
            },
            {
                text : "매장 찾기",
                href : "/petopia/findshop.html"
            }

        ]
        },
        {
        text : "사회공헌",
        href : "/petopia/petsocial.html",
        gnb_ul_li : [
            {
                text : "봉사활동",
                href : "/petopia/volunteer.html"
            },
            {
                text : "지식나눔",
                href : "/petopia/sharing.html"
            },
            {
                text : "심리상담",
                href : "/petopia/mindcare.html"
            }
        ]
        },
    {
        text : "커뮤니티",
        href : "/petopia/community.html",
        gnb_ul_li : [
            {
            text : "실시간 후기",
            href : "/petopia/sharing.html"
        },
        {
            text : "구독 서비스",
            href : "/petopia/subscription.html"
        },
        ]
    },
    {
        text : "펫트너",
        href : "/petopia/Pettner.html",
        gnb_ul_li : [
            {
                text : "펫시터 지원",
                href : "/petopia/petsitterapply.html"
            },
            {
                text : "훈련사 지원",
                href : "/petopia/pettrainerapply.html"
            },
            {
                text : "산책케어 지원",
                href : "/petopia/petwalkapply.html"
            }
        ]
    }
]
}

let navi = "";
for (v in hd_sh.gnb) {
    navi += `<li>
    <a href ='${hd_sh.gnb[v].href}'> ${hd_sh.gnb[v].text}</a>`

    navi += `<ul>`

    for(a in hd_sh.gnb[v].gnb_ul_li){
        navi += `<li>
        <a href = '${hd_sh.gnb[v].gnb_ul_li[a].href}'>${hd_sh.gnb[v].gnb_ul_li[a].text}</a>`
    }

    navi += `</ul>`
    navi += `</li>`
}

document.querySelector('#gnb').innerHTML = navi;