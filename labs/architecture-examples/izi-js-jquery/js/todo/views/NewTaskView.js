todo.views.NewTaskView = Class.create(
    {
        model: izi.inject("todo.models.NewTaskModel"),
        addNewTask: izi.inject("todo.behaviors.AddNewTask"),
        whenPressedEnter: izi.inject("todo.behaviors.WhenPressedEnter"),

        iziInit: function () {
            var newTaskEditor = $("#new-todo"),
                model = this.model,
                addNewTask = this.addNewTask,
                whenPressedEnter = this.whenPressedEnter;

            // Bindings
            izi.bind().valueOf(newTaskEditor).to(model, "title");
            izi.bind().valueOf(model, "title").to().valueOf(newTaskEditor);

            // Behaviors
            izi.perform(whenPressedEnter.then(addNewTask)).on(newTaskEditor);
        }
    }
);