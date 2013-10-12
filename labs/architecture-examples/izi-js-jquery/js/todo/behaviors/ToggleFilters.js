todo.behaviors.ToggleFilters= Class.create(
    {
        perform: function (event) {
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
        }
    }
);