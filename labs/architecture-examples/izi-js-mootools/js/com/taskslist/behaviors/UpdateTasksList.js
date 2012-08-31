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
                /**
                 * @type {com.taskslist.model.TasksListModel}
                 */
                    listModel = this.tasksListModel;

            listView.clearList();

            listModel.items().forEach(function (taskModel) {
                var listItemView = new com.task.view.TaskView(listModel).setModel(taskModel);
                listView.addTaskModelView(listItemView);
            });
        }
    }
);