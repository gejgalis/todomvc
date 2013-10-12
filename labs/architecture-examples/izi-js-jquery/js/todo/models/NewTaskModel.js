/**
 * @class todo.models.NewTaskModel
 * @type {*}
 */
todo.models.NewTaskModel = izi.modelOf(
    {
        fields: [
            {name: "title", defaultValue: ""}
        ],

        clear: function () {
            this.title("");
        }
    }
);