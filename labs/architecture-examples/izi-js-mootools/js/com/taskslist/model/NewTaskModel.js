com.taskslist.model.NewTaskModel = izi.modelOf(
    {
        fields: [
            {name: "description", defaultValue: ""}
        ],

        clear: function () {
            this.description("");
        }
    }
);