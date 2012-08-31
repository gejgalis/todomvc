
describeUi("Todo - Add new task", "index.html", function () {

    function pressEnter(newTodoInput) {
        simulate(newTodoInput, 'keydown', {keyCode:simulate.VK_ENTER});
    }

    function typeOn(textField, text) {
        textField.set('value', text);
        textField.fireEvent("change");
    }

    var newTodoInput;

    beforeEach(function () {
        newTodoInput = $('new-todo');
    });

    it("Should add a new task when ENTER pressed", function () {

        // given
        typeOn(newTodoInput, "Buy a milk");

        // when
        pressEnter(newTodoInput);

        // then
        var tasksCount = $$('#todo-list .view').length,
            taskLabel = $$('#todo-list .view > label')[0].get('text'),
            taskEditorValue = $$('#todo-list .edit')[0].get('value'),
            taskCheckboxChecked = $$('#todo-list .view > input[type="checkbox"]')[0].get('checked'),
            activeTasksCounter = $('todo-count').get('html');

        expect(tasksCount).toBe(1);
        expect(taskLabel).toBe('Buy a milk');
        expect(taskEditorValue).toBe('Buy a milk');
        expect(taskCheckboxChecked).toBe(false);
        expect(activeTasksCounter).toBe("<strong>1</strong> item left.");
    });

    it("Should add more tasks than one", function () {

        // given
        typeOn(newTodoInput, "Buy a milk");
        pressEnter(newTodoInput);
        typeOn(newTodoInput, "Clean a floor");
        pressEnter(newTodoInput);

        // when


        // then
        var tasksCount = $$('#todo-list .view').length,
            tasksLabels = $$('#todo-list .view > label').get('text');
            tasksEditorsValues = $$('#todo-list .edit').get('value'),
            tasksCheckboxsCheckeds = $$('#todo-list .view > input[type="checkbox"]').get('checked'),
            activeTasksCounter = $('todo-count').get('html');

        expect(tasksCount).toBe(2);
        expect(tasksLabels).toEqual(['Buy a milk', 'Clean a floor']);
        expect(tasksEditorsValues).toEqual(['Buy a milk', 'Clean a floor']);
        expect(tasksCheckboxsCheckeds).toEqual([false, false]);
        expect(activeTasksCounter).toBe("<strong>2</strong> items left.");
    });

});