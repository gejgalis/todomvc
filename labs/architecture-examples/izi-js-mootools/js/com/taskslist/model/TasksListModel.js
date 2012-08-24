/**
 * @class com.taskslist.model.TasksListModel
 */
com.taskslist.model.TasksListModel = izi.modelOf(
    {
        fields: [
            {name: "items", initialValue: []}
        ],

        getSourceItems: function () {
            if (!this.sourceItems) {
                this.sourceItems = [];
            }
            return this.sourceItems;
        },

        /**
         * @member com.taskslist.model.TasksListModel
         * @param taskModel
         */
        addTaskModel: function (taskModel) {
            this.getSourceItems().push(taskModel);

            izi.bind().valueOf(taskModel, "isDone").to(this.updateItemsCount, this);
            this.updateItems();
        },

        /**
         * @member com.taskslist.model.TasksListModel
         * @param taskModel
         */
        removeTaskModel: function (taskModel) {
            org.izi.utils.removeItem(this.getSourceItems(), taskModel);
            this.updateItems();
        },

        getActiveCount: function () {
            var count = 0;
            org.izi.utils.forEach(this.getSourceItems(), function (item) {
                if (!item.isDone()) {
                    count++;
                }
            });
            return count;
        },

        getAllCount: function () {
            return this.getSourceItems().length;
        },

        updateItems: function () {
            var filterFn = this.filterFn,
                items = [],
                sourceItems = this.getSourceItems();

            org.izi.utils.forEach(sourceItems, function (item) {
                if (!filterFn || filterFn(item) === true) {
                    items.push(item);
                }
            });

            this.items(items);
            this.updateItemsCount();
        },

        updateItemsCount: function () {
            this.dispatchEvent("change", ["activeCount"]);
            this.dispatchEvent("change", ["allCount"]);
        },

        filter: function (filterFn) {
            this.filterFn = filterFn;
            this.updateItems();
        },

        filterCompleted: function () {
            this.filter(function (item) {
                return item.isDone();
            })
        },

        filterActive: function () {
            this.filter(function (item) {
                return !item.isDone();
            })
        },

        filterAll: function () {
            this.filter(undefined);
        }
    }
);