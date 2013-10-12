!function () {

    function createTaskElement() {
        return $($('.taskView-template').html());
    }

    todo.views.TaskView = Class.create(
        {
            listModel: izi.inject("todo.models.TasksListModel"),
            whenPressedEnter: izi.inject("todo.behaviors.WhenPressedEnter"),

            init: function () {
                this.el = createTaskElement();
                this.registry = [];
                this.bindings = izi.bind();
            },

            getEl: function () {
                return this.el;
            },

            setModel: function (taskModel) {
                if (this.taskModel === taskModel) {
                    return this;
                }

                this.destroy();
                this.taskModel = taskModel;

                var el = this.getEl(),
                    bind = this.bindings,
                    registry = this.registry,
                    listModel = this.listModel,
                    title = el.find("label"),
                    editor = el.find(".edit"),
                    checkbox = el.find(".toggle"),
                    removeButton = el.find(".destroy"),
                    whenPressedEnter = this.whenPressedEnter,
                    removeTask = new todo.behaviors.RemoveTask(taskModel, listModel),
                    toggleCompleted = new todo.behaviors.ToggleDone(taskModel),
                    toggleDisplay = new todo.behaviors.ToggleDisplay(el, taskModel),
                    switchToEdit = new todo.behaviors.StartEditing(taskModel, editor),
                    switchToView = new todo.behaviors.EndEditing(taskModel, removeTask);

                // View Bindings
                bind.valueOf(taskModel, "title").to$(title).text();
                bind.valueOf(taskModel, "taskClass").to$(el).attr("class");
                bind.valueOf(taskModel, "completed").to$(checkbox).prop("checked");

                // View Behaviors
                registry.push(izi.perform(removeTask).when(izi.events.click()).on(removeButton));
                registry.push(izi.perform(toggleCompleted).when(izi.events.click()).on(checkbox));
                registry.push(izi.perform(toggleDisplay).whenChangeOf("displayed").on(taskModel));
                registry.push(izi.perform(switchToEdit).when(izi.events.dblClick()).on(title));

                // Editor Bindings
                bind.valueOf(taskModel, "title").to$(editor).val();
                bind.valueOf(editor).to(taskModel, "title");

                // Editor Behaviors
                registry.push(izi.perform(whenPressedEnter.then(switchToView)).on(editor));
                registry.push(izi.perform(switchToView).when(izi.events.blur()).on(editor));

                return this;
            },

            getModel: function () {
                return this.taskModel;
            },

            destroy: function () {
                var registry = this.registry;

                registry.forEach(function (binding) {
                    binding.stopObserving();
                });

                registry.splice(0, registry.length);
                this.bindings.unbindAll();
            }
        }
    );

}();