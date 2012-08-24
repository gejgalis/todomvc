(function () {
    'use strict';

    izi.bakeBeans({

        // Utils
        router: new com.utils.Router(),
        textUtil: new com.utils.TextUtil(),

        // View
        newItemView: new com.taskslist.view.NewTaskView(),
        listView: new com.taskslist.view.TasksListView(),

        // Model
        newTaskModel: new com.taskslist.model.NewTaskModel(),
        tasksListModel: new com.taskslist.model.TasksListModel(),

        // Behaviors
        updateList: new com.taskslist.behaviors.UpdateTasksList(),
        filterTasksList: new com.taskslist.behaviors.FilterTasksList(),
        toggleFooterAndMain: new com.taskslist.behaviors.ToggleFooterAndMain(),
        toggleFilters: new com.taskslist.behaviors.ToggleFilters(),
        toggleClearCompleted: new com.taskslist.behaviors.ToggleClearCompleted(),
        addNewTask: new com.taskslist.behaviors.AddNewTask()
    });

})();