todo.models.FiltersModel = izi.modelOf(
    {
        fields: ["all", "active", "completed",
                 {name: "selectedFilter", defaultValue: "all"}],

        setSelectedFilter: function (selected) {
            this.select("all", selected);
            this.select("active", selected);
            this.select("completed", selected);

            this.set("selectedFilter", selected);
        },

        select: function (filter, selected) {
            var cls = filter === selected ? "selected" : "";
            this.set(filter, cls);
        }
    }
);