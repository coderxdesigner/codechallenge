(function(){
    'use strict';
    // data used for the test
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
    // variables to add to the dom
    const quiz = document.getElementById('quiz');
    const btn = document.getElementById('grade');
    const hd = document.getElementById('heading');
    // kicks off the grading process
    btn.addEventListener("click", function() { grade(quizlet); }, false);
    // draws the quiz
    createQuiz(quizlet);
    function createQuiz(data){
        const output = [];
        data.forEach((q,idx) => {
            let ct = idx+1;
            const answers = [];
            for (var letter in q.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${idx}" id="question${idx}" value="${letter}">
                        ${q.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question" id="jp-${idx}">${ct}.  ${q.question}</div>
                <div class="answers">${answers.join('<br>')}</div>
                <div class="alert">${q.alrtErr}</div>`
            );
            hd.innerHTML = q.subject;
        });
        quiz.innerHTML = output.join('');
        // creates a side menu to jump to sections
        createJump(data);
    }
    function createJump(data) {
        const links = [];
        data.forEach((q,idx) => {
            let ct = idx+1;
            links.push(
                `<li><a title="${q.question}" href="#jp-${idx}">Question ${ct}</a></li>`
            );
        });
        qJump.innerHTML = links.join('');
        // adds a timestap to the page
        timeStamp();
    }
    // checks the radio buttons to grade the page
    function grade(data){
        const resulting = document.getElementById('resulting');
        const answerContainers = document.querySelectorAll('.answers');
        let correct = 0;
        data.forEach( (q, idx) => {let ct = 1;
            const answerWrapper = answerContainers[idx];
            const questions = `#jp-${idx}`;
            const qst = document.querySelector(questions)
            const selector = `input[id=question${idx}]:checked`;
            const userAnswer = (answerWrapper.querySelector(selector) || {}).value;
            //correct answers
            if (userAnswer === q.answerKey){
                correct++;
                qst.classList.add('correct');
              }
            // incorrect answers
            else {
                qst.classList.add('wrong');
                let alts = qst.nextElementSibling.nextElementSibling;
                alts.classList.add('active');
            }
        });
        const dt = new Date();
        const final = correct*20;
        document.getElementById('complete').innerHTML = `<div><strong>Time completed:</strong><br> ${dt}</div>`;
        resulting.innerHTML = `<strong>Final Grade: ${final}%</strong>`;
    }
// when page first loads
   function timeStamp(){
        const dt = new Date();
        document.getElementById('timer').innerHTML = dt;
   }

}())
