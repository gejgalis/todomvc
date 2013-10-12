/**
 * @class todo.models.TasksListModel
 */
todo.models.TasksListModel = izi.modelOf(
    {
        fields: ["items"],

        init: function () {
            this.sourceItems = [];
        },

        getSourceItems: function () {
            return this.sourceItems;
        },

        /**
         * @member todo.models.TasksListModel
         * @param taskModel
         */
        addTaskModel: function (taskModel) {
            this.getSourceItems().push(taskModel);

            taskModel.registry = izi.perform(this.updateItems, this).whenChangeOf("title", "completed").on(taskModel);
            this.updateItems();
        },

        /**
         * @member todo.models.TasksListModel
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
                sourceItems = this.getSourceItems(),
                items = [];

            sourceItems.forEach(function (item) {
                if (!filterFn || filterFn(item) === true) {
                    items.push(item);
                }
            });

            this.setItems(items);
            this.updateItemsCount();
        },

        updateItemsCount: function () {
            this.dispatchChange("allCount");
            this.dispatchChange("activeCount");
            this.dispatchChange("completedCount");
            this.dispatchChange("allCompleted");
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
                me.addTaskModel(new todo.models.TaskModel().fromRS(task));
            })
        },

        toRQ: function () {
            var tasks = [];
            this.getSourceItems().forEach(function (taskModel) {
                tasks.push(taskModel.toRQ())
            });
            return tasks;
        },

        findById: function (id) {
            var result = undefined;
            this.getSourceItems().forEach(function (taskModel) {
                if (taskModel.getId() === id) {
                    result = taskModel;
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