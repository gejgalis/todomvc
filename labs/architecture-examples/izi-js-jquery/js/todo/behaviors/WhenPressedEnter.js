todo.behaviors.WhenPressedEnter = Class.create(
    {
        ENTER_KEY: 13,

        init: function () {
            // Fixes (this) scope of event handler
            this._performBehavior = $.proxy(this._performBehavior, this);
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

        then: function (behavior, scope) {
            this.behavior = behavior;
            this.scope = scope;
            return this;
        },

        _performBehavior: function (event) {
            if (event.keyCode !== this.ENTER_KEY) {
                return;
            }

            if (typeof this.behavior === "function") {
                this.behavior.apply(this.scope, arguments);
            } else {
                this.behavior.perform();
            }
        }
    }
);