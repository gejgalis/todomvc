com.taskslist.view.TasksListView = new Class(
    {
        updateList: izi.inject("com.taskslist.behaviors.UpdateTasksList"),
        toggleFooterAndMain: izi.inject("com.taskslist.behaviors.ToggleFooterAndMain"),
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        iziInit: function () {

            var updateList = this.updateList,
                toggleFooterAndMain = this.toggleFooterAndMain,
                listModel = this.tasksListModel,
                activeCountFormatter = this.activeCountFormatter;

            // Behaviors
            izi.perform(updateList).whenChangeOf("items").on(listModel);
            izi.perform(toggleFooterAndMain).whenChangeOf("allCount").on(listModel);

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