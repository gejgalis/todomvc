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