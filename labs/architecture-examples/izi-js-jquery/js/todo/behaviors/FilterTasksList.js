todo.behaviors.FilterTasksList = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        iziInit: function () {
            var model = this.model;

            this.filterMap = {
                '/': model.filterAll,
                '/active': model.filterActive,
                '/completed': model.filterCompleted
            }
        },

        perform: function (event) {
            this.filterMap[event.route].apply(this.model);
        }
    }
);