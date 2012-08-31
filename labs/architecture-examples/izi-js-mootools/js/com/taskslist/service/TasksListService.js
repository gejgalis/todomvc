com.taskslist.service.TasksListService = new Class(
    {
        service: izi.inject("com.utils.LocalStorageService"),

        retrieveTasks: function () {
            return this.service.getItem("tasks");
        },

        saveTasks: function (tasks) {
            this.service.setItem("tasks", tasks);
        }
    });
