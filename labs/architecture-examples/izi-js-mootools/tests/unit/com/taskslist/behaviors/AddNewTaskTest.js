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
        newTaskModel.description("   Buy a milk   \t\r\n");

        // when
        behavior.perform();

        // then
        var expectedTaskModel = new com.task.model.TaskModel();
        expectedTaskModel.label("Buy a milk");
        expectedTaskModel.isDone(false);

        expect(tasksListModel.addTaskModel).toHaveBeenCalledWith(expectedTaskModel);
    });

    it("Should not add a new task when given description contains only white spaces", function () {

        // given
        newTaskModel.description("       \t\r\n");

        // when
        behavior.perform();

        // then
        expect(tasksListModel.addTaskModel).not.toHaveBeenCalled();
    });

});