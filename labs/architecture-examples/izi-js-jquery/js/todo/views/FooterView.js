todo.views.FooterView = Class.create(
    {
        listModel: izi.inject("todo.models.TasksListModel"),
        filtersModel: izi.inject("todo.models.FiltersModel"),
        behaviors: izi.inject("todo.behaviors.FooterBehaviors"),
        router: izi.inject("router"),
        formatters: izi.inject("todo.views.FooterFormatters"),

        iziInit: function () {

            var listModel = this.listModel,
                filtersModel = this.filtersModel,
                activeCountFormatter = this.formatters.activeCountFormatter,
                clearCompletedFormatter = this.formatters.clearCompletedFormatter,
                showHide = todo.utils.showHide,
                $clearCompletedButton = $("#clear-completed"),
                $footer = $("#footer"),
                $todoCount = $("#todo-count"),
                clearCompleted = this.behaviors.clearCompleted;

            // Behaviors
            izi.perform(clearCompleted).when(izi.events.click()).on($clearCompletedButton);

            // Bindings
            izi.bind().valueOf(listModel, "activeCount").through(activeCountFormatter).to$($todoCount).html();
            izi.bind().valueOf(listModel, "completedCount").through(clearCompletedFormatter).to$($clearCompletedButton).html();
            izi.bind().valueOf(listModel, "hasAnyTasks").to(showHide($footer));
            izi.bind().valueOf(listModel, "hasCompletedTasks").to(showHide($clearCompletedButton));

            izi.bind().valueOf(filtersModel, "all").to$('a[href="#/"]').attr("class");
            izi.bind().valueOf(filtersModel, "active").to$('a[href="#/active"]').attr("class");
            izi.bind().valueOf(filtersModel, "completed").to$('a[href="#/completed"]').attr("class");
        }
    }
);