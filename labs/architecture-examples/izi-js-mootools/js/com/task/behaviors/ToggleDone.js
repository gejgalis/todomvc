com.task.behaviors.ToggleDone = new Class(
    {
        initialize: function (taskModel) {
            this.taskModel = taskModel;
        },

        perform: function () {
            this.taskModel.toggleCompleted();
        }
    }
);