com.task.behaviors.RemoveTask = new Class({
        initialize: function (taskModel, listModel) {
            this.taskModel = taskModel;
            this.tasksListModel = listModel;
        },

        perform: function () {
            this.tasksListModel.removeTaskModel(this.taskModel);
        }
    }
);