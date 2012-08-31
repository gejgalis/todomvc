com.task.behaviors.ToggleDisplay = new Class(
    {
        initialize: function (viewElement, taskModel) {
            this.viewElement = viewElement;
            this.taskModel = taskModel;
        },

        perform: function () {
            if (this.taskModel.displayed()) {
                this.viewElement.show();
            } else {
                this.viewElement.hide();
            }
        }
    }
);