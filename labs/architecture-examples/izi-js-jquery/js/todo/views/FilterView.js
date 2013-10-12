todo.views.FilterView = Class.create(
    {
         toggleClearCompleted: izi.inject("todo.behaviors.ToggleClearCompleted"),
         toggleFilters: izi.inject("todo.behaviors.ToggleFilters"),
         tasksListModel: izi.inject("todo.models.TasksListModel"),
         filterTasksList: izi.inject("todo.behaviors.FilterTasksList"),
         router: izi.inject("router"),

        iziInit: function () {

            var listModel = this.tasksListModel,
                activeCountFormatter = this.activeCountFormatter,
                clearCompletedFormatter = this.clearCompletedFormatter,
                clearCompletedButton = $("#clear-completed"),
                toggleAllButton = $("#toggle-all"),
                toggleFilters = this.toggleFilters,
                filterTasksList = this.filterTasksList,
                router = this.router;

            // Behaviors
            izi.perform(listModel.clearCompleted, listModel).when("click").on(clearCompletedButton);
            izi.perform(listModel.toggleAllComplete, listModel).when("click").on(toggleAllButton);
            izi.perform(toggleFilters).when("routeChange").on(router);
            izi.perform(filterTasksList).when("routeChange").on(router);

            // Bindings
            izi.bind().valueOf(listModel, "activeCount").through(activeCountFormatter).to$("#todo-count").html();
            izi.bind().valueOf(listModel, "completedCount").through(clearCompletedFormatter).to$(clearCompletedButton).html();
            izi.bind().valueOf(listModel, "allCompleted").to$(toggleAllButton).prop("checked");
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