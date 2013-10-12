todo.behaviors.ToggleFooterAndMain = Class.create(
    {
        tasksListModel: izi.inject("todo.models.TasksListModel"),

        perform: function () {
            var allCount = this.tasksListModel.getAllCount(),
                mainAndFooter = $("#main,#footer");

            if (allCount === 0) {
                mainAndFooter.hide();
            } else {
                mainAndFooter.show();
            }
        }
    }
);