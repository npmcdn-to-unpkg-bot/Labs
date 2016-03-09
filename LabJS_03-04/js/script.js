function QuestionBlock (title) {
  this.title = (title.length > 0) ? title : 'No title';
  this.questionCount = 0;
  this.questions = [];

  this.AddQuestion = function (questionText, rightNum ,varList) {
    this.questions[this.questionCount] = new Question(questionText, rightNum, varList);
    this.questionCount++;

    var innerDiv = document.createElement('div');
    innerDiv.className='form-group checkbox col-sm-10 col-sm-offset-1';
    var innerDivTitleHeader = document.createElement('h3');
    var innerDivTitle = document.createTextNode(questionText);

    form.appendChild(innerDiv);
    innerDiv.appendChild(innerDivTitleHeader);
    innerDivTitleHeader.appendChild(innerDivTitle);

    for (var i = 0; i < varList.length; i++) {


      var label = document.createElement('label');
      var labelText = document.createTextNode(varList[i]);
      var br = document.createElement('br');

      var question = document.createElement('input');
      question.setAttribute("type", "checkbox");

      innerDiv.appendChild(label);
      innerDiv.appendChild(br);
      label.appendChild(question);
      label.appendChild(labelText);
    }
  }

  var outsideDiv = document.createElement('div');
  var outsideDivTitleHeader = document.createElement('h1');
  var outsideDivTitle = document.createTextNode(this.title);
  outsideDiv.appendChild(outsideDivTitleHeader);
  outsideDivTitleHeader.appendChild(outsideDivTitle);
  outsideDivTitleHeader.style = 'text-align: center;';
  document.body.appendChild(outsideDiv);

  var form = document.createElement('form');
  outsideDiv.appendChild(form);
  var button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("value", "Проверить мои результаты");
  button.className = "btn btn-primary col-sm-4 col-sm-offset-4";
  button.style = "height: 48px; background-color: #d0e1f1; color: #000; border: 1px black solid;";
  form.parentNode.insertBefore(button, form.nextSibling);
}


function Question (qTitle, rightNum, varList) {
  this.rightNum = rightNum;
  this.qTitle = (qTitle.length > 0) ? qTitle : 'No question title';
  this.variants = [];
  for (var i = 0; i < varList.length; i++) {
    this.variants[i] = varList[i];
  }
}


var qb1 = new QuestionBlock ('Тест по программированию');
qb1.AddQuestion("Вопрос 1", 3, ["Ответ 1", "Ответ 2", "Ответ 3"])
qb1.AddQuestion("Вопрос 2", 3, ["Ответ 1", "Ответ 2", "Ответ 3"])
qb1.AddQuestion("Вопрос 3", 3, ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"])
// console.log(qb1.questionCount);
// console.log(qb1.title);
