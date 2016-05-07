"use strict";

function Question(qTitle, rightList, varList) {
    this.rightNums = [];
    for (var i = 0; i < rightList.length; i++) {
        this.rightNums[i] = rightList[i];
    }
    this.qTitle = (qTitle.length > 0) ? qTitle : 'No question title';
    this.variants = [];
    for (var i = 0; i < varList.length; i++) {
        this.variants[i] = varList[i];
    }
}

var template = _.template(document.getElementById('QuestionTemplate').innerHTML);
var questions = [];
questions.push( new Question("Вопрос 1", [3], ["Ответ 1", "Ответ 2", "Ответ 3"]),
                new Question("Вопрос 2", [2], ["Ответ 1", "Ответ 2", "Ответ 3"]),
                new Question("Вопрос 3", [3,4], ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"])
);
localStorage.setItem('q', JSON.stringify(questions));
var q = JSON.parse(localStorage.getItem('q'));
var result = template({list: q});
document.write(result);

$('#check').on('click', function () {
    var right = 0;
    for (var i = 0; i < q.length; i++) {
        var question = q[i];
        
        var cQuestion = $('#question-' + i + ' input');
        if ($('#question-' + i + ' input:checked').length != q[i].rightNums.length) {
            continue;
        }
        var fl = 0;
        for (var j = 0; j < cQuestion.length; j++) {
            if (cQuestion[j].checked) {
                if ($.inArray(j + 1, q[i].rightNums) >= 0) {
                    //console.log('Правильный ответ: ', j + 1);
                    fl++;
                } else {
                    //console.log('НЕ Правильный ответ: ', j + 1);
                    fl = 0;
                    break;
                }
            }
        }
        if (fl > 0) {
            right++;
            fl = 0;
        } else {
            fl = 0;
        }
    }
    $('.myModal-body p').text('Вы ответили правильно на ' + Math.round(right / q.length * 100) + ' процентов вопросов');
    //$("#myModal").modal();
    $('#myModal').jMyModal();
});