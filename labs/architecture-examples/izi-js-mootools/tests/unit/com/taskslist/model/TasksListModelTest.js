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

        // when
        model.filterCompleted();

        // then
        expect(model.items().length).toBe(2);
        expect(activeTask.displayed()).toBe(false);
        expect(completedTask.displayed()).toBe(true);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });

    it("Should filter active tasks", function () {

        // given
        model.addTaskModel(activeTask);
        model.addTaskModel(completedTask);

        // when
        model.filterActive();

        // then
        expect(model.items().length).toBe(2);
        expect(activeTask.displayed()).toBe(true);
        expect(completedTask.displayed()).toBe(false);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });

    it("Should filter active tasks after add item", function () {

        // given
        model.addTaskModel(completedTask);
        model.filterActive();

        // when
        model.addTaskModel(activeTask);

        // then
        expect(activeTask.displayed()).toBe(true);
    });

    it("Should clear completed tasks", function () {

        // given
        model.addTaskModel(completedTask);
        model.addTaskModel(activeTask);

        // when
        model.clearCompleted();

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(activeTask);
    });
});