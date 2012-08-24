describeUi("Todo - Add new task", "../index.html", function () {

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
        simulate(newTodoInput, 'keydown', {keyCode: simulate.VK_ENTER});

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

});