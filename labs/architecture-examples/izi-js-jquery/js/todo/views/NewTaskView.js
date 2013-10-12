todo.views.NewTaskView = function () {

    var NewTaskView = function todo_views_NewTaskView() {};

    NewTaskView.prototype = {
        constructor: NewTaskView,

        model: izi.inject("todo.models.NewTaskModel"),
        addNewTask: izi.inject("todo.behaviors.AddNewTask"),
        whenPressedEnter: izi.inject("todo.behaviors.WhenPressedEnter"),

        iziInit: function () {
            var newTaskInput = $("#new-todo"),
                model = this.model,
                addNewTask = this.addNewTask,
                whenPressedEnter = this.whenPressedEnter;

            // Bindings
            izi.bind().valueOf(newTaskInput).to(model, "title");
            izi.bind().valueOf(model, "title").to$(newTaskInput).val();

            // Behaviors
            izi.perform(whenPressedEnter.then(addNewTask)).on(newTaskInput);
        }
    };

    return NewTaskView;
}();