com.taskslist.behaviors.ToggleClearCompleted = new Class(
    {
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {
            var completedCount = this.tasksListModel.getCompletedCount(),
                button = $("clear-completed");

            if (completedCount === 0) {
                button.hide();
            } else {
                button.show();
            }
        }
    }
);