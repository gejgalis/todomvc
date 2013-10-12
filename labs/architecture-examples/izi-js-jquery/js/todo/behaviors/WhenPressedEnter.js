todo.behaviors.WhenPressedEnter = Class.create(
    {
        ENTER_KEY: 13,

        init: function () {
            var me = this;

            this._performBehavior = function (event) {
                if (event.keyCode === me.ENTER_KEY) {
                    me.behavior.perform();
                }
            }
        },

        register: function (target) {
            target.on("keydown", this._performBehavior);
        },

        unregister: function (target) {
            target.off("keydown", this._performBehavior);
        },

        then: function(behavior) {
            this.behavior = behavior;
            return this;
        }
    }
);