todo.behaviors.WhenPressedEnter = Class.create(
    {
        ENTER_KEY: 13,

        init: function () {
            var me = this;

            this._performBehavior = function (event) {
                if (event.keyCode === me.ENTER_KEY) {
                    if (typeof me.behavior === "function") {
                        me.behavior.apply(me.scope, arguments);
                    } else {
                        me.behavior.perform();
                    }
                }
            }
        },

        register: function (target) {
            if (target instanceof jQuery) {
                target.on("keydown", this._performBehavior);
            } else {
                target[0].on("keydown", target[1], this._performBehavior);
            }
        },

        unregister: function (target) {
            if (target instanceof jQuery) {
                target.off("keydown", this._performBehavior);
            } else {
                target[0].off("keydown", target[1], this._performBehavior);
            }
        },

        then: function(behavior, scope) {
            this.behavior = behavior;
            this.scope = scope;
            return this;
        }
    }
);