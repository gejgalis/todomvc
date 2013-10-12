todo.behaviors.ToggleClearCompleted = Class.create(
    {
        tasksListModel: izi.inject("todo.models.TasksListModel"),

        perform: function () {
            var completedCount = this.tasksListModel.getCompletedCount(),
                button = $("#clear-completed");

            if (completedCount === 0) {
                button.hide();
            } else {
                button.show();
            }
        }
    }
);