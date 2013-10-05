/**
 * UI Robot
 */

!function (global, $) {

    function changeWindowHash() {
        window.ownerDocument = global.document;
        simulate(global, 'hashchange');
        delete window.ownerDocument;
    }

    function clickOn(element) {
        simulate(element.get(0), 'click');
    }

    function pressEnter(element) {
        simulate(element.get(0), 'keydown', {keyCode: simulate.VK_ENTER});
    }

    function typeOn(textField, text) {
        textField.val(text);
        simulate(textField.get(0), 'change');
    }

    function addTask(title) {
        var textField = $('#new-todo');
        typeOn(textField, title);
        pressEnter(textField);
    }

    function filterCompletedTasks() {
        clickOn($('a[href="#/completed"]'));
        changeWindowHash();
    }

    function toggleAllCompleted() {
        clickOn($('#toggle-all'));
    }

    function clearCompleted() {
        clickOn($('#clear-completed'));
    }

    global.pressEnter = pressEnter;
    global.typeOn = typeOn;
    global.addTask = addTask;
    global.filterCompletedTasks = filterCompletedTasks;
    global.toggleAllCompleted = toggleAllCompleted;
    global.clearCompleted = clearCompleted;


}(this, jQuery);


