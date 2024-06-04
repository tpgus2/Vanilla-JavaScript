import hd_yys from "./navi.json";


window.onload = function () {
    // onload는 화면이 로딩이 끝나면 실행되는 이벤트
    // addEventListener와의 차이를 꼭 기록해둔다!
    // onload 이벤트는 딱 한번 실행된다 주의!!
    // 만약 2번 쓰면 하나만 실행

    let navitag = "";

    for(x in hd_yys.gnb){
        navitag += `<li class = '${hd_yys.gnb[x].cls[0]}'>
        <a href='${hd_yys.gnb[x].href}' class='${hd_yys.gnb[x].cls[1]}'> 
        ${hd_yys.gnb[x].Text}</a>`;

        if(hd_yys.gnb[x].gnb_ul_li.length > 0) {navitag += `<ul class ='${hd_yys.gnb[x].cls[2]}'>`};

        for(j in hd_yys.gnb[x].gnb_ul_li){
            navitag += `<li class = '${hd_yys.gnb[x].cls[3]}'>
            <a href = '${hd_yys.gnb[x].gnb_ul_li[j].href}'>${hd_yys.gnb[x].gnb_ul_li[j].Text}</a>
            </li>`
        }

        if(hd_yys.gnb[x].gnb_ul_li.length > 0) navitag += `</ul>`;
        
        navitag += `</li>`;
    }

    document.querySelector('#gnb').innerHTML = navitag;
}

