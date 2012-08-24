com.task.behaviors.StartEditing = new Class(
    {
        initialize: function (taskModel, editor) {
            this.taskModel = taskModel;
            this.editor = editor;
        },

        perform: function () {
            var model = this.taskModel;
            model.taskClass("editing");
            this.editor.selectRange(0, model.title().length);
        }
    }
);