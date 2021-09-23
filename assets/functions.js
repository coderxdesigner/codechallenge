(function(){
    'use strict';
    const quiz = document.getElementById('quiz');
    const resulting = document.getElementById('results');
    const button = document.querySelector('#grade');
    button.addEventListener('submit',grade);
    const quizlet = [
        {
          question: "How many questions are on this quiz?",
          answers: {
            a: "None of these answers",
            b: "There are three questions",
            c: "There is one question",
            d: "There are five questions"
          },
          answerKey: "d",
          display: true,
          subject: "Life Science",
          alrtErr: "The answer you selected is incorrect.  Please go back and review the number of questions."
        },
        {
          question: "Is today Friday?",
          answers: {
            a: "Yes",
            b: "No",
            c: "Today is Tuesday",
            d: "None of these"
          },
          answerKey: "a",
          display: true,
          subject: "Life Science",
          alrtErr: "The answer you selected is incorrect, you may want to check your calendar."
        },
        {
          question: "Which season is the best?",
          answers: {
            a: "Winter",
            b: "Spring",
            c: "Summer",
            d: "Fall"
          },
          answerKey: "c",
          display: true,
          subject: "Life Science",
          alrtErr: "Incorrect, please go back and review the seasons."
      
        },
        {
          question: "What is the best dessert?",
          answers: {
            a: "Brownies",
            b: "Cheesecake",
            c: "Ice cream",
            d: "Cupcakes"
          },
          answerKey: "a",
          display: true,
          subject: "Life Science",
          alrtErr: "Incorrect, please find your nearest bakery and have some dessert."
      
        },
        {
            question: "What is the answer to the answer?",
            answers: {
              a: "Brownies",
              b: "Cheesecake",
              c: "Ice cream",
              d: "Cupcakes"
            },
            answerKey: "c",
            display: true,
            subject: "Life Science",
            alrtErr: "Incorrect, please find your nearest bakery and have some dessert."
        
          }
      ];
    createQuiz(quizlet);
    function createQuiz(data){
        const output = [];
        data.forEach((q,idx) => {
            let ct = idx+1;
            const answers = [];
        

            for (var letter in q.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${idx}" value="${letter}">
                        ${q.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question data-target="jp-${ct}">${ct}.  ${q.question}</div>
                 <div class="answer">${answers.join('<br>')}</div>
                 <div class="alert">${q.alrtErr}</div>`
            );
            
        });
        quiz.innerHTML = output.join('');

    }
    function grade(){

    }
}())
