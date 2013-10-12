todo.behaviors.EndEditing = Class.create(
    {
        init: function (taskModel, removeTask) {
            this.taskModel = taskModel;
            this.removeTask = removeTask;
        },

        perform: function () {
            var model = this.taskModel,
                removeTask = this.removeTask,
                trim = todo.utils.text.trim;

            model.title(trim(model.title()));

            if (model.title() === "") {
                removeTask.perform();
            } else {
                model.taskClass(model.completed() ? "completed" : "");
            }
        }
    }
);