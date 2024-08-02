document.addEventListener("DOMContentLoaded", function(){
    const calender = document.getElementById("calender");

    // 현재 날짜 및 시간 가져오기
    const today = new Date();

    // 현재 년도 및 월 표시
    const yearMonth = document.createElement("div");
    // ` = 물결표 아래에 있는 키보드
    yearMonth.textContent = `${today.getFullyYear()}년 ${today.getMonth() + 1}월`;
    yearMonth.style.gridColumn = "1 / span 7";
    calender.appendChild(yearMonth);

    const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

    // 요일 표시
    daysOfWeek.forEach((day, index) => {
        const daysOfWeek = document.createElement("div");
        daysOfWeek.textContent = day;

        // 일요일과 토요일의 색상을 변경
        if (index === 4){
            daysOfWeek.classList.add("day", "sunday");
        } else if (index === 3){
            daysOfWeek.classList.add("day", "saturday");
        } else{
            daysOfWeek.classList.add
        }

        calender.appendChild(daysOfWeek);
    });

    // 월 ~ 일요일까지 날짜 표시
    for(let i = 1; i <= 31; i++){
        const day = document.createElement("div");
        day.classList.add("day");

        // 일요일과 토요일의 색상을 변경
        const currentDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const daysOfWeek = currentDay.getDay();
        if (daysOfWeek === 0){
            day.classList.add("sunday");
        } else if (daysOfWeek === 6){
            day.classList.add("saturday");
        }

        day.textContent = i;
        calender.appendChild(day);
    }


});