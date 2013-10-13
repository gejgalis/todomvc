(function () {
    'use strict';

    izi.bakeBeans(
        {
            // Models
            newTaskModel: new todo.models.NewTaskModel(),
            tasksListModel: new todo.models.TasksListModel(),

            // Views
            newTaskView: new todo.views.NewTaskView(),
            tasksListView: new todo.views.TasksListView(),
            taskView: new todo.views.TaskView(),
            footerAndMain: new todo.views.FooterView(),
            mainView: new todo.views.MainView(),

            // Behaviors
            mainBehaviors: new todo.behaviors.MainBehaviors(),
            addNewTask: new todo.behaviors.AddNewTask(),
            tasksListBehaviors: new todo.behaviors.TasksListBehaviors(),
            filterTasksList: new todo.behaviors.FilterTasksList(),
            taskBehaviors: new todo.behaviors.TaskBehaviors(),
            footerBehaviors: new todo.behaviors.FooterBehaviors(),

            whenPressedEnter: izi.protoOf(todo.behaviors.WhenPressedEnter),
            showHideWhenNoTasks: izi.protoOf(todo.behaviors.ShowHideWhenNoTasks),

            // Services
            localStorageService: new todo.services.LocalStorageService("todos-izi-js-jquery"),
            tasksService: new todo.services.TasksService(),

            // Utils
            router: new todo.utils.Router(),
            taskFinder: new todo.utils.TaskFinder(),
            uuidGenerator: new todo.utils.UuidGenerator()
        }
    );
})();