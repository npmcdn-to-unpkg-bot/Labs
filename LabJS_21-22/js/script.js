"use strict";

(function ($) {
    function Question() {
        var qTitle = arguments.length <= 0 || arguments[0] === undefined ? 'No question title' : arguments[0];
        var rightList = arguments[1];
        var varList = arguments[2];

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
    questions.push(new Question("Вопрос 1", [3], ["Ответ 1", "Ответ 2", "Ответ 3"]), new Question("Вопрос 2", [2], ["Ответ 1", "Ответ 2", "Ответ 3"]), new Question("Вопрос 3", [3, 4], ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4"]));
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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = q[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var question = _step.value;

                //var question = question;

                var cQuestion = $('#question-' + i + ' input');
                // console.log('cQuestion', cQuestion);
                cQuestion[Symbol.iterator] = function () {
                    var _this = this;
                    var keys = null;
                    var index = 0;

                    return {
                        next: function next() {
                            if (keys === null) {
                                keys = Object.keys(_this);
                            }

                            return {
                                value: _this[keys[index]],
                                done: index++ >= keys.length
                            };
                        }
                    };
                };
                if ($('#question-' + i + ' input:checked').length != question.rightNums.length) {
                    continue;
                }
                var fl = 0;
                var j = 0;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = cQuestion[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var curQuestion = _step2.value;

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
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (fl > 0) {
                    right++;
                    fl = 0;
                } else {
                    fl = 0;
                }
                i++;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        ;
        $('.myModal-body p').text('Вы ответили правильно на ' + Math.round(right / q.length * 100) + ' процентов вопросов');
        $('#myModal').jMyModal();
    }
})(jQuery);
