describeUi("Todo - Toggle all completed", "index.html", function () {

    var $, list;

    beforeEach(function () {
        $ = jQuery;
        list = $('#todo-list');
    });

    it("Should toggle all tasks as completed", function () {

        // given
        addTask("Buy a milk");
        addTask("Clear the floor");
        filterCompletedTasks();
        expect(list.find("li")).toBeHidden();

        // when
        toggleAllCompleted();

        // then
        expect(list.find("li")).toBeVisible();
    });

});