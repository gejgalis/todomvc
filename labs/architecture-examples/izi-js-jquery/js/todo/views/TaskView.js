todo.views.TaskView = Class.create(
    {
        /**
         * @type {todo.behaviors.TaskBehaviors}
         */
        behaviors: izi.inject("todo.behaviors.TaskBehaviors"),

        iziInit: function () {
            var behaviors = this.behaviors,
                pressedEnter = todo.behaviors.whenPressedEnterDelegated,
                $list = $("#todo-list"),
                click = $.iziDelegate("click"),
                change = $.iziDelegate("change"),
                dblClick = $.iziDelegate("dblclick"),
                blur = $.iziDelegate("blur");

            // Behaviors
            izi.perform(behaviors.removeTask).when(click(".destroy")).on($list);
            izi.perform(behaviors.toggleCompleted).when(change(".toggle")).on($list);
            izi.perform(behaviors.startEditingTask).when(dblClick("label")).on($list);
            izi.perform(behaviors.endEditingTask).when(blur(".edit")).on($list);
            izi.perform(behaviors.endEditingTask).when(pressedEnter(".edit")).on($list);
        }
    }
);