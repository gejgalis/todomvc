com.task.behaviors.EndEditing = new Class(
    {
        initialize: function (taskModel, removeTask) {
            this.taskModel = taskModel;
            this.removeTask = removeTask;
            this.textUtil = new com.utils.TextUtil();
        },

        perform: function () {
            var model = this.taskModel,
                removeTask = this.removeTask,
                trim = this.textUtil.trim;

            model.title(trim(model.title()));

            if (model.title() === "") {
                removeTask.perform();
            } else {
                model.taskClass(model.completed() ? "completed" : "");
            }
        }
    }
);