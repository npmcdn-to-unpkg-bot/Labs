define(
    'model',
    ['jquery', 'lodash'],
    function ($, _) {
        'use strict';
        return {
            Model: function (tasks) {
                var self = this;
                self.data = tasks;
                var oldTitle;

                self.addItem = function (task) {
                    if (task.title.length === 0) {
                        return;
                    }

                    self.data.push(task);
                    return self.data;
                };

                self.removeTask = function (task) {
                    var index = _.findIndex(self.data, function (o) { return o.title == task; });
                    if (index === -1) {
                        return;
                    }
                    self.data.splice(index, 1);
                    return self.data;
                };

                self.editTask = function (title, text) {
                    var index = _.findIndex(self.data, function (o) { return o.title == self.oldTitle; });
                    self.data[index].title = title;
                    self.data[index].text = text;
                    self.oldTitle = null;
                    return self.data;
                };
            }
        };
    });

