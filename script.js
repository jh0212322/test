document.getElementById('generateButton').addEventListener('click', function() {
    const { numbers, bonus } = generateLottoNumbers();
    document.getElementById('lottoNumbers').innerText = numbers.join(', ');
    document.getElementById('bonusNumber').innerText = `보너스 번호: ${bonus}`;
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1; // 1부터 45까지의 숫자
        numbers.add(randomNumber);
    }
    
    // 보너스 번호 생성
    let bonus;
    do {
        bonus = Math.floor(Math.random() * 45) + 1; // 1부터 45까지의 숫자
    } while (numbers.has(bonus)); // 메인 번호와 중복되지 않도록

    return {
        numbers: Array.from(numbers).sort((a, b) => a - b), // 정렬하여 반환
        bonus
    };
}