describe("AddNewTask behavior", function () {

    var behavior, tasksListModel, newTaskModel;

    beforeEach(function () {
        behavior = new com.taskslist.behaviors.AddNewTask();
        behavior.tasksListModel = tasksListModel = new com.taskslist.model.TasksListModel();
        behavior.newTaskModel = newTaskModel = new com.taskslist.model.NewTaskModel();
        behavior.textUtil = new com.utils.TextUtil();

        spyOn(tasksListModel, 'addTaskModel');
    });

    it("Should add and trim new task", function () {

        // given
        newTaskModel.title("   Buy a milk   \t\r\n");

        // when
        behavior.perform();

        // then
        var expectedTaskModel = new com.task.model.TaskModel();
        expectedTaskModel.title("Buy a milk");
        expectedTaskModel.completed(false);

        expect(tasksListModel.addTaskModel).toHaveBeenCalledWith(expectedTaskModel);
    });

    it("Should not add a new task when given title contains only white spaces", function () {

        // given
        newTaskModel.title("       \t\r\n");

        // when
        behavior.perform();

        // then
        expect(tasksListModel.addTaskModel).not.toHaveBeenCalled();
    });

});