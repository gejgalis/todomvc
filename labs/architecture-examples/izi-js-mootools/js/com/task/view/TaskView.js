!function () {

    var taskTemplate = $$('.taskView-template > li');

    function createTaskElement() {
        return $$(taskTemplate[0].cloneNode(true));
    }

    com.task.view.TaskView = new Class(
        {
            el: null,

            initialize: function (listModel) {

                this.el = createTaskElement();
                this.registry = [];
                this.listModel = listModel;
            },

            getEl: function () {
                return this.el;
            },

            setModel: function (taskModel) {
                this.destroy();

                var li = this.el,
                    registry = this.registry,
                    listModel = this.listModel,
                    title = li.getElement("label")[0],
                    editor = li.getElement(".edit")[0],
                    checkbox = li.getElement(".toggle")[0],
                    removeButton = li.getElement(".destroy")[0],
                    removeTask = new com.task.behaviors.RemoveTask(taskModel, listModel),
                    toggleCompleted = new com.task.behaviors.ToggleDone(taskModel),
                    switchToEdit = new com.task.behaviors.StartEditing(taskModel, editor),
                    switchToView = new com.task.behaviors.EndEditing(taskModel, removeTask);

                // View Bindings
                registry.push(izi.bind().valueOf(taskModel, "title").to().textOf(title));
                registry.push(izi.bind().valueOf(taskModel, "taskClass").to(li, "class"));
                registry.push(izi.bind().valueOf(taskModel, "completed").to(checkbox, "checked"));

                // View Behaviors
                registry.push(izi.perform(removeTask).when(izi.events.click()).on(removeButton));
                registry.push(izi.perform(toggleCompleted).when(izi.events.click()).on(checkbox));
                registry.push(izi.perform(switchToEdit).when(izi.events.dblClick()).on(title));

                // Editor Bindings
                registry.push(izi.bind().valueOf(taskModel, "title").to().valueOf(editor));
                registry.push(izi.bind().valueOf(editor).to(taskModel, "title"));

                // Editor Behaviors
                registry.push(izi.perform(switchToView).when(izi.events.keyDown().ENTER().stopEvent()).on(editor));
                registry.push(izi.perform(switchToView).when(izi.events.blur()).on(editor));

                return this;
            },

            destroy: function () {
                var registry = this.registry;

                Array.each(registry, function (binding) {
                    binding.stopObserving();
                });

                registry.splice(0, registry.length);
                console.log("Registry length", registry.length);
            }
        }
    );

}();