com.taskslist.view.NewTaskView = new Class(
    {
        model: izi.inject("com.taskslist.model.NewTaskModel"),
        addNewTask: izi.inject("com.taskslist.behaviors.AddNewTask"),

        iziInit: function () {
            var newTaskInput = $("new-todo"),
                model = this.model,
                addNewTask = this.addNewTask;

            // Bindings
            izi.bind().valueOf(newTaskInput).to(model, "title");
            izi.bind().valueOf(model, "title").to().valueOf(newTaskInput);

            // Behaviors
            izi.perform(addNewTask).when(izi.events.keyDown().ENTER().stopEvent()).on(newTaskInput);
        }
    }
);