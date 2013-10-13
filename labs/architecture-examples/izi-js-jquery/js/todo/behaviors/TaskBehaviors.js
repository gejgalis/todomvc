todo.behaviors.TaskBehaviors = Class.create(
    {
        /**
         * @type {todo.models.TasksListModel}
         */
        model: izi.inject("todo.models.TasksListModel"),

        /**
         * @type {todo.utils.TaskFinder}
         */
        taskFinder: izi.inject("todo.utils.TaskFinder"),

        removeTask: function (event) {
            this.model.removeTask(this._getTaskModel(event));
        },

        startEditingTask: function (event) {
            var taskView = this._getTaskView(event),
                editor = taskView.find(".edit");

            taskView.addClass("editing");
            editor.selectRange(0, editor.val().length);
        },

        endEditingTask: function (event) {
            var taskView = this._getTaskView(event),
                model = this._getTaskModel(event),
                editor = taskView.find(".edit"),
                enteredTitle = $.trim(editor.val());

            if (enteredTitle === "") {
                this.removeTask(event);
            } else {
                model.title(enteredTitle);
            }
        },

        toggleCompleted: function (event) {
            this._getTaskModel(event).toggleCompleted();
        },

        /**
         * @param {Object} event
         * @returns {todo.models.TaskModel}
         * @private
         */
        _getTaskModel: function (event) {
            return this.taskFinder.findTaskModel(event.target);
        },

        /**
         * @param {Object} event
         * @returns {jQuery}
         * @private
         */
        _getTaskView: function (event) {
            return this.taskFinder.findTaskView(event.target);
        }
    }
);
