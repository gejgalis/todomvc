todo.views.FooterView = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),
        behaviors: izi.inject("todo.behaviors.FooterBehaviors"),
        router: izi.inject("router"),
        formatters: izi.inject("todo.views.FooterFormatters"),

        iziInit: function () {

            var model = this.model,
                activeCountFormatter = this.formatters.activeCountFormatter,
                clearCompletedFormatter = this.formatters.clearCompletedFormatter,
                showHide = todo.utils.showHide,
                router = this.router,
                $clearCompletedButton = $("#clear-completed"),
                $footer = $("#footer"),
                $todoCount = $("#todo-count"),
                toggleSelectedFilter = this.behaviors.toggleSelectedFilter,
                clearCompleted = this.behaviors.clearCompleted;

            // Behaviors
            izi.perform(clearCompleted).when(izi.events.click()).on($clearCompletedButton);
            izi.perform(toggleSelectedFilter).when("routeChange").on(router);

            // Bindings
            izi.bind().valueOf(model, "activeCount").through(activeCountFormatter).to$($todoCount).html();
            izi.bind().valueOf(model, "completedCount").through(clearCompletedFormatter).to$($clearCompletedButton).html();
            izi.bind().valueOf(model, "hasAnyTasks").to(showHide($footer));
            izi.bind().valueOf(model, "hasCompletedTasks").to(showHide($clearCompletedButton));
        }
    }
);