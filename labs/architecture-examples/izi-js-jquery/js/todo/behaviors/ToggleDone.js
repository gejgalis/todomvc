todo.behaviors.ToggleDone = Class.create(
    {
        init: function (taskModel) {
            this.taskModel = taskModel;
        },

        perform: function () {
            this.taskModel.toggleCompleted();
        }
    }
);