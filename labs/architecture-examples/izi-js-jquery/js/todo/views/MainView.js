todo.views.MainView = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),
        behaviors: izi.inject("todo.behaviors.MainBehaviors"),

        iziInit: function () {

            var model = this.model,
                toggleAllComplete = this.behaviors.toggleAllComplete,
                showHide = todo.utils.showHide,
                $toggleAllButton = $("#toggle-all"),
                $main = $("#main");

            // Behaviors
            izi.perform(toggleAllComplete).when(izi.events.click()).on($toggleAllButton);

            // Bindings
            izi.bind().valueOf(model, "allCompleted").to().valueOf($toggleAllButton);
            izi.bind().valueOf(model, "hasAnyTasks").to(showHide($main));
        }
    }
);