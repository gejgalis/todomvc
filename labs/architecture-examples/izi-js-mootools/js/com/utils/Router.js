com.utils.Router = new Class(
    {
        Implements: Events,

        iziInit: function () {
            var me = this,
                triggerRouting;

            crossroads.addRoute('/');
            crossroads.addRoute('/active');
            crossroads.addRoute('/completed');
            crossroads.routed.add(function (route) {
                me.fireEvent('routeChange', route);
            });

            triggerRouting = function() {
                crossroads.parse(location.hash.replace('#', ''));
            };

            window.onhashchange = triggerRouting;

            triggerRouting();
        }
    });
