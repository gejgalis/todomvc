com.taskslist.view.TasksListView = new Class(
    {
        updateList: izi.inject("com.taskslist.behaviors.UpdateTasksList"),
        retrieveTasks: izi.inject("com.taskslist.behaviors.RetrieveTasks"),
        saveTasks: izi.inject("com.taskslist.behaviors.SaveTasks"),
        toggleFooterAndMain: izi.inject("com.taskslist.behaviors.ToggleFooterAndMain"),
        toggleClearCompleted: izi.inject("com.taskslist.behaviors.ToggleClearCompleted"),
        toggleFilters: izi.inject("com.taskslist.behaviors.ToggleFilters"),
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),
        filterTasksList: izi.inject("com.taskslist.behaviors.FilterTasksList"),
        router: izi.inject("com.utils.Router"),

        initialize: function () {
            this.children = [];
        },

        iziInit: function () {

            var updateList = this.updateList,
                retrieveTasks = this.retrieveTasks,
                saveTasks = this.saveTasks,
                toggleFooterAndMain = this.toggleFooterAndMain,
                toggleClearCompleted = this.toggleClearCompleted,
                toggleFilters = this.toggleFilters,
                filterTasksList = this.filterTasksList,
                listModel = this.tasksListModel,
                activeCountFormatter = this.activeCountFormatter,
                clearCompletedFormatter = this.clearCompletedFormatter,
                clearCompletedButton = $('clear-completed'),
                toggleAllButton = $('toggle-all'),
                router = this.router;

            retrieveTasks.perform();

            // Behaviors
            izi.perform(updateList).whenChangeOf("items").on(listModel);
            izi.perform(saveTasks).whenChangeOf("items").on(listModel);
            izi.perform(toggleFooterAndMain).whenChangeOf("allCount").on(listModel);
            izi.perform(toggleClearCompleted).whenChangeOf("allCount").on(listModel);
            izi.perform(toggleFilters).when("routeChange").on(router);
            izi.perform(filterTasksList).when("routeChange").on(router);
            izi.perform(listModel.clearCompleted, listModel).when("click").on(clearCompletedButton);
            izi.perform(listModel.toggleAllComplete, listModel).when("click").on(toggleAllButton);

            // Bindings
            izi.bind().valueOf(listModel, "activeCount").through(activeCountFormatter).to($('todo-count'), "html");
            izi.bind().valueOf(listModel, "completedCount").through(clearCompletedFormatter).to(clearCompletedButton, "html");
            izi.bind().valueOf(listModel, "allCompleted").to(toggleAllButton, "checked");
        },

        addTaskView: function (listItemView) {
            this.children.push(listItemView);
            listItemView.getEl().inject($('todo-list'));
        },

        getChildren: function () {
            return this.children;
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