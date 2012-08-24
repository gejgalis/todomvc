describe("EndEditing behavior", function () {

    var behavior, taskModel, removeTask;

    beforeEach(function () {

        taskModel = new com.task.model.TaskModel();
        removeTask = new com.task.behaviors.RemoveTask();
        behavior = new com.task.behaviors.EndEditing(taskModel, removeTask);

        spyOn(removeTask, 'perform');
    });

    it("Should trim edited task", function () {

        // given
        taskModel.label("This is edited text   ");

        // when
        behavior.perform();

        // then
        expect(taskModel.label()).toBe('This is edited text');
    });

    it("Should switch task class to 'completed' when task was completed", function () {

        // given
        taskModel.label("This is edited text   ");
        taskModel.isDone(true);

        // when
        behavior.perform();

        // then
        expect(taskModel.taskClass()).toBe('completed');
    });

    it("Should remove task if edited text is empty", function () {

        // given
        taskModel.label("");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).toHaveBeenCalled();
    });

    it("Should not remove task if edited text is valid", function () {

        // given
        taskModel.label("Some valid task");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).not.toHaveBeenCalled();
    });

    it("Should remove task if edited text has only spaces", function () {

        // given
        taskModel.label("   ");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).toHaveBeenCalled();
    });
});