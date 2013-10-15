todo.utils.showHide = function ($target) {
    return function (value) {
        if (value) {
            $target.show();
        } else {
            $target.hide();
        }
    }
};
