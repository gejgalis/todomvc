todo.behaviors.RemoveTask = Class.create(
    {
        init: function (taskModel, listModel) {
            this.taskModel = taskModel;
            this.tasksListModel = listModel;
        },

        perform: function () {
            this.tasksListModel.removeTaskModel(this.taskModel);
        }
    }
);