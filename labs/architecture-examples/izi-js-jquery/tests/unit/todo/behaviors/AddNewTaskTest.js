describe("AddNewTask behavior", function () {

    var behavior, tasksListModel, newTaskModel;

    beforeEach(function () {
        behavior = new todo.behaviors.AddNewTask();
        behavior.tasksListModel = tasksListModel = new todo.models.TasksListModel();
        behavior.newTaskModel = newTaskModel = new todo.models.NewTaskModel();

        spyOn(tasksListModel, 'addTaskModel');
    });

    it("Should add and trim new task", function () {

        // given
        newTaskModel.title("   Buy a milk   \t\r\n");

        // when
        behavior.perform();

        // then
        var expectedTaskModel = new todo.models.TaskModel();
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