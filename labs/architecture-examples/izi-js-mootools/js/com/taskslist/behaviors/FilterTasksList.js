com.taskslist.behaviors.FilterTasksList = new Class(
    {
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        iziInit: function () {
            var model = this.tasksListModel;

            this.filterMap = {
                '/': model.filterAll,
                '/active': model.filterActive,
                '/completed': model.filterCompleted
            }
        },

        perform: function (route) {
            this.filterMap[route].apply(this.tasksListModel);
        }
    }
);