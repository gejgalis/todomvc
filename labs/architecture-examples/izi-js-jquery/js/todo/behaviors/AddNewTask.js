todo.behaviors.AddNewTask = Class.create(
    {
        newTaskModel: izi.inject("todo.models.NewTaskModel"),
        listModel: izi.inject("todo.models.TasksListModel"),
        uuidGenerator: izi.inject("todo.utils.UuidGenerator"),

        perform: function () {

            var newTaskModel = this.newTaskModel,
                listModel = this.listModel;

            if (this.getEnteredTitle() !== "") {
                listModel.addTask(this.createNewTaskModel());
                newTaskModel.clear();
            }
        },

        createNewTaskModel: function () {
            var enteredTitle = this.getEnteredTitle();
            return new todo.models.TaskModel().title(enteredTitle).id(this.uuidGenerator.uuid());
        },

        getEnteredTitle: function () {
            return $.trim(this.newTaskModel.title());
        }
    }
);