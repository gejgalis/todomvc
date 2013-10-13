todo.views.TasksListView = Class.create(
    {
        behaviors: izi.inject("todo.behaviors.TasksListBehaviors"),
        model: izi.inject("todo.models.TasksListModel"),
        filterTasksList: izi.inject("todo.behaviors.FilterTasksList"),
        router: izi.inject("router"),

        init: function () {
            this.$container = $("#todo-list");
            this.template = Handlebars.compile($('#task-template').html());
        },

        iziInit: function () {
            var model = this.model,
                filterTasksList = this.filterTasksList,
                router = this.router,
                behaviors = this.behaviors;

            // Behaviors
            izi.perform(this.renderTasks, this).whenChangeOf("items").on(model);
            izi.perform(behaviors.saveTasks, behaviors).whenChangeOf("items").on(model);
            izi.perform(filterTasksList).when("routeChange").on(router);

            behaviors.retrieveTasks();
        },

        renderTasks: function () {
            this.$container.html(this.template(this.model.items()));
        }
    }
);