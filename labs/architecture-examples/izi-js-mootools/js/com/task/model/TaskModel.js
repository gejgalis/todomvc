com.task.model.TaskModel = izi.modelOf(
    {
        fields: [
            {name: "title", initialValue: ""},
            {name: "completed", initialValue: false},
            {name: "displayed", initialValue: false},
            {name: "taskClass", initialValue: ""}
        ],

        toggleCompleted: function () {
            var toggledCompleted = !this.completed();
            this.completed(toggledCompleted);
            this.taskClass(toggledCompleted ? "completed" : "");
        }
    }
);