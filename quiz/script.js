function showOptions(questionNumber) {
    
    const options = document.querySelectorAll('.options');
    options.forEach(option => option.classList.add('hidden'));

    const selectedOptions = document.getElementById(options${questionNumber});
    selectedOptions.classList.remove('hidden');
}

function checkAnswer(questionNumber) {
    const correctAnswer = 'option2';

    const selectedOption = document.querySelector(input[name="q${questionNumber}"]:checked);

    if (selectedOption && selectedOption.value === correctAnswer) {
        window.location.href = 'congratulations.html';
    } else {
        window.location.href = 'sorry.html';
    }
}