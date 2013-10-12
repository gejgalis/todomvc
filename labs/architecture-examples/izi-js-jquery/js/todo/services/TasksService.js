todo.services.TasksService = Class.create(
    {
        localStorage: izi.inject("todo.services.LocalStorageService"),

        retrieveTasks: function () {
            return this.localStorage.getItem("tasks");
        },

        saveTasks: function (tasks) {
            this.localStorage.setItem("tasks", tasks);
        }
    }
);