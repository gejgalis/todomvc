todo.behaviors.MainBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        init: function () {
            this.toggleAllComplete = $.proxy(this.toggleAllComplete, this);
        },

        toggleAllComplete: function () {
            this.model.toggleAllComplete();
        }
    }
);