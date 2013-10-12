todo.views.TasksListView = Class.create(
    {
        behaviors: izi.inject("todo.behaviors.TasksListBehaviors"),
        model: izi.inject("todo.models.TasksListModel"),

        init: function () {
            this.$container = $("#todo-list");
            this.template = Handlebars.compile($('#task-template').html());
        },

        iziInit: function () {
            var model = this.model,
                behaviors = this.behaviors;

            izi.perform(this.renderTasks, this).whenChangeOf("items").on(model);
            izi.perform(behaviors.saveTasks, behaviors).whenChangeOf("items").on(model);

            behaviors.retrieveTasks();
        },

        renderTasks: function () {
            this.$container.html(this.template(this.model.items()));
        }
    }
);