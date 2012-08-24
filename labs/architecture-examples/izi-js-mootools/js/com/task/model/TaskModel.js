com.task.model.TaskModel = izi.modelOf(
    {
        fields: [
            {name: "label", initialValue: ""},
            {name: "isDone", initialValue: false},
            {name: "taskClass", initialValue: ""}
        ],

        toggleCompleted: function () {
            var toggledCompleted = !this.isDone();
            this.isDone(toggledCompleted);
            this.taskClass(toggledCompleted ? "completed" : "");
        }
    }
);