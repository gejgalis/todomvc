(function () {
    'use strict';

    izi.bakeBeans({

        // Utils
        textUtil: new com.utils.TextUtil(),

        // View
        newItemView: new com.taskslist.view.NewTaskView(),
        listView: new com.taskslist.view.TasksListView(),

        // Model
        newTaskModel: new com.taskslist.model.NewTaskModel(),
        tasksListModel: new com.taskslist.model.TasksListModel(),

        // Behaviors
        updateList: new com.taskslist.behaviors.UpdateTasksList(),
        toggleFooterAndMain: new com.taskslist.behaviors.ToggleFooterAndMain(),
        addNewTask: new com.taskslist.behaviors.AddNewTask()
    });

})();