let maxStep = 0;
let scores = [];
let global_symbol = ['+', '-', '*', '/'];
window.onload = function() {
    document.getElementById("start-calculate-game").addEventListener("click", function(){
        let step = 0;
        let nums = [];
        let symbol = [];
        let answer = 0;
        let correct_answer = 0;
        while(true){
            if(step < 5) {
                console.log(222);
                if(answer == correct_answer){
                    console.log(1111);
                    for(let i = 0; i < 2; i++) nums.push(makeRandomNum(30, 0));
                    symbol.push(global_symbol[1]);
                }
                answer = prompt(`${nums[0]} ${symbol[0]} ${nums[1]}`);
            }
            else if(step < 10) {
                if(answer == correct_answer){
                    for(let i = 0; i < 3; i++) nums.push(makeRandomNum(50, 10));
                    for(let i = 0; i < 2; i++) symbol.push(global_symbol[makeRandomNum(2, 0)]);
                }
                answer = prompt(`${nums[0]} ${symbol[0]} ${nums[1]} ${symbol[1]} ${nums[2]}`);
            }
            else if(step < 20) {
                if(answer == correct_answer){
                    for(let i = 0; i < 4; i++) nums.push(makeRandomNum(30, 11));
                    for(let i = 0; i < 3; i++) symbol.push(global_symbol[makeRandomNum(2, 2)]);
                }
                answer = prompt(`${nums[0]} ${symbol[0]} ${nums[1]} ${symbol[1]} ${nums[2]} ${symbol[2]} ${nums[3]}`);
            }
            else if(step < 30) {
                if(answer == correct_answer){
                    for(let i = 0; i < 5; i++) nums.push(makeRandomNum(30, 22));
                    for(let i = 0; i < 4; i++) symbol.push(global_symbol[makeRandomNum(2, 2)]);
                }
                answer = prompt(`${nums[0]} ${symbol[0]} ${nums[1]} ${symbol[1]} ${nums[2]} ${symbol[2]} ${nums[3]} ${symbol[3]} ${nums[4]}`);
            }
            else {
                alert("30 단계까지 완료하였습니다\n 축하드립니다!");
                maxStep = step > maxStep ? step : maxStep;
                scores.push(step);
                break;
            }
            if(answer === 'stop'){
                alert("게임이 끝났습니다.");
                maxStep = step > maxStep ? step : maxStep;
                scores.push(step);
                break;
            }else if(answer % 1 !== 0 || answer === ""){
                alert("0과 양수인 숫자만 입력해주세요.");
                continue;
            }
            correct_answer = nums[0];
            for(let i=1; i<nums.length; i++){
                switch(symbol[i - 1]){
                    case '+':
                        correct_answer += nums[i];
                        break;
                    case '-':
                        correct_answer -= nums[i];
                        break;
                    case '*':
                        correct_answer *= nums[i];
                        break;
                    case '/':
                        correct_answer /= nums[i];
                        break;
                }
            }
            if(correct_answer == answer) {
                step++;
                alert(`1단계 ${step} 정답!`);
                nums = [];
                symbol = [];
            }else{
                alert(`틀렸어요~`);
            }
        }
        render();
    });
    alert("어서오세요.\n아래의 게임 시작 버튼을 눌러 게임을 시작해주세요.\n게임을 끝내고 싶으시면 stop을 입력해주시면 됩니다.");
}

function makeRandomNum(range, min){
    return Math.floor(Math.random() * range) + min;
}

function render(){
    document.getElementById("max-score").innerText = maxStep;

    let allScoresHtml = "";
    for(let i = 0; i < scores.length; i++){
        allScoresHtml += `<li>${i + 1}번째 : ${scores[i]}</li>`;
    }
    document.getElementById("all-scores").innerHTML = allScoresHtml;
}
