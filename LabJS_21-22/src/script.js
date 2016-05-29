"use strict";
(function ($) {
    function Question(qTitle = 'No question title', rightList, varList) {
        this.rightNums = [];
        for (var i = 0; i < rightList.length; i++) {
            this.rightNums[i] = rightList[i];
        }
        this.qTitle = qTitle;
        this.variants = [];
        for (var i = 0; i < varList.length; i++) {
            this.variants[i] = varList[i];
        }
    }

    var template = _.template(document.getElementById('QuestionTemplate').innerHTML);
    var questions = [];
    questions.push(new Question("Вопрос 1", [3], ["Ответ 1", "Ответ 2", "Ответ 3"]),
        new Question("Вопрос 2", [2], ["Ответ 1", "Ответ 2", "Ответ 3"]),
        new Question("Вопрос 3", [3, 4], ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"])
    );
    localStorage.setItem('q', JSON.stringify(questions));
    var q = JSON.parse(localStorage.getItem('q'));
    var result = template({
        list: q
    });
    document.write(result);

    $('#check').on('click', checkResults);

    function checkResults() {
        var right = 0;
        var i = 0;
        for (let question of q) {
            //var question = question;

            var cQuestion = $(`#question-${i} input`);
            // console.log('cQuestion', cQuestion);
            cQuestion[Symbol.iterator] = function () {
                var _this = this;
                var keys = null;
                var index = 0;

                return {
                    next: function () {
                        if (keys === null) {
                            keys = Object.keys(_this);
                        }

                        return {
                            value: _this[keys[index]],
                            done: index++ >= keys.length
                        };
                    }
                }
            }
            if ($('#question-' + i + ' input:checked').length != question.rightNums.length) {
                continue;
            }
            var fl = 0;
            var j = 0;
            for (let curQuestion of cQuestion) {
                // console.log('curQuestion', curQuestion);
                if (curQuestion.checked) {
                    if ($.inArray(j + 1, question.rightNums) >= 0) {
                        //console.log('Правильный ответ: ', j + 1);
                        fl++;
                    } else {
                        //console.log('НЕ Правильный ответ: ', j + 1);
                        fl = 0;
                        break;
                    }
                }
                j++;
            }
            if (fl > 0) {
                right++;
                fl = 0;
            } else {
                fl = 0;
            }
            i++;
        };
        $('.myModal-body p').text(`Вы ответили правильно на ${Math.round(right / q.length * 100)} процентов вопросов`);
        $('#myModal').jMyModal();
    }
} (jQuery)); 