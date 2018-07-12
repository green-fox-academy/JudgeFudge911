window.onload = () => {
  const score = document.querySelector('.score');
  const question = document.querySelector('.question');
  const answerButtons = document.querySelectorAll('button');
  const buttonsBox = document.querySelector('.buttonsBox');

  const getQuestion = () => {
    fetch('http://localhost:3000/game')
      .then(res => res.json())
      .then(data => {
        renderView(data);
      });
  };

  getQuestion();

  function checkAnswer(e) {
    if (e.target.classList.contains('answer')) {
      e.target.classList.contains('correct')
        ? correctAnswer(e)
        : incorrectAnswer(e);
    }
    buttonsBox.removeEventListener('click', checkAnswer);
    setTimeout(getQuestion, 3000);
  }

  function correctAnswer(e) {
    e.target.classList.add('active');
  }

  function incorrectAnswer(e) {
    e.target.classList.add('missed');
  }

  function renderView(data) {
    buttonsBox.addEventListener('click', checkAnswer);
    question.textContent = data.question;
    let index = 0;
    for (const answer of data.answers) {
      answerButtons[index].classList.remove('correct');
      answerButtons[index].classList.remove('active');
      answerButtons[index].classList.remove('missed');
      answerButtons[index].textContent = answer.answer;
      if (answer.is_correct === 1) {
        answerButtons[index].classList.add('correct');
      }
      index++;
    }
  }
};
