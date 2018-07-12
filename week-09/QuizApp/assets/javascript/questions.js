window.onload = () => {
  const questionContainer = document.querySelector('.questionsContainer');
  const form = document.querySelector('form');

  form.addEventListener('submit', submitForm);
  questionContainer.addEventListener('click', deleteQuestion);

  fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => renderQuestions(data));

  function renderQuestions(data) {
    for (const question of data) {
      let questionCard = document.createElement('div');
      let currQuestion = document.createElement('p');
      currQuestion.textContent = question.question;
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'DELETE';
      questionCard.classList.add('questionCard');
      questionCard.appendChild(currQuestion);
      questionCard.appendChild(deleteButton);
      questionCard.id = question.id;
      questionContainer.appendChild(questionCard);
    }
  }

  function deleteQuestion(e) {
    if (e.target.tagName.toLowerCase() === 'button') {
      removeFromDatabase(e.target.parentNode.id);
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  }

  function removeFromDatabase(id) {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: 'DELETE'
    });
  }

  function submitForm(e) {
    e.preventDefault();
    let data = {
      question: form[0].value,
      answer1: {
        answer: form[1].value,
        is_correct: (form[2].checked === false) ? 0 : 1
      },
      answer2: {
        answer: form[3].value,
        is_correct: (form[4].checked === false) ? 0 : 1
      },
      answer3: {
        answer: form[5].value,
        is_correct: (form[6].checked === false) ? 0 : 1
      },
      answer4: {
        answer: form[7].value,
        is_correct: (form[8].checked === false) ? 0 : 1
      }
    };
    // for (const input of form) {
    //     if(input.type !== "submit"){

    //     }
    // }
    console.log(data);
    fetch('http://localhost:3000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
};
