com.taskslist.behaviors.ToggleFilters= new Class(
    {
        perform: function (route) {
            var filters = $$("#filters a");

            filters.forEach(function (filter) {
                if (filter.get('href') === '#' + route) {
                    filter.set('class', 'selected');
                } else {
                    filter.set('class', '');
                }
            });
        }
    }
);