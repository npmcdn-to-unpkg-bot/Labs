define('controller',
    ['jquery', 'model', 'view'],
    function ($, model, view) {
        'use strict';
        return {
            Controller: function (model, view) {
                view.elements.saveBtn.on('click', addTask);
                view.elements.tasks.on('click', '.tasks-delete', deleteTask);
                view.elements.tasks.on('click', '.tasks-edit', editTask);

                function addTask() {
                    var newTask = { title: view.elements.title.val(), text: view.elements.text.val() };
                    if (model.oldTitle) {
                        model.editTask(newTask.title, newTask.text);
                        view.renderTasks(model);
                        view.elements.title.val('');
                        view.elements.text.val('');
                        return;
                    }
                    model.addItem(newTask);
                    view.elements.title.val('');
                    view.elements.text.val('');

                    view.renderTasks(model);
                }

                function deleteTask() {
                    var item = $(this).parent().prev().text();
                    model.removeTask(item);
                    view.renderTasks(model);
                }

                function editTask() {
                    var itemTitile = $(this).parent().prev().text();
                    var itemText = $(this).closest('.tasks-accordion').next().children().text();
                    model.oldTitle = itemTitile;
                    view.elements.title.val(itemTitile);
                    view.elements.text.val(itemText);
                }
            }
        };
    });

