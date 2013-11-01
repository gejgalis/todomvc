todo.views.NewTaskView = Class.create(
    {
        model: izi.inject("todo.models.NewTaskModel"),
        addNewTask: izi.inject("todo.behaviors.AddNewTask"),

        iziInit: function () {
            var $editor = $("#new-todo"),
                model = this.model,
                addNewTask = this.addNewTask,
                pressedEnter = todo.behaviors.whenPressedEnter;

            // Bindings
            izi.bind().valueOf($editor).to(model, "title");
            izi.bind().valueOf(model, "title").to().valueOf($editor);

            // Behaviors
            izi.perform(addNewTask).when(pressedEnter).on($editor);
        }
    }
);