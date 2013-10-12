todo.behaviors.AddNewTask = Class.create(
    {
        newTaskModel: izi.inject("todo.models.NewTaskModel"),
        tasksListModel: izi.inject("todo.models.TasksListModel"),

        perform: function () {

            var newTaskModel = this.newTaskModel,
                listModel = this.tasksListModel;

            if (this.getEnteredTitle() !== "") {
                listModel.addTaskModel(this.createNewTaskModel());
                newTaskModel.clear();
            }
        },

        createNewTaskModel: function () {
            var enteredTitle = this.getEnteredTitle();
            return new todo.models.TaskModel().title(enteredTitle).id(todo.utils.uuid());
        },

        getEnteredTitle: function () {
            return todo.utils.text.trim(this.newTaskModel.title());
        }
    }
);