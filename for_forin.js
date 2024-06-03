const yo = ["월", "화", "수", "목", "금", "토", "일"];

let count = "";

for (var i = 0; i < 5; i++){

    count += `${i}주 \n`;

    for(j in yo){
        count += `${yo[j]}요일`;
    }

    count += `${j}주 마침 \n`;
    
}

console.log(count)