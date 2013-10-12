todo.views.FooterAndMainView = Class.create({

    toggleFooterAndMain: izi.inject("todo.behaviors.ToggleFooterAndMain"),
    listModel: izi.inject("todo.models.TasksListModel"),

    iziInit: function () {
        izi.perform(this.toggleFooterAndMain).whenChangeOf("allCount").on(this.listModel);
        this.toggleFooterAndMain.perform();
    }
});
