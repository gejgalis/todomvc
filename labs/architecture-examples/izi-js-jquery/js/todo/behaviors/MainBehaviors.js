todo.behaviors.MainBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        init: function () {
            todo.utils.bindMethods(this, ["toggleAllComplete"]);
        },

        toggleAllComplete: function () {
            this.model.toggleAllComplete();
        }
    }
);