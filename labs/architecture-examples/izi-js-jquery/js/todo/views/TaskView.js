todo.views.TaskView = Class.create(
    {
        /**
         * @type {todo.behaviors.WhenPressedEnter}
         */
        whenPressedEnter: izi.inject("todo.behaviors.WhenPressedEnter"),

        /**
         * @type {todo.behaviors.TaskBehaviors}
         */
        behaviors: izi.inject("todo.behaviors.TaskBehaviors"),

        iziInit: function () {
            var behaviors = this.behaviors,
                whenPressedEnter = this.whenPressedEnter,
                $list = $("#todo-list"),
                $destroyButton = [$list, ".destroy"],
                $toggleCheckbox = [$list, ".toggle"],
                $label = [$list, "label"],
                $editor = [$list, ".edit"];

            // Behaviors
            izi.perform(behaviors.removeTask, behaviors).when(izi.events.click()).on($destroyButton);
            izi.perform(behaviors.toggleCompleted, behaviors).when(izi.events.change()).on($toggleCheckbox);
            izi.perform(behaviors.startEditingTask, behaviors).when(izi.events.dblClick()).on($label);
            izi.perform(behaviors.endEditingTask, behaviors).when(izi.events.blur()).on($editor);
            izi.perform(whenPressedEnter.then(behaviors.endEditingTask, behaviors)).on($editor);
        }
    }
);