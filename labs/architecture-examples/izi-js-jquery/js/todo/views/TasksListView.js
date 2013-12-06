todo.views.TasksListView = Class.create(
    {
        behaviors: izi.inject("todo.behaviors.TasksListBehaviors"),
        model: izi.inject("todo.models.TasksListModel"),
        filtersModel: izi.inject("todo.models.FiltersModel"),
        filterTasksList: izi.inject("todo.behaviors.FilterTasksList"),

        init: function () {
            this.$container = $("#todo-list");
            this.template = $('#task-template').html();
            Mustache.parse(this.template);

            this.renderTasks = $.proxy(this.renderTasks, this);
        },

        iziInit: function () {
            var model = this.model,
                filtersModel = this.filtersModel,
                filterTasksList = this.filterTasksList,
                saveTasks = this.behaviors.saveTasks;

            // Behaviors
            izi.perform(this.renderTasks).whenChangeOf("items").on(model);
            izi.perform(saveTasks).whenChangeOf("items").on(model);
            izi.perform(filterTasksList).whenChangeOf("selectedFilter").on(filtersModel);

            this.behaviors.retrieveTasks();
        },

        renderTasks: function () {
            var tasksHtml = Mustache.render(this.template, {items: this.model.items()});
            this.$container.html(tasksHtml);
        }
    }
);