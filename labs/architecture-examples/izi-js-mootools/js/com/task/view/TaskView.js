!function () {

    var taskTemplate = $$('.taskView-template > li');

    function createTaskElement() {
        return $$(taskTemplate[0].cloneNode(true));
    }

    com.task.view.TaskView = new Class(
        {
            el: null,

            initialize: function (taskModel, listModel) {

                var li = this.el = createTaskElement(),
                    label = li.getElement("label")[0],
                    editor = li.getElement(".edit")[0],
                    checkbox = li.getElement(".toggle")[0],
                    removeButton = li.getElement(".destroy")[0],
                    removeTask = new com.task.behaviors.RemoveTask(taskModel, listModel),
                    toggleCompleted = new com.task.behaviors.ToggleDone(taskModel),
                    switchToEdit = new com.task.behaviors.StartEditing(taskModel, editor),
                    switchToView = new com.task.behaviors.EndEditing(taskModel, removeTask);

                // View Bindings
                izi.bind().valueOf(taskModel, "label").to().textOf(label);
                izi.bind().valueOf(taskModel, "taskClass").to(li, "class");
                izi.bind().valueOf(taskModel, "isDone").to(checkbox, "checked");

                // View Behaviors
                izi.perform(removeTask).when(izi.events.click()).on(removeButton);
                izi.perform(toggleCompleted).when(izi.events.click()).on(checkbox);
                izi.perform(switchToEdit).when(izi.events.dblClick()).on(label);

                // Editor Bindings
                izi.bind().valueOf(taskModel, "label").to().valueOf(editor);
                izi.bind().valueOf(editor).to(taskModel, "label");

                // Editor Behaviors
                izi.perform(switchToView).when(izi.events.keyDown().ENTER().stopEvent()).on(editor);
                izi.perform(switchToView).when(izi.events.blur()).on(editor);
            },

            getEl: function () {
                return this.el;
            }
        }
    );

}();