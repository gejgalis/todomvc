todo.behaviors.FooterBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        init: function () {
            todo.utils.bindMethods(this, ["clearCompleted"]);
        },

        clearCompleted: function (event) {
            this.model.clearCompleted();
        }
    }
);