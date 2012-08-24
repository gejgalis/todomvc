com.taskslist.view.TasksListView = new Class(
    {
        updateList: izi.inject("com.taskslist.behaviors.UpdateTasksList"),
        toggleFooterAndMain: izi.inject("com.taskslist.behaviors.ToggleFooterAndMain"),
        toggleClearCompleted: izi.inject("com.taskslist.behaviors.ToggleClearCompleted"),
        toggleFilters: izi.inject("com.taskslist.behaviors.ToggleFilters"),
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),
        filterTasksList: izi.inject("com.taskslist.behaviors.FilterTasksList"),
        router: izi.inject("com.utils.Router"),

        iziInit: function () {

            var updateList = this.updateList,
                toggleFooterAndMain = this.toggleFooterAndMain,
                toggleClearCompleted = this.toggleClearCompleted,
                toggleFilters = this.toggleFilters,
                filterTasksList = this.filterTasksList,
                listModel = this.tasksListModel,
                activeCountFormatter = this.activeCountFormatter,
                router = this.router;

            // Behaviors
            izi.perform(updateList).whenChangeOf("items").on(listModel);
            izi.perform(toggleFooterAndMain).whenChangeOf("allCount").on(listModel);
            izi.perform(toggleClearCompleted).whenChangeOf("allCount").on(listModel);
            izi.perform(toggleFilters).when("routeChange").on(router);
            izi.perform(filterTasksList).when("routeChange").on(router);

            // Bindings
            izi.bind().valueOf(listModel, "activeCount").through(activeCountFormatter).to($('todo-count'), "html");
        },

        addTaskModelView: function (listItemView) {
            listItemView.getEl().inject($('todo-list'));
        },

        clearList: function () {
            $$("#todo-list > li").forEach(function (item) {
                item.dispose();
            })
        },

        activeCountFormatter: function (value) {
            if (value === 1) {
                return "<strong>1</strong> item left.";
            } else {
                return "<strong>" + value + "</strong>" + " items left.";
            }
        }
    }
);