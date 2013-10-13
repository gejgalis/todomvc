todo.views.MainView = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),
        behaviors: izi.inject("todo.behaviors.MainBehaviors"),
        showHideWhenNoTasks: izi.inject("todo.behaviors.ShowHideWhenNoTasks"),

        iziInit: function () {

            var model = this.model,
                toggleAllComplete = $.proxy(this.behaviors.toggleAllComplete, this.behaviors),
                showHideWhenNoTasks = this.showHideWhenNoTasks,
                $toggleAllButton = $("#toggle-all"),
                $main = $("#main");

            // Behaviors
            izi.perform(toggleAllComplete).when(izi.events.click()).on($toggleAllButton);
            izi.perform(showHideWhenNoTasks.element($main)).whenChangeOf("allCount").on(model);

            // Bindings
            izi.bind().valueOf(model, "allCompleted").to$($toggleAllButton).prop("checked");

            showHideWhenNoTasks.perform();
        }
    }
);