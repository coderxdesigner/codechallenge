(function(){
    'use strict';
    const quiz = document.getElementById('quiz');
    const jpMenu = document.getElementById('qJump');
    const resulting = document.getElementById('results');
    const button = document.querySelector('#grade');
    const hd = document.getElementById('heading');
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
                `<div class="question" id="jp-${ct}">${ct}.  ${q.question}</div>
                 <div class="answer">${answers.join('<br>')}</div>
                 <div class="alert">${q.alrtErr}</div>`
            );
            hd.innerHTML = q.subject;

        });
        quiz.innerHTML = output.join('');
        createJump(data);
    }
    function createJump(data) {
        const links = [];
        data.forEach((q,idx) => {
            let ct = idx+1;
            links.push(
                `<li><a title="${q.question}" href="#jp-${ct}">Question ${ct}</a></li>`
            );

        });
        qJump.innerHTML = links.join('');

    }
    function grade(){

    }

    window.onload = function() {
        const startTimer = document.getElementById('timer');
        var incrementSecond = function () {
          window.secondsPassed += 1;
          startTimer.innerHTML = window.secondsPassed;
        }
      
        window.secondsPassed = 0;
        window.myTimer = setInterval(incrementSecond, 1000);
      }
      var onSubmitClick = function() {
        window.clearInterval(window.myTimer); // always clean resources
        // call some other function to do the submit
      }
 

}())
