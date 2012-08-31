com.taskslist.behaviors.UpdateTasksList = new Class(
    {
        /**
         * @type {com.taskslist.view.TasksListView}
         */
        listView: izi.inject("com.taskslist.view.TasksListView"),

        /**
         * @type {com.taskslist.model.TasksListModel}
         */
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {

            var listView = this.listView,
                listModel = this.tasksListModel,
                taskModels = listModel.items(),
                taskViews = listView.getChildren(),
                reachedIndex = -1;

            taskViews.forEach(function (taskView, index) {

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
                listView.addTaskView(new com.task.view.TaskView(listModel).setModel(taskModels[i]));
            }
        }
    }
);