todo.utils.TaskFinder = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        findTaskModel: function (elementOfTaskView) {
            var taskView = this.findTaskView(elementOfTaskView);
            return this.model.findById(taskView.data("id"));
        },

        findTaskView: function (elementOfTaskView) {
            return $(elementOfTaskView).closest(".task");
        }
    }
);
