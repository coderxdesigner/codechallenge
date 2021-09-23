(function(){
    'use strict';
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

    const quiz = document.getElementById('quiz');
    const jpMenu = document.getElementById('qJump');
    const resulting = document.getElementById('results');
    const button = document.querySelector('#grade');
    const hd = document.getElementById('heading');
    button.addEventListener('submit',grade(quizlet));
 
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
                 <div class="answers">${answers.join('<br>')}</div>
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
        timeStamp();

    }
    function grade(data){

        // gather answer containers from our quiz
        const answerContainers = document.querySelectorAll('.answers');
      
        // keep track of user's answers
        let numCorrect = 0;
      
        // for each question...
        data.forEach( (q, idx) => {
      
          // find selected answer
          const answerContainer = answerContainers[idx];
          const selector = `input[name=question${idx}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          // if answer is correct
          if(userAnswer === q.answerKey){
            // add to the number of correct answers
            numCorrect++;
      
            // color the answers green
            answerContainers[idx].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[idx].style.color = 'red';
          }
        });
      
        // show number of correct answers out of total
        resulting.innerHTML = `${numCorrect} out of ${q.length}`;
      }

   function timeStamp(){
    var dt = new Date();
    document.getElementById('timer').innerHTML = dt;
   }

}())
