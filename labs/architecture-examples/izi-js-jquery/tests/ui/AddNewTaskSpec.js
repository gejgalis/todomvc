describeUi("Todo - Add new task", "index.html", function () {

    var $, list;

    beforeEach(function () {
        $ = jQuery;
        list = $("#todo-list");
    });

    afterEach(function () {
        toggleAllCompleted();
        clearCompleted();
    });

    it("Should add a new task when ENTER pressed", function () {

        // when
        addTask("Buy a milk");

        // then
        expect(list.find('li').length).toBe(1);
        expect(list.find('.view > label')).toHaveText('Buy a milk');
        expect(list.find('.view > input[type="checkbox"]')).not.toBeChecked();
        expect(list.find('li > .edit')).toHaveValue('Buy a milk');
        expect($('#todo-count')).toContainHtml("<strong>1</strong> item left.");
    });

    it("Should add more tasks than one", function () {

        // when
        addTask("Buy a milk");
        addTask("Clean the floor");

        // then
        var labels = list.find('.view > label'),
            editors = list.find('li > .edit');

        expect(list.find('li').length).toBe(2);

        expect(labels[0]).toHaveText('Buy a milk');
        expect(labels[1]).toHaveText('Clean the floor');

        expect(editors[0]).toHaveValue('Buy a milk');
        expect(editors[1]).toHaveValue('Clean the floor');

        expect($('#todo-count')).toContainHtml("<strong>2</strong> items left.");
    });

});