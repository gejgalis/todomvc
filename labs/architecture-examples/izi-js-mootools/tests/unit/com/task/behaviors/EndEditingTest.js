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
        taskModel.title("This is edited text   ");

        // when
        behavior.perform();

        // then
        expect(taskModel.title()).toBe('This is edited text');
    });

    it("Should switch task class to 'completed' when task was completed", function () {

        // given
        taskModel.title("This is edited text   ");
        taskModel.completed(true);

        // when
        behavior.perform();

        // then
        expect(taskModel.taskClass()).toBe('completed');
    });

    it("Should remove task if edited text is empty", function () {

        // given
        taskModel.title("");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).toHaveBeenCalled();
    });

    it("Should not remove task if edited text is valid", function () {

        // given
        taskModel.title("Some valid task");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).not.toHaveBeenCalled();
    });

    it("Should remove task if edited text has only spaces", function () {

        // given
        taskModel.title("   ");

        // when
        behavior.perform();

        // then
        expect(removeTask.perform).toHaveBeenCalled();
    });
});