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

            model.label(trim(model.label()));

            if (model.label() === "") {
                removeTask.perform();
            } else {
                model.taskClass(model.isDone() ? "completed" : "");
            }
        }
    }
);