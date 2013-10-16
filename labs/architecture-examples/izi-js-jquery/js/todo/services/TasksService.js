todo.services.TasksService = Class.create(
    {
        localStorage: izi.inject("todo.services.LocalStorageService"),

        init: function () {
            this.retrieveTasks = $.proxy(this.retrieveTasks, this);
            this.saveTasks = $.proxy(this.saveTasks, this);
        },

        retrieveTasks: function () {
            return this.localStorage.getItem("tasks");
        },

        saveTasks: function (tasks) {
            this.localStorage.setItem("tasks", tasks);
        }
    }
);