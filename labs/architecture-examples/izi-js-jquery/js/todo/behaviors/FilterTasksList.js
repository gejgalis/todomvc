todo.behaviors.FilterTasksList = Class.create(
    {
        listModel: izi.inject("todo.models.TasksListModel"),
        filtersModel: izi.inject("todo.models.FiltersModel"),

        iziInit: function () {
            var listModel = this.listModel;

            this.filterMap = {
                'all': listModel.filterAll,
                'active': listModel.filterActive,
                'completed': listModel.filterCompleted
            };

            this.perform();
        },

        perform: function () {
            var selectedFilter = this.filtersModel.getSelectedFilter();
            this.filterMap[selectedFilter].apply(this.listModel);
        }
    }
);