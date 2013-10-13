todo.behaviors.MainBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        toggleAllComplete: function () {
            this.model.toggleAllComplete();
        }
    }
);