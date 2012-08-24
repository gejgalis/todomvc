com.taskslist.behaviors.AddNewTask = new Class(
    {
        newTaskModel: izi.inject("com.taskslist.model.NewTaskModel"),
        tasksListModel: izi.inject("com.taskslist.model.TasksListModel"),
        textUtil: izi.inject("com.utils.TextUtil"),

        perform: function () {
            var newItemModel = this.newTaskModel,
                listModel = this.tasksListModel,
                trim = this.textUtil.trim;

            if (trim(newItemModel.description()) !== "") {
                listModel.addTaskModel(this.createNewTaskModel());
                newItemModel.clear();
            }
        },

        createNewTaskModel: function () {
            var taskModel = new com.task.model.TaskModel(),
                trim = this.textUtil.trim,
                newItemModel = this.newTaskModel;

            taskModel.label(trim(newItemModel.description()));
            return taskModel;
        }
    }
);