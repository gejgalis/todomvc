describe("TasksListModel", function () {

    var model, completedTask, activeTask;

    beforeEach(function () {
        model = new todo.models.TasksListModel();
        activeTask = new todo.models.TaskModel().fromRS({title: "Buy a milk", id: 1, completed: false});
        completedTask = new todo.models.TaskModel().fromRS({title: "Clean the floor", id: 2, completed: true});
    });

    it("Should get 0 items and empty collection at the beginning", function () {

        // then
        expect(model.getActiveCount()).toBe(0);
        expect(model.getAllCount()).toBe(0);
        expect(model.items()).toEqual([]);
    });

    it("Should add new task", function () {

        // when
        model.addTask(activeTask);

        // then
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(1);
        expect(model.items()).toEqual([activeTask]);
    });

    it("Should remove a task", function () {

        // given
        model.addTask(activeTask);

        // when
        model.removeTask(activeTask);

        // then
        expect(model.getActiveCount()).toBe(0);
        expect(model.getAllCount()).toBe(0);
        expect(model.items()).toEqual([]);
    });

    it("Should filter completed tasks", function () {

        // given
        model.addTask(activeTask);
        model.addTask(completedTask);

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
        model.addTask(activeTask);
        model.addTask(completedTask);

        // when
        model.filterActive();

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(activeTask);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });

    it("Should filter active tasks after add item", function () {

        // given
        model.addTask(completedTask);
        model.filterActive();

        // when
        model.addTask(activeTask);

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(activeTask);
        expect(model.getActiveCount()).toBe(1);
        expect(model.getAllCount()).toBe(2);
    });

    it("Should clear completed tasks", function () {

        // given
        model.addTask(completedTask);
        model.addTask(activeTask);

        // when
        model.clearCompleted();

        // then
        expect(model.items().length).toBe(1);
        expect(model.items()[0]).toBe(activeTask);
    });

    it("Should load model from JSON", function () {
        // given
        var tasks = [
            {id: 1, title: "Buy a milk", completed: true},
            {id: 2, title: "Clean the floor", completed: false}
        ];

        // when
        model.fromRS(tasks);

        // then
        var item1 = model.items()[0];
        var item2 = model.items()[1];

        expect(item1.title()).toBe("Buy a milk");
        expect(item1.completed()).toBe(true);
        expect(item1.id()).toBe(1);

        expect(item2.title()).toBe("Clean the floor");
        expect(item2.completed()).toBe(false);
        expect(item2.id()).toBe(2);
    });

    it("Should export model to JSON", function () {
        // given
        model.addTask(activeTask);
        model.addTask(completedTask);

        // when
        var tasks = model.toRQ();

        // then
        expect(tasks[0]).toEqual({title: "Buy a milk", id: 1, completed: false});
        expect(tasks[1]).toEqual({title: "Clean the floor", id: 2, completed: true});
    });

    it("Should trigger change items event when single task changes title field", function () {
        // given
        var listener = jasmine.createSpy();
        model.addTask(activeTask);
        model.addListener("itemsChange", listener);

        // when
        activeTask.title("changed title");

        // then
        expect(listener).toHaveBeenCalled();
    });

    it("Should trigger change items event when single task changes completed field", function () {
        // given
        var listener = jasmine.createSpy();
        model.addTask(activeTask);
        model.addListener("itemsChange", listener);


        // when
        activeTask.completed(true);

        // then
        expect(listener).toHaveBeenCalled();
    });
});