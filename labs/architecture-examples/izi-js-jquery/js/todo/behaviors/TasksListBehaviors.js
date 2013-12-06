todo.behaviors.TasksListBehaviors = Class.create(
    {
        service: izi.inject("todo.services.TasksService"),
        listModel: izi.inject("todo.models.TasksListModel"),

        init: function () {
            this.retrieveTasks = $.proxy(this.retrieveTasks, this);
            this.saveTasks = $.proxy(this.saveTasks, this);
        },

        retrieveTasks: function () {
            var tasks = this.service.retrieveTasks();
            if (tasks) {
                this.listModel.fromRS(tasks);
            }
        },

        saveTasks: function () {
            this.service.saveTasks(this.listModel.toRQ());
        }
    }
);