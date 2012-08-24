com.taskslist.behaviors.ToggleFooterAndMain = new Class(
    {
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {
            var allCount = this.tasksListModel.getAllCount(),
                mainAndFooter = $$("#main,#footer");

            if (allCount === 0) {
                mainAndFooter.hide();
            } else {
                mainAndFooter.show();
            }
        }
    }
);