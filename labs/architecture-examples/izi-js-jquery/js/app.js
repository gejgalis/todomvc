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
            taskView: izi.protoOf(todo.views.TaskView),
            footerAndMain: new todo.views.FooterAndMainView(),

            // Behaviors
            addNewTask: new todo.behaviors.AddNewTask(),
            whenPressedEnter: izi.protoOf(todo.behaviors.WhenPressedEnter),
            retrieveTasks: new todo.behaviors.RetrieveTasks(),
            saveTasks: new todo.behaviors.SaveTasks(),
            toggleFilters: new todo.behaviors.ToggleFilters(),
            toggleClearCompleted: new todo.behaviors.ToggleClearCompleted(),
            filterTasksList: new todo.behaviors.FilterTasksList(),
            toggleFooterAndMain: new todo.behaviors.ToggleFooterAndMain(),

            // Services
            localStorageService: new todo.services.LocalStorageService("todos-izi-js-jquery"),
            tasksService: new todo.services.TasksService(),

            // Utils
            router: new todo.utils.Router()
        }
    );
})();