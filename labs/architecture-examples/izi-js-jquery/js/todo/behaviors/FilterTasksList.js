todo.behaviors.FilterTasksList = Class.create(
    {
        tasksListModel: izi.inject("todo.models.TasksListModel"),

        iziInit: function () {
            var model = this.tasksListModel;

            this.filterMap = {
                '/': model.filterAll,
                '/active': model.filterActive,
                '/completed': model.filterCompleted
            }
        },

        perform: function (event) {
            console.log(event.route);
            this.filterMap[event.route].apply(this.tasksListModel);
        }
    }
);