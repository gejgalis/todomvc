todo.views.FooterFormatters = Class.create(
    {
        activeCountFormatter: function (value) {
            if (value === 1) {
                return "<strong>1</strong> item left.";
            } else {
                return "<strong>" + value + "</strong>" + " items left.";
            }
        },

        clearCompletedFormatter: function (value) {
            return "Clear completed (" + value + ")";
        }
    }
);