com.task.model.TaskModel = izi.modelOf(
    {
        fields: [
            {name: "id"},
            {name: "title", initialValue: ""},
            {name: "completed", initialValue: false},
            {name: "displayed", initialValue: false},
            {name: "taskClass", initialValue: ""}
        ],

        toggleCompleted: function () {
            this.completed(!this.completed());
            this.updateTaskClass();
        },

        updateTaskClass: function () {
            this.taskClass(this.completed() ? "completed" : "");
        },

        fromRS: function (task) {
            this.id(task.id);
            this.title(task.title);
            this.completed(task.completed);
            this.updateTaskClass();
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