todo.views.TasksListView = Class.create(
    {
        retrieveTasks: izi.inject("todo.behaviors.RetrieveTasks"),
        saveTasks: izi.inject("todo.behaviors.SaveTasks"),
        tasksListModel: izi.inject("todo.models.TasksListModel"),

        init: function () {
            this.children = [];
            this.container = $("#todo-list");
        },

        iziContext: function (context) {
            this.context = context;
        },

        iziInit: function () {

            var listModel = this.tasksListModel,
                retrieveTasks = this.retrieveTasks,
                saveTasks = this.saveTasks;

            // Behaviors
            izi.perform(this.render, this).whenChangeOf("items").on(listModel);
            izi.perform(saveTasks).whenChangeOf("items").on(listModel);

            retrieveTasks.perform();
        },

        addTaskView: function (taskView) {
            this.children.push(taskView);
            this.container.append(taskView.getEl());
        },

        getChildren: function () {
            return this.children;
        },

        render: function () {

            var taskModels = this.tasksListModel.items(),
                reachedIndex = -1;

            this.getChildren().forEach(function (taskView, index) {

                var taskModel = taskModels[index];

                if (taskModel) {
                    taskView.setModel(taskModel);
                } else {
                    taskView.getModel().displayed(false);
                    taskView.destroy();
                }

                reachedIndex = index;
            });

            for (var i = reachedIndex + 1; i < taskModels.length; i++) {
                this.addTaskView(this.context.getBean("todo.views.TaskView").setModel(taskModels[i]));
            }
        }
    }
);