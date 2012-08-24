com.taskslist.behaviors.ToggleFooterAndMain = new Class(
    {

        /**
         * @type {com.taskslist.model.TasksListModel}
         */
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),

        perform: function () {
            var allCount = this.tasksListModel.getAllCount();

            if (allCount === 0) {
                $$("#main,#footer").hide();
            } else {
                $$("#main,#footer").show();
            }
        }
    }
);