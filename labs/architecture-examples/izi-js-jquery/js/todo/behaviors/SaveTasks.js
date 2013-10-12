todo.behaviors.SaveTasks = Class.create(
    {
        service: izi.inject("todo.services.TasksService"),
        listModel: izi.inject("todo.models.TasksListModel"),

        perform: function () {
            this.service.saveTasks(this.listModel.toRQ());
        }
    }
);