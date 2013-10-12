todo.models.TaskModel = izi.modelOf(
    {
        fields: [
            {name: "id"},
            {name: "title", initialValue: ""},
            {name: "completed", initialValue: false},
            {name: "displayed", initialValue: false}
        ],

        toggleCompleted: function () {
            this.completed(!this.completed());
        },

        fromRS: function (task) {
            this.id(task.id);
            this.title(task.title);
            this.completed(task.completed);
            return this;
        },

        toRQ: function () {
            return {
                title: this.title(),
                id: this.id(),
                completed: this.completed()
            };
        }
    }
);