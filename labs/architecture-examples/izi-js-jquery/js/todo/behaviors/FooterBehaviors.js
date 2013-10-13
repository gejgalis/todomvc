todo.behaviors.FooterBehaviors = Class.create(
    {
        model: izi.inject("todo.models.TasksListModel"),

        showHideCompletedButton: function () {
            var completedCount = this.model.getCompletedCount(),
                button = $("#clear-completed");

            if (completedCount === 0) {
                button.hide();
            } else {
                button.show();
            }
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