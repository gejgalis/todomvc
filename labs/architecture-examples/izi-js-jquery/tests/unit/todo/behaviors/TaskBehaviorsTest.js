describe("TaskBehaviors Spec", function () {

    var behavior, taskFinder, model, event, task, $view, $editor;

    beforeEach(function () {
        event = {
            target: {}
        };

        task = new todo.models.TaskModel();
        $view = $('<li class="taskView">' +
                  '<input type="text" class="edit" value="Buy a milk"/>' +
                  '</li>').appendTo("body");
        $editor = $view.find(".edit");

        behavior = new todo.behaviors.TaskBehaviors();
        behavior.model = model = mock(todo.models.TasksListModel);
        behavior.taskFinder = taskFinder = mock(todo.utils.TaskFinder);

        when(taskFinder).findTaskModel(event.target).thenReturn(task);
        when(taskFinder).findTaskView(event.target).thenReturn($view);
    });

    afterEach(function () {
        $view.remove();
    });

    it("Should remove task from list", function () {

        // when
        behavior.removeTask(event);

        // then
        verify(model).removeTask(task);
    });//---------------------------------------------------------------------------------------------------------------

    it("Should start editing the task", function () {

        // given
        var editor = $editor.get(0);

        // when
        behavior.startEditingTask(event);

        // then
        expect($view).toHaveClass("editing");
        expect(editor.selectionStart).toBe(0);
        expect(editor.selectionEnd).toBe(editor.value.length);
    });//---------------------------------------------------------------------------------------------------------------

    it("Should trim and update title in task after editing the task", function () {

        // given
        $editor.val("   Title with whitespaces \t\n\r");

        // when
        behavior.endEditingTask(event);

        // then
        expect(task.getTitle()).toBe("Title with whitespaces");
    });//---------------------------------------------------------------------------------------------------------------

    it("Should remove task if empty title was given", function () {

        // given
        $editor.val("   \t\n\r");

        // when
        behavior.endEditingTask(event);

        // then
        verify(model).removeTask(task);
    });//---------------------------------------------------------------------------------------------------------------

    it("Should toggle completed on task", function () {

        // given
        expect(task.getCompleted()).toBe(false);

        // when
        behavior.toggleCompleted(event);

        // then
        expect(task.getCompleted()).toBe(true);
    });//---------------------------------------------------------------------------------------------------------------
});
