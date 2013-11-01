todo.utils.bindMethods = function (obj, methods) {
    methods.forEach(function (method) {
        obj[method] = $.proxy(obj[method], obj);
    })
}