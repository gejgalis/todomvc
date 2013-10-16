todo.utils.Router = Class.create(
    {
        model: izi.inject("todo.models.FiltersModel"),

        routeToFilterMap: {
            "/": "all",
            "/active": "active",
            "/completed": "completed"
        },

        iziInit: function () {
            var me = this,
                model = this.model,
                triggerRouting;

            crossroads.addRoute('/');
            crossroads.addRoute('/active');
            crossroads.addRoute('/completed');
            crossroads.routed.add(function (route) {
                model.setSelectedFilter(me.routeToFilterMap[route] || "all");
            });

            triggerRouting = function () {
                crossroads.parse(location.hash.replace('#', ''));
            };

            window.onhashchange = triggerRouting;

            triggerRouting();
        }
    }
);