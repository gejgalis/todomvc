com.taskslist.behaviors.RetrieveTasks = new Class(
    {
        service: izi.inject("com.taskslist.service.TasksListService"),
        listModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {
            var tasks = this.service.retrieveTasks();
            if (tasks) {
                this.listModel.fromRS(tasks);
            }
        }
    }
);