describe("AddNewTask behavior", function () {

    var behavior, listModel, newTaskModel, uniqueId = "generated-uid";;

    beforeEach(function () {
        behavior = new todo.behaviors.AddNewTask();
        behavior.listModel = listModel = new todo.models.TasksListModel();
        behavior.newTaskModel = newTaskModel = new todo.models.NewTaskModel();
        behavior.uuidGenerator = mock(todo.utils.UuidGenerator);

        spyOn(listModel, 'addTask');
        when(behavior.uuidGenerator).uuid().thenReturn(uniqueId);
    });

    it("Should add and trim new task", function () {

        // given
        newTaskModel.title("   Buy a milk   \t\r\n");

        // when
        behavior.perform();

        // then
        var expectedTaskModel = new todo.models.TaskModel();
        expectedTaskModel.id(uniqueId);
        expectedTaskModel.title("Buy a milk");
        expectedTaskModel.completed(false);

        expect(listModel.addTask).toHaveBeenCalledWith(expectedTaskModel);
    });

    it("Should not add a new task when given title contains only white spaces", function () {

        // given
        newTaskModel.title("       \t\r\n");

        // when
        behavior.perform();

        // then
        expect(listModel.addTask).not.toHaveBeenCalled();
    });

});