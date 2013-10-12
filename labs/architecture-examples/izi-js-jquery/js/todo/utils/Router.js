todo.utils.Router = function () {
    var $router = $("<router/>");

    $router.iziInit = function () {
        var me = this,
            triggerRouting;

        crossroads.addRoute('/');
        crossroads.addRoute('/active');
        crossroads.addRoute('/completed');
        crossroads.routed.add(function (route) {
            me.trigger({type: "routeChange", route: route});
        });

        triggerRouting = function () {
            crossroads.parse(location.hash.replace('#', ''));
        };

        window.onhashchange = triggerRouting;

        triggerRouting();
    };

    return $router;
}