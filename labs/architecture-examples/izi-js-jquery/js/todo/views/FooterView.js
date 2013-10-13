todo.views.FooterView = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),
        behaviors: izi.inject("todo.behaviors.FooterBehaviors"),
        showHideWhenNoTasks: izi.inject("todo.behaviors.ShowHideWhenNoTasks"),
        router: izi.inject("router"),

        iziInit: function () {

            var model = this.model,
                activeCountFormatter = this.activeCountFormatter,
                clearCompletedFormatter = this.clearCompletedFormatter,
                showHideWhenNoTasks = this.showHideWhenNoTasks,
                router = this.router,
                $clearCompletedButton = $("#clear-completed"),
                $footer = $("#footer"),
                $todoCount = $("#todo-count"),
                toggleSelectedFilter = $.proxy(this.behaviors.toggleSelectedFilter, this.behaviors),
                showHideCompletedButton = $.proxy(this.behaviors.showHideCompletedButton, this.behaviors),
                clearCompleted = $.proxy(this.behaviors.clearCompleted, this.behaviors);

            // Behaviors
            izi.perform(showHideWhenNoTasks.element($footer)).whenChangeOf("allCount").on(model);
            izi.perform(clearCompleted).when(izi.events.click()).on($clearCompletedButton);
            izi.perform(showHideCompletedButton).whenChangeOf("completedCount").on(model);
            izi.perform(toggleSelectedFilter).when("routeChange").on(router);

            // Bindings
            izi.bind().valueOf(model, "activeCount").through(activeCountFormatter).to$($todoCount).html();
            izi.bind().valueOf(model, "completedCount").through(clearCompletedFormatter).to$($clearCompletedButton).html();

            showHideWhenNoTasks.perform();
            showHideCompletedButton();
        },

        activeCountFormatter: function (value) {
            if (value === 1) {
                return "<strong>1</strong> item left.";
            } else {
                return "<strong>" + value + "</strong>" + " items left.";
            }
        },

        clearCompletedFormatter: function (value) {
            return "Clear completed (" + value + ")";
        }
    }
);