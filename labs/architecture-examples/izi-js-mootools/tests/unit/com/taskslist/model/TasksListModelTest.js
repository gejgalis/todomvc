describe("TasksListModel", function () {

    var model, completedTask, activeTask;

    beforeEach(function () {
        model = new com.taskslist.model.TasksListModel();
        activeTask = new com.task.model.TaskModel();
        completedTask = new com.task.model.TaskModel();
        completedTask.completed(true);
    });

    it("Should get 0 items and empty collection at the beginning", function () {

        // then
        expect(model.getActiveCount()).toBe(0);
        expect(model.getAllCount()).toBe(0);
        expect(model.items()).toEqual([]);
    });

    it("Should add new task", function () {

        // when
        model.addTaskModel(activeTask);

        // then
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(1);
        expect(model.items()).toEqual([activeTask]);
    });

    it("Should remove a task", function () {

        // given
        model.addTaskModel(activeTask);

        // when
        model.removeTaskModel(activeTask);

        // then
        expect(model.getActiveCount()).toBe(0);
        expect(model.getAllCount()).toBe(0);
        expect(model.items()).toEqual([]);
    });

    it("Should filter completed tasks", function () {

        // given
        model.addTaskModel(activeTask);
        model.addTaskModel(completedTask);
        expect(model.items().length).toBe(2);

        // when
        model.filterCompleted();

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(completedTask);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });

    it("Should filter active tasks", function () {

        // given
        model.addTaskModel(activeTask);
        model.addTaskModel(completedTask);
        expect(model.items().length).toBe(2);

        // when
        model.filterActive();

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(activeTask);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });



});