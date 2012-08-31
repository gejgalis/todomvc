com.taskslist.behaviors.SaveTasks = new Class(
    {
        service: izi.inject("com.taskslist.service.TasksListService"),
        listModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {
            this.service.saveTasks(this.listModel.toRQ());
        }
    }
);