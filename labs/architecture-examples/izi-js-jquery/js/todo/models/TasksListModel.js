/**
 * @class todo.models.TasksListModel
 */
todo.models.TasksListModel = izi.modelOf(
    {
        fields: ["items", "sourceItems"],

        init: function () {
            this.items([]);
            this.sourceItems([]);
        },

        /**
         * @member todo.models.TasksListModel
         * @param {todo.models.TaskModel} task
         */
        addTask: function (task) {
            this.sourceItems().push(task);
            task.observer = izi.perform(this.updateItems, this).whenChangeOf("title", "completed").on(task);
            this.updateItems();
        },

        /**
         * @member todo.models.TasksListModel
         * @param {todo.models.TaskModel} task
         */
        removeTask: function (task) {
            task.observer.stopObserving();
            delete task.observer;
            org.izi.utils.removeItem(this.sourceItems(), task);
            this.updateItems();
        },

        getActiveCount: function () {
            var count = 0;
            this.sourceItems().forEach(function (item) {
                if (!item.completed()) {
                    count++;
                }
            });
            return count;
        },

        getCompletedCount: function () {
            return this.getAllCount() - this.getActiveCount();
        },

        getAllCount: function () {
            return this.sourceItems().length;
        },

        getAllCompleted: function () {
            return this.getCompletedCount() > 0 && this.getActiveCount() === 0;
        },

        hasAnyTasks: function () {
            return this.getAllCount() > 0;
        },

        hasCompletedTasks: function () {
            return this.getCompletedCount() > 0;
        },

        updateItems: function () {
            if (this.updatingPaused) {
                return;
            }

            var filterFn = this.filterFn,
                items = [];

            this.sourceItems().forEach(function (item) {
                if (!filterFn || filterFn(item) === true) {
                    items.push(item);
                }
            });

            this.items(items);
            this.updateItemsCount();
        },

        updateItemsCount: function () {
            this.dispatchChange("allCount");
            this.dispatchChange("activeCount");
            this.dispatchChange("completedCount");
            this.dispatchChange("allCompleted");
            this.dispatchChange("hasAnyTasks");
            this.dispatchChange("hasCompletedTasks");
        },

        filter: function (filterFn) {
            this.filterFn = filterFn;
            this.updateItems();
        },

        filterCompleted: function () {
            this.filter(function (item) {
                return item.completed();
            })
        },

        filterActive: function () {
            this.filter(function (item) {
                return !item.completed();
            })
        },

        filterAll: function () {
            this.filter(undefined);
        },

        clearCompleted: function () {
            var me = this,
                itemsToRemove = [];

            this.sourceItems().forEach(function (item) {
                if (item.completed()) {
                    itemsToRemove.push(item);
                }
            });

            itemsToRemove.forEach(function (item) {
                me.removeTask(item);
            });
        },

        toggleAllComplete: function () {
            this.updatingPaused = true;

            this.sourceItems().forEach(function (item) {
                if (!item.completed()) {
                    item.toggleCompleted();
                }
            });

            this.updatingPaused = false;
            this.updateItems();
        },

        fromRS: function (tasks) {
            var me = this;
            tasks.forEach(function (task) {
                me.addTask(new todo.models.TaskModel().fromRS(task));
            })
        },

        toRQ: function () {
            var tasks = [];
            this.sourceItems().forEach(function (task) {
                tasks.push(task.toRQ())
            });
            return tasks;
        },

        findById: function (id) {
            var result = undefined;
            this.sourceItems().forEach(function (task) {
                if (task.getId() === id) {
                    result = task;
                    return false;
                }
            });
            return result;
        },

        equals: function (val1, val2) {
            return val1 === val2;
        }
    }
);