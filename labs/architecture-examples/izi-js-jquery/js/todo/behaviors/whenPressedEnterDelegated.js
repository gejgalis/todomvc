todo.behaviors.whenPressedEnterDelegated = function (selector) {
    return function ($target, action, scope) {
        function handler(event) {
            if (event.keyCode !== 13) {
                return;
            }
            action.call(scope, event);
        }

        $target.on("keydown", selector, handler);
        return function () {
            $target.off("keydown", selector, handler);
        }
    }
};