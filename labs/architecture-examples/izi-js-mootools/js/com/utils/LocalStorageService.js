
com.utils.LocalStorageService = new Class(
    {
        initialize: function (storageKey) {
            this.storageKey = storageKey;
            if (!localStorage.getItem(storageKey)) {
                localStorage.setItem(storageKey, JSON.stringify({}));
            }

            this.data = JSON.parse(localStorage.getItem(storageKey));
        },

        getItem: function (key) {
            return this.data[key];
        },

        setItem: function (key, value) {
            this.data[key] = value;
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        }
    });