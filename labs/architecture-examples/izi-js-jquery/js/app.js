(function () {
    'use strict';

    izi.bakeBeans(
        {
            // Models
            newTaskModel: new todo.models.NewTaskModel(),
            tasksListModel: new todo.models.TasksListModel(),

            // Views
            filterView: new todo.views.FilterView(),
            newTaskView: new todo.views.NewTaskView(),
            tasksListView: new todo.views.TasksListView(),
            taskView: new todo.views.TaskView(),
            footerAndMain: new todo.views.FooterAndMainView(),

            // Behaviors
            addNewTask: new todo.behaviors.AddNewTask(),
            whenPressedEnter: izi.protoOf(todo.behaviors.WhenPressedEnter),
            toggleFilters: new todo.behaviors.ToggleFilters(),
            toggleClearCompleted: new todo.behaviors.ToggleClearCompleted(),
            filterTasksList: new todo.behaviors.FilterTasksList(),
            toggleFooterAndMain: new todo.behaviors.ToggleFooterAndMain(),
            tasksBehaviors: new todo.behaviors.TaskBehaviors(),
            tasksListBehaviors: new todo.behaviors.TasksListBehaviors(),

            // Services
            localStorageService: new todo.services.LocalStorageService("todos-izi-js-jquery"),
            tasksService: new todo.services.TasksService(),

            // Utils
            router: new todo.utils.Router(),
            taskFinder: new todo.utils.TaskFinder()
        }
    );
})();