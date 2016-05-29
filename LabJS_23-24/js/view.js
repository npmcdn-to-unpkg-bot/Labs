define(
    'view',
    ['jquery', 'lodash', 'model'],
    function ($, _, model) {
        return {
            View: function (model) {
                var self = this;

                self.renderTasks = function (model) {
                    var tmpl = _.template($('#tasksTemplate').html());
                    var result = tmpl(model);
                    self.elements.tasks.html('');
                    self.elements.tasks.append(result);
                    $('.tasks-accordion').on('click', function () {
                        $('.tasks-panel').removeClass('show');
                        $('.tasks-accordion').removeClass('active');
                        self.elements.title.val('');
                        self.elements.text.val('');
                        model.oldTitle = null;
                        $(this).addClass('active');
                        $(this).next('.tasks-panel').addClass('show');
                    });
                };
                function init() {
                    var tmpl = _.template($('#tasksWrapper').html());
                    var result = tmpl();
                    $('body').append(result);
                    self.elements = {
                        title: $('.edit-title'),
                        text: $('.edit-text'),
                        saveBtn: $('.edit-save'),
                        tasks: $('.tasks')
                    };
                    self.renderTasks(model);
                }
                init();
            }
        };
    });
