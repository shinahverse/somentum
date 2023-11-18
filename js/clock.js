/**
 * 화면에 시간을 표시한다.
 */

/**
 * document에 있는 id가 clock인 요소
 */
const clock = document.querySelector("h2#clock");

/**
 * 시간을 구하는 함수
 */
function getClock(){
    
    const date = new Date()
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hour}:${minutes}:${seconds}`;
}

//setInterval() 이 1초 후 시작하므로 처음에 호출을 해 준다.
getClock();
setInterval(getClock, 1000);