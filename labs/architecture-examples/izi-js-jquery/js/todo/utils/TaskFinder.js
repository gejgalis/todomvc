todo.utils.TaskFinder = Class.create(
    {
        listModel: izi.inject("todo.models.TasksListModel"),

        find: function (elementOfTaskView) {
            var taskView = this.getTaskView(elementOfTaskView);
            return this.listModel.findById(taskView.data("id"));
        },

        getTaskView: function (elementOfTaskView) {
            return $(elementOfTaskView).closest("li");
        }
    }
);
