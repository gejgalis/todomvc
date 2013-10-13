todo.behaviors.ShowHideWhenNoTasks = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        perform: function () {
            var allCount = this.model.getAllCount(),
                target = this.element;

            if (allCount === 0) {
                target.hide();
            } else {
                target.show();
            }
        },

        element: function (value) {
            this.element = value;
            return this;
        }
    }
);
