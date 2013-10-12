todo.behaviors.TaskBehaviors = Class.create(
    {
        /**
         * @type {todo.models.TasksListModel}
         */
        listModel: izi.inject("todo.models.TasksListModel"),

        /**
         * @type {todo.utils.TaskFinder}
         */
        taskFinder: izi.inject("todo.utils.TaskFinder"),

        removeTask: function (event) {
            this.listModel.removeTaskModel(this._getTaskModel(event));
        },

        startEditingTask: function (event) {
            var taskView = this._getTaskView(event),
                model = this._getTaskModel(event);

            taskView.addClass("editing");
            taskView.find(".edit").selectRange(0, model.title().length);
        },

        endEditingTask: function (event) {
            var taskView = this._getTaskView(event),
                model = this._getTaskModel(event),
                editor = taskView.find(".edit"),
                enteredTitle = todo.utils.text.trim(editor.val());

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
            return this.taskFinder.find(event.target);
        },

        /**
         * @param {Object} event
         * @returns {jQuery}
         * @private
         */
        _getTaskView: function (event) {
            return this.taskFinder.getTaskView(event.target);
        }
    }
);
