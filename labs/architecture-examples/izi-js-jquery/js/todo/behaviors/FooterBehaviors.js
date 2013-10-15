todo.behaviors.FooterBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        init: function () {
            this.toggleSelectedFilter = $.proxy(this.toggleSelectedFilter, this);
            this.clearCompleted = $.proxy(this.clearCompleted, this);
        },

        toggleSelectedFilter: function (event) {
            var filters = $("#filters a"),
                route = event.route;

            filters.each(function (index, a) {
                var filter = $(a);
                if (filter.attr('href') === '#' + route) {
                    filter.attr('class', 'selected');
                } else {
                    filter.attr('class', '');
                }
            });
        },

        clearCompleted: function (event) {
            this.model.clearCompleted();
        }
    }
);