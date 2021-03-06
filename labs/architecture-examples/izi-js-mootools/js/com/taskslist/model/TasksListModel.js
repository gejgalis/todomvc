/**
 * @class com.taskslist.model.TasksListModel
 */
com.taskslist.model.TasksListModel = izi.modelOf(
    {
        fields: [
            {name: "items"}
        ],

        getSourceItems: function () {
            if (!this.items()) {
                this.items([]);
            }
            return this.items();
        },

        /**
         * @member com.taskslist.model.TasksListModel
         * @param taskModel
         */
        addTaskModel: function (taskModel) {
            this.getSourceItems().push(taskModel);

            taskModel.registry = izi.perform(this.updateItems, this).whenChangeOf("completed").on(taskModel);
            this.updateItems();
        },

        /**
         * @member com.taskslist.model.TasksListModel
         * @param taskModel
         */
        removeTaskModel: function (taskModel) {
            taskModel.registry.stopObserving();
            delete taskModel.registry;
            org.izi.utils.removeItem(this.getSourceItems(), taskModel);
            this.updateItems();
        },

        getActiveCount: function () {
            var count = 0;
            this.getSourceItems().forEach(function (item) {
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
            return this.getSourceItems().length;
        },

        getAllCompleted: function () {
            return this.getCompletedCount() > 0 && this.getActiveCount() === 0;
        },

        updateItems: function () {
            if (this.updatingPaused) {
                return;
            }

            var filterFn = this.filterFn,
                sourceItems = this.getSourceItems();

            sourceItems.forEach(function (item) {
                if (!filterFn || filterFn(item) === true) {
                    item.displayed(true);
                } else {
                    item.displayed(false);
                }
            });

            this.dispatchEvent("change", ["items"]);
            this.updateItemsCount();
        },

        updateItemsCount: function () {
            this.dispatchEvent("change", ["allCount"]);
            this.dispatchEvent("change", ["activeCount"]);
            this.dispatchEvent("change", ["completedCount"]);
            this.dispatchEvent("change", ["allCompleted"]);
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

            this.getSourceItems().forEach(function (item) {
                if (item.completed()) {
                    itemsToRemove.push(item);
                }
            });

            itemsToRemove.forEach(function (item) {
                me.removeTaskModel(item);
            });
        },

        toggleAllComplete: function () {
            this.updatingPaused = true;

            this.getSourceItems().forEach(function (item) {
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
                me.addTaskModel(new com.task.model.TaskModel().fromRS(task));
            })
        },

        toRQ: function () {
            var tasks = [];
            this.items().forEach(function (taskModel) {
                tasks.push(taskModel.toRQ())
            })
            return tasks;
        }
    }
);