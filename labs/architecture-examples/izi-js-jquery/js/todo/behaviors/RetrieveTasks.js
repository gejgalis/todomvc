todo.behaviors.RetrieveTasks = Class.create(
    {
        service: izi.inject("todo.services.TasksService"),
        listModel: izi.inject("todo.models.TasksListModel"),

        perform: function () {
            var tasks = this.service.retrieveTasks();
            if (tasks) {
                this.listModel.fromRS(tasks);
            }
        }
    }
);