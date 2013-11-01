todo.behaviors.whenPressedEnter = function (target, action, scope) {

    var ENTER_KEY = 13;

    function handler(event) {
        if (event.keyCode !== ENTER_KEY) {
            return;
        }

        action.apply(scope);
    }

    target.on("keydown", handler);

    return function () {
        target.off("keydown", handler);
    }
};