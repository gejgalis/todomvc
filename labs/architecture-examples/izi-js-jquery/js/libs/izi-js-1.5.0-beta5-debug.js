/*
 * izi-js-1.5.0-beta5 2013-10-11 15:17
 *
 * Copyright (C) 2012 by izi-js contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var treatMeAsNonMinifiedFileInJetBrainsIDE;

this.org="org"in this?this.org:{};this.izi="izi"in this?this.izi:{};this.org.izi="izi"in this.org?this.org.izi:{};this.org.izi.utils="utils"in this.org.izi?this.org.izi.utils:{};this.org.izi.sanity={};org.izi.utils.indexOf=function(){function a(d,a){return Array.prototype.indexOf.call(d,a)}function c(d,a){var c,g=d.length;for(c=0;c<g;c+=1)if(d[c]===a)return c;return-1}return"function"===typeof Array.prototype.indexOf?a:c}();
org.izi.utils.arrayContains=function(a,c){return-1!==org.izi.utils.indexOf(a,c)};org.izi.utils.forEach=function(){function a(d,a,c){Array.prototype.forEach.call(d,a,c)}function c(d,a,c){var g,h=d.length;for(g=0;g<h;g+=1)a.call(c,d[g],g,d)}return"function"===typeof Array.prototype.forEach?a:c}();
org.izi.utils.some=function(){function a(a,c,f){return Array.prototype.some.call(a,c,f)}function c(a,c,f){var g=a.length>>>0;if("function"!=typeof c)throw new TypeError;for(var h=0;h<g;h++)if(h in a&&c.call(f,a[h],h,a))return!0;return!1}return"function"===typeof Array.prototype.some?a:c}();
org.izi.utils.every=function(){function a(a,c,f){return Array.prototype.every.call(a,c,f)}function c(a,c,f){for(var g=a.length>>>0,h=0;h<g;h++)if(h in a&&!c.call(f,a[h],h,a))return!1;return!0}return"function"===typeof Array.prototype.every?a:c}();
org.izi.utils.typeOf=function(a){if(void 0===a)return"undefined";if(null===a)return"null";switch(typeof a){case "string":return"String";case "number":return"Number";case "boolean":return"Boolean";case "function":return"Function"}switch(Object.prototype.toString.call(a)){case "[object Array]":return"Array";case "[object Date]":return"Date";case "[object RegExp]":return"RegExp";case "[object Boolean]":return"Boolean";case "[object Number]":return"Number"}if("object"===typeof a)return"Object";throw Error("Couldn't find type of given value");
};org.izi.utils.ClassNotFound=function(a){this.message='Class name given as string: "'+a+"\" couldn't be resolved as a class"};org.izi.utils.ClassNotFound.prototype=Error();org.izi.utils.getClassByName=function(a){return function(c){var d,e=c.split(".");d=a;org.izi.utils.forEach(e,function(a){a=d[a];if(void 0===a)throw new org.izi.utils.ClassNotFound(c);d=a});return d}}(this);
org.izi.utils.getCallerLineProvider=function(a){var c=Error();return function(){if(c.stack){var d=c.stack.split("\n"),e=-1<navigator.userAgent.indexOf("WebKit")?2+a:1+a;return d[e]}return" [IE doesn't provide line number in call stack]"}};
org.izi.sanity.Sanity=function(){var a=function(a){this.config=a.withCallerLineProvider(org.izi.utils.getCallerLineProvider(3))};a.prototype.args=function(){var a=arguments;org.izi.utils.forEach(a,function(d){if(d&&d.isVarArg&&a[a.length-1]!==d)throw Error("izi.varargOf() must be declared only once and must be placed at the end");});this.config.addSignatures(arguments);return new org.izi.sanity.Check(this.config)};return a}();
org.izi.sanity.Config=function(){var a=function(){this.signatures=[]};a.prototype.withName=function(a){this.name=a;return this};a.prototype.withCallerLineProvider=function(a){this.callerLineProvider=a;return this};a.prototype.addSignatures=function(a){this.signatures.push(a)};return a}();
org.izi.sanity.SingleArgConfig=function(a){function c(o,b){return org.izi.utils.every(b,function(b){return"function"===typeof o[b]})}function d(b,a){return org.izi.utils.every(a,function(a){return void 0!==b[a]})}function e(b){return"String"===org.izi.utils.typeOf(b)&&-1<b.indexOf("[")}function f(b,p){switch(b){case "*":return!0;case "Boolean":case "RegExp":case "Date":case "Number":case "String":case "Object":case "Function":case "Array":return org.izi.utils.typeOf(p).toLowerCase()===b.toLowerCase();
default:if("Function"===org.izi.utils.typeOf(b))return p instanceof b;try{return p instanceof org.izi.utils.getClassByName(b)}catch(c){return"console"in a&&console.warn(c.message),!0}}}function g(b){var a=[];org.izi.utils.forEach(b,function(b){e(b.type)||a.push(b.type)});return a}function h(b){var a=[];org.izi.utils.forEach(b,function(b){e(b.type)&&a.push(b.type)});return a}function k(b,a){return org.izi.utils.some(b,function(b){return f(b,a)})}function l(b,a){return 0===b.length||"Array"!==org.izi.utils.typeOf(a)?
!1:org.izi.utils.every(a,function(a){return org.izi.utils.some(b,function(b){b=b.replace(/[[]]/g,"");return f(b,a)})})}function i(b){if(0===b.length)return"";var a=[];org.izi.utils.forEach(b,function(b){a.push(b+"()")});return"~"+a.join("~")}function j(b){var a=[];org.izi.utils.forEach(b,function(b){a.push(b.typeLabel||b.type)});return a.join("|")}var b=function(b){this.name=b;this.expectedFunctions=[];this.expectedProperties=[]};b.prototype.ofArray=function(b){return!b||"*"===b?this.of("Array"):
this.of(b+"[]")};b.prototype.ofObject=function(){return this.of("Object")};b.prototype.ofDate=function(){return this.of("Date")};b.prototype.ofString=function(){return this.of("String")};b.prototype.ofNumber=function(){return this.of("Number")};b.prototype.ofBoolean=function(){return this.of("Boolean")};b.prototype.ofRegExp=function(){return this.of("RegExp")};b.prototype.ofFunction=function(){return this.of("Function")};b.prototype.ofAny=function(){return this.of("*")};b.prototype.of=function(b,
a){var c=this;if("function"===typeof b&&!a)throw Error("You must provide type label if you expect some class: izi.arg().of(SomeClass, 'SomeClass')");if("String"===org.izi.utils.typeOf(b)){var d=b.split(/[|\/]/);this.types=[];org.izi.utils.forEach(d,function(b){c.types.push({type:b})})}if("Function"===org.izi.utils.typeOf(b))this.types=[{type:b,typeLabel:a}];return this};b.prototype.havingFunction=function(b){this.expectedFunctions.push(b);return this};b.prototype.havingFunctions=function(){org.izi.utils.forEach(arguments,
function(b){this.havingFunction(b)},this);return this};b.prototype.havingProperty=function(b){this.expectedProperties.push(b);return this};b.prototype.havingProperties=function(){org.izi.utils.forEach(arguments,function(b){this.havingProperty(b)},this);return this};b.prototype.matches=function(b){if(void 0!==b&&null!==b&&(!c(b,this.expectedFunctions)||!d(b,this.expectedProperties)))return!1;var a=g(this.types),e=h(this.types);return k(a,b)||l(e,b)};b.prototype.format=function(){var b=j(this.types),
a=this.name?" "+this.name:"",c=i(this.expectedFunctions),d=0===this.expectedProperties.length?"":"~"+this.expectedProperties.join("~");return"{"+b+c+d+"}"+a};return b}(this);
org.izi.sanity.VarArgConfig=function(){function a(a){var c=[],a=a.split(/[|\/]/);org.izi.utils.forEach(a,function(a){c.push(izi.arg().of(a))});return c}var c=function(c){this.argsConfigs="String"===org.izi.utils.typeOf(c)?a(c):c};c.prototype.isVarArg=!0;c.prototype.matches=function(a){return org.izi.utils.some(this.argsConfigs,function(c){return c.matches(a)})};c.prototype.format=function(){var a=[];org.izi.utils.forEach(this.argsConfigs,function(c){a.push(c.format().replace("}","...}").replace("|",
"...|"))});return a.join(",").split("},{").join("|")};return c}();
org.izi.sanity.Check=function(){function a(a){return a&&a.isVarArg}function c(c){var d=0,b;return function(){return a(b)?b:b=c[d++]}}function d(d,j){if(!org.izi.utils.some(j,a)&&d.length!==j.length)return!1;var b=c(j);return org.izi.utils.every(d,function(a){return b().matches(a)})}function e(a){var c=[];org.izi.utils.forEach(a,function(b){b=org.izi.utils.typeOf(b)+"[]";org.izi.utils.arrayContains(c,b)||c.push(b)});return 0===c.length?"Array":c.join("|")}function f(a){if(0===a.length)return"no arguments were given";
var c=[];org.izi.utils.forEach(a,function(b){"Array"===org.izi.utils.typeOf(b)?c.push("{"+e(b)+"}"):c.push("{"+org.izi.utils.typeOf(b)+"}")});return"( "+c.join(", ")+" ) was given"}function g(a){var c=[];org.izi.utils.forEach(a,function(b){c.push(b.format())});return c.join(", ")}function h(a){var c=[],b;org.izi.utils.forEach(a,function(a){b=["("];b.push(g(a));b.push(")");c.push(b.join(" "))});return"    "+c.join("\nor  ")}function k(a,c,b,o){if(!org.izi.utils.some(c,function(a){return d(b,a)}))throw a=
a+" expects one of the following arguments:\n-----------------------------------------\n"+h(c)+"\n-----------------------------------------\nbut "+f(b)+" at line:\n"+o(),Error(a);}var l=function(a){this.config=a};l.prototype.args=function(){this.config.addSignatures(arguments);return this};l.prototype.check=function(a){var c=this.config;k(c.name,c.signatures,a,c.callerLineProvider)};return l}();
org.izi.sanity.inject=function(a){function c(b){b.lastIndex=0;return b}function d(b){var a,c;if(0===b.length)return[];if(1===b.length){a=[];for(c=0;c<b[0].length;c++)a.push([b[0][c]])}else{a=[];var e=d(b.slice(1));for(c=0;c<e.length;c++)for(var f=0;f<b[0].length;f++)a.push([].concat(b[0][f],e[c]))}return a}function e(b,a){if(a)return'izi.varargOf("'+b+'")';switch(b){case "Boolean":case "RegExp":case "Date":case "Number":case "String":case "Object":case "Function":case "Array":return"izi.arg().of"+
b+"()";default:return'izi.arg().of("'+b+'")'}}function f(b){var a;org.izi.utils.some(b,function(b){if(b.isOptional)return a=b,!0});return a?a.index:-1}function g(b){var a,c;if(!b)return"";if(c=/(\S+)\s*:\s*function/.exec(b))a=c[1];else if(c=/function\s+([^(]+)/.exec(b))a=c[1];else if(c=/([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*function/.exec(b))a=c[1];return a?'"'+a+'()"':""}function h(b,a){if(!b)return[];for(var d=new j,e=0,f=c(/@param.*/ig),g,h=c(/@param[^{\n]+\{([^}]+)\}/ig),i,k=c(/@param[^{\n]+\{([^}]+)\}\s+\[/ig),
m,n;g=f.exec(b);){if(i=h.exec(b))g=k.test(g[0]),i=i[1].split(/[|\/]/),m=[],n=[],org.izi.utils.forEach(i,function(b){-1<b.indexOf("...")?m.push(b.replace(c(/\.{3}/g),"")):n.push(b)}),0<n.length&&d.add(e,n.join("|"),g,!1),0<m.length&&d.add(e,m.join("|"),!1,!0);else return l("Function parameter type not specified: \n"+b+"\n"+a),[];e++}return d.createSignatures()}function k(b,a){var d;d=[];var e;if(d=c(/@sanity\s+(.*)$/gim).exec(b))return d[1];d=h(b,a);if(0===d.length)return"";e="izi.sanityOf("+g(a)+
")";org.izi.utils.forEach(d,function(b){var a=[];org.izi.utils.forEach(b,function(b){a.push(b.arg)});e+=".args("+a.join(",")+")"});return e+=".check(arguments);"}function l(b){"java"in a&&"lang"in a.java&&"System"in a.java.lang&&a.java.lang.System.out.println("[WARN] "+b);"console"in a&&a.console.warn(b)}var i=function(b){this.text=b;this.replacements=[];this.selection={};this.lastIndex=0};i.prototype.select=function(b,a){var c;this.selection={};b.lastIndex=this.lastIndex;if(c=b.exec(this.text))this.selection.from=
b.lastIndex-c[0].length,this.lastIndex=b.lastIndex;else return null;if(a)if(a.lastIndex=this.lastIndex,a.exec(this.text))this.lastIndex=this.selection.to=a.lastIndex;else return null;else this.selection.to=this.lastIndex;return this};i.prototype.insertAfter=function(b){this.replacements.push({from:this.selection.to,to:this.selection.to,text:b})};i.prototype.getResult=function(){var b,a,c=this.text;for(b=this.replacements.length-1;-1<b;b--)a=this.replacements[b],c=c.slice(0,a.from)+a.text+c.slice(a.to,
c.length);return c};i.prototype.getSelectedText=function(){return this.text.slice(this.selection.from,this.selection.to)};var j=function(){this.parameters=[]};j.prototype.add=function(a,c,d,f){void 0===this.parameters[a]&&(this.parameters[a]=[]);this.parameters[a].push({arg:e(c,f),index:a,type:c,isOptional:d,isVarArg:f})};j.prototype.createSignatures=function(){var a=d(this.parameters),c=[],e,g,h;org.izi.utils.forEach(a,function(a){h=f(a);if(-1<h){e=[];for(g=0;g<h;g++)e.push(a[g]);c.push(e);for(g=
h;g<a.length;g++)e=[],org.izi.utils.some(a,function(a,b){e.push(a);if(b===g)return!0}),c.push(e)}else c.push(a)});return c};return function(a){for(var a=new i(a),d,e;a.select(/\/\*\*/g,/\*\//g);)if(d=a.getSelectedText(),!(c(/@(no-?sanity|private|protected)/gi).test(d)||!1===c(/@(param|sanity)/gi).test(d))&&a.select(c(/.*function[^\{]+\{/g)))e=a.getSelectedText(),(d=k(d,e))&&a.insertAfter(d);return a.getResult()}}(this);
izi.sanityOf=function(a){return new org.izi.sanity.Sanity((new org.izi.sanity.Config).withName(a||"function"))};izi.arg=function(a){return new org.izi.sanity.SingleArgConfig(a||"")};izi.varargOf=function(){return 1===arguments.length&&"String"===org.izi.utils.typeOf(arguments[0])?new org.izi.sanity.VarArgConfig(arguments[0]):new org.izi.sanity.VarArgConfig(arguments)};izi.sanityInjectTo=function(a){return org.izi.sanity.inject(a)};
(function(a){var c=function(){var c=a.getElementsByTagName("script"),e,f,g=/^.*izi(\-js)?\-([^-]+)?\-sanity(\-min)?\.js/;for(e=c.length-1;0<=e;e-=1)if(f=c[e],f.src.match(g)){if(f.getAttribute("sanitize"))return f.getAttribute("sanitize").toString().split(";");if(-1<f.src.indexOf("?"))return f.src.replace(g,"").replace("?","").split(";");break}return null}();c&&org.izi.utils.forEach(c,function(c){if(c){var e;(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",
c,!1),e.send(null),e=e.responseText):e=!1;e=izi.sanityInjectTo(e);var f=a.createElement("script");f.setAttribute("fromUrl",c);f.text=e;f.type="text/javascript";a.head.appendChild(f)}})})(document,this);
// ---- End of izi-sanity
this.org = 'org' in this ? this.org : {};
this.izi = 'izi' in this ? this.izi : {};
this.org.izi = 'izi' in this.org ? this.org.izi : {};
this.org.izi.utils = 'utils' in this.org.izi ? this.org.izi.utils : {};
this.org.izi.model = {};
this.org.izi.ioc = {
    bean: {}
};
this.org.izi.behavior = {
    impl: {}
};
this.org.izi.binding = {
    impl: {
        nested: {}
    }
};
this.org.izi.events = {
};
this.org.izi.queue = {
    impl: {}
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {*} item
 * @return {Number}
 */
org.izi.utils.indexOf = (function () {

    function byIndexOf(array, item) {
        return Array.prototype.indexOf.call(array, item);
    }

    function byLoop(array, item) {
        var i, ln = array.length;

        for (i = 0; i < ln; i = i + 1) {
            if (array[i] === item) {
                return i;
            }
        }

        return -1;
    }

    function hasIndexOf() {
        return (typeof Array.prototype.indexOf) === 'function';
    }

    return hasIndexOf() ? byIndexOf : byLoop;
}());
/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {*} item
 * @return {Boolean}
 */
org.izi.utils.arrayContains = function (array, item) {
    return org.izi.utils.indexOf(array, item) !== -1;
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {*} item
 */
org.izi.utils.removeItem = function (array, item) {
    var start = org.izi.utils.indexOf(array, item);
    if (start !== -1) {
        array.splice(start, 1);
    }
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {String} text
 * @return {String}
 */
org.izi.utils.capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.substr(1);
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {Function} item
 * @param {Object} scope
 */
org.izi.utils.forEach = (function () {

    function byForEach(array, fn, scope) {
        Array.prototype.forEach.call(array, fn, scope);
    }

    function byLoop(array, fn, scope) {
        var i,
            ln = array.length;

        for (i = 0; i < ln; i = i + 1) {
            fn.call(scope, array[i], i, array);
        }
    }

    function hasForEach() {
        return (typeof Array.prototype.forEach) === 'function';
    }

    return hasForEach() ? byForEach : byLoop;
}());/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {Function} item
 * @param {Object} scope
 */
org.izi.utils.some = (function () {

    function bySome(array, fn, scope) {
        return Array.prototype.some.call(array, fn, scope);
    }

    function byLoop(array, fn, scope) {

        var len = array.length >>> 0;
        if (typeof fn != "function")
            throw new TypeError();

        for (var i = 0; i < len; i++) {
            if (i in array && fn.call(scope, array[i], i, array))
                return true;
        }

        return false;
    }

    function hasSome() {
        return (typeof Array.prototype.some) === 'function';
    }

    return hasSome() ? bySome : byLoop;
}());/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} array
 * @param {Function} item
 * @param {Object} scope
 */
org.izi.utils.every = (function () {

    function byEvery(array, fn, scope) {
        return Array.prototype.every.call(array, fn, scope);
    }

    function byLoop(array, fn, scope) {

        var len = array.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in array && !fn.call(scope, array[i], i, array))
                return false;
        }

        return true;
    }

    function hasEvery() {
        return (typeof Array.prototype.every) === 'function';
    }

    return hasEvery() ? byEvery : byLoop;
}());/**
 * @member org.izi.utils
 * @private
 * @param value
 * @return {String}
 */
org.izi.utils.typeOf = function (value) {
    if (value === undefined) {
        return 'undefined';
    } else if (value === null) {
        return 'null';
    }

    switch (typeof value)  {
        case 'string':
            return 'String';
        case 'number':
            return 'Number';
        case 'boolean':
            return 'Boolean';
        case 'function':
            return 'Function';
    }

    switch (Object.prototype.toString.call(value)) {
        case '[object Array]':
            return 'Array';
        case '[object Date]':
            return 'Date';
        case '[object RegExp]':
            return 'RegExp';
        case '[object Boolean]':
            return 'Boolean';
        case '[object Number]':
            return 'Number';
    }

    if (typeof value === 'object') {
        return 'Object';
    } else {
        throw new Error("Couldn't find type of given value");
    }
};/**
 * @param {String} classString
 * @private
 * @constructor
 */
org.izi.utils.ClassNotFound = function (classString) {
    this.message = "Class name given as string: \"" + classString + "\" couldn't be resolved as a class";
};

org.izi.utils.ClassNotFound.prototype = new Error();/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {String} classString
 * @return {Function}
 */
org.izi.utils.getClassByName = (function (global) {

    return function (classString) {
        var currentPart,
            parts = classString.split(".");

        currentPart = global;

        org.izi.utils.forEach(parts, function (part) {
            var nextPart = currentPart[part];
            if (nextPart === undefined) {
                throw new org.izi.utils.ClassNotFound(classString);
            }
            currentPart = nextPart;
        });

        return currentPart;
    };
}(this));/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Number} stackOffset
 * @return {Function}
 */
org.izi.utils.getCallerLineProvider = function (stackOffset) {
    if (!izi.isDebug) {
        return function () {
            return "Line numbers are available only in debug version of izi-js";
        }
    }
    var error = Error();

    return function getCallerLine() {
        if (error.stack) {
            // WebKit / FireFox / Opera
            var callStack = error.stack.split("\n");
            var index = navigator.userAgent.indexOf("WebKit") > -1
                ? 3 + stackOffset // Chrome
                : 1 + stackOffset; // Firefox and Opera
            return callStack[index];
        } else {
            // IE
            return " [IE doesn't provide line number in call stack]";
        }
    }
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Object...} vararg of any Objects
 */
org.izi.utils.mergeObjects = function () {

    function copyProperties(source, target) {
        for (var key in source) {
            if (org.izi.utils.hasOwnProperty(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return function () {
        var result = {};
        for (var i = 0; i < arguments.length; i++) {
            copyProperties(arguments[i], result);
        }
        return result;
    }
}();/**
 * @member org.izi.utils
 * @method
 * @since 1.1.0
 * @private
 * @param {String} text
 * @return {String}
 */
org.izi.utils.trim = function (text) {
    return text.replace(/^\W+/, '').replace(/\W+$/, '');
};
/**
 * @member org.izi.utils
 * @method
 * @since 1.1.0
 * @private
 * @param {Function} fn
 * @param {Object} scope
 * @return {Function}
 */
org.izi.utils.curry = function (fn, scope) {
    return function () {
        fn.apply(scope, arguments);
    }
};org.izi.utils.inherit = function (Child, Parent) {
    var Proxy = function () {
    };
    Proxy.prototype = Parent.prototype;
    Child.prototype = new Proxy();
    Child.upper = Parent.prototype;
    Child.prototype.constructor = Child;
};org.izi.utils.Map = function () {

    var Map = function org_izi_utils_Map() {
        this.items = [];
    };

    Map.prototype.set = function (key, value) {
        this.getItemOrCreate(key).value = value;
    };

    Map.prototype.get = function (key) {
        var item = this.getItem(key);
        return item ? item.value : undefined;
    };

    Map.prototype.remove = function (key) {
        var item = this.getItem(key);
        if (item) {
            org.izi.utils.removeItem(this.items, item);
        }
    };

    Map.prototype.getKeys = function () {
        var keys = [];
        org.izi.utils.forEach(this.items, function (item) {
            keys.push(item.key);
        });
        return keys;
    };

    Map.prototype.getKeysOf = function (value) {
        var keys = [];
        org.izi.utils.forEach(this.items, function (item) {
            if (item.value === value) {
                keys.push(value);
            }
        });
        return keys;
    };

    Map.prototype.getValues = function () {
        var values = [];
        org.izi.utils.forEach(this.items, function (item) {
            values.push(item.value);
        });
        return values;
    };

    Map.prototype.count = function () {
        return this.items.length;
    };

    Map.prototype.countValues = function (value) {
        var count = 0;
        org.izi.utils.forEach(this.items, function (item) {
            if (item.value === value) {
                count++;
            }
        });
        return count;
    };

    Map.prototype.getItemOrCreate = function (key) {
        return this.getItem(key) || this.createItem(key);
    };

    Map.prototype.createItem = function (key) {
        var item = {
            key: key
        };
        this.items.push(item);
        return item;
    };

    Map.prototype.getItem = function (key) {
        var foundItem = undefined;
        org.izi.utils.some(this.items, function (item) {
            if (item.key === key) {
                foundItem = item;
                return true;
            }
            return false;
        });
        return foundItem;
    };

    return Map;
}();/**
 * @member org.izi.utils
 * @method
 * @since 1.2.0
 * @private
 */
org.izi.utils.log = function (global) {
    var logImpl;
    if ("console" in global) {
        logImpl = function () {
            if (global.console.log.apply) {
                global.console.log.apply(global.console, arguments);
            } else {
                // IE :)
                global.console.log(Array.prototype.slice.call(arguments));
            }

        }
    } else {
        logImpl = function () {
            // no loggers other than window.console
        }
    }

    return function () {
        logImpl.apply(global, arguments);
    }

}(this);/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Object} object host object
 * @param {String} property to be examined to
 */
org.izi.utils.hasOwnProperty = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
};/**
 * @member org.izi.utils
 * @method
 * @private
 * @param {Array} factories
 * @param {Array} args
 * @param {Object} scope
 */
org.izi.utils.findClosure = function org_izi_utils_findClosure(factories, args, scope) {
    var i, factory, closure;
    for (i = 0; i < factories.length; i = i + 1) {
        factory = factories[i];
        closure = factory.apply(scope, args);
        if (closure) {
            return closure;
        }
    }

    throw new Error("Closure not found");
};/**
 * @member org.izi.model
 */
org.izi.model.Observable = function () {

    var forEach = org.izi.utils.forEach;

    function Observable() {
        this.listeners = {};
    }

    Observable.prototype = {

        constructor: Observable,

        /**
         * @member org.izi.model.Observable
         * @noSanity
         * @param {String} type
         * @return {Object[]} array of objects containing fields: 'fn' and 'scope'
         */
        findListeners: function (type) {

            if (this.listeners[type] === undefined) {
                this.listeners[type] = [];
            }

            return this.listeners[type];
        },

        /**
         * @member org.izi.model.Observable
         * @noSanity
         * @param {String} type
         * @param {Array|Arguments} args
         */
        dispatchEvent: function (type, args) {
            var me = this;
            forEach(this.findListeners(type), function (listener) {
                listener.fn.apply(listener.scope || me, args || []);
            })
        },

        /**
         * @member org.izi.model.Observable
         * @noSanity
         * @param {String} type
         * @param {Function} fn
         * @param {Object} [scope]
         */
        addListener: function (type, fn, scope) {
            this.findListeners(type).push({fn: fn, scope: scope});
        },

        /**
         * @member org.izi.model.Observable
         * @noSanity
         * @param {String} type
         * @param {Function} fn
         */
        removeListener: function (type, fn) {
            var listeners = this.findListeners(type);

            forEach(listeners, function (listener) {
                if (listener.fn === fn) {
                    org.izi.utils.removeItem(listeners, listener);
                }
            });
        }
    };

    return Observable;
}();/**
 * @member org.izi.model
 * @extends org.izi.model.Observable
 */
org.izi.model.Model = function () {

    var forEach = org.izi.utils.forEach;

    function implementGetterAndSetter(Class, name) {
        var capitalizedName = org.izi.utils.capitalize(name),
            getter = "get" + capitalizedName,
            setter = "set" + capitalizedName;

        Class.prototype[name] = function (value) {
            if (arguments.length === 0) {
                return this[getter]();
            } else if (arguments.length === 1) {
                return this[setter](value);
            } else {
                throw new Error("Too many arguments. Setter function requires exactly one argument");
            }
        };

        Class.prototype[getter] = function () {
            return this.get(name);
        };

        Class.prototype[setter] = function (value) {
            return this.set(name, value);
        };
    }

    function createInitialData(config) {
        var data = {};

        forEach(config.fields, function (field) {
            if (org.izi.utils.typeOf(field) === "Object") {
                data[field.name] = field.defaultValue || field.initialValue;
            }
        });
        return data;
    }

    function Model() {
        Model.upper.constructor.apply(this, arguments);
        this.init();
    }

    org.izi.utils.inherit(Model, org.izi.model.Observable);

    /**
     * @member org.izi.model.Model
     * @private
     * @type {Boolean}
     */
    Model.prototype.isIziModel = true;

    /**
     * Abstract init method called from constructor
     * @member org.izi.model.Model
     * @protected
     */
    Model.prototype.init = function () {

    };

    /**
     * Retrieves value for given property name
     * @member org.izi.model.Model
     * @param {String} propertyName
     * @return {*}
     */
    Model.prototype.get = function (propertyName) {izi.sanityOf("get()").args(izi.arg().ofString()).check(arguments);
        return this.data[propertyName];
    };

    /**
     * Updates value for given property name and returns own model instance (this).
     * @member org.izi.model.Model
     * @param {String|Object} propertyName or map of pairs property=>value
     * @param {*} [value]
     * @return {org.izi.model.Model}
     */
    Model.prototype.set = function (propertyName, value) {izi.sanityOf("set()").args(izi.arg().of("String|Object")).args(izi.arg().of("String|Object"),izi.arg().of("*")).check(arguments);

        if (arguments.length === 1 && org.izi.utils.typeOf(propertyName) === "Object") {
            for (var prop in propertyName) {
                if (propertyName.hasOwnProperty(prop)) {
                    this.set(prop, propertyName[prop]);
                }
            }
            return this;
        }

        var currentValue = this.data[propertyName];

        if (!this.equals(currentValue, value)) {
            this.data[propertyName] = value;
            this.dispatchChange(propertyName, value, currentValue);
        }
        return this;
    };

    Model.prototype.dispatchChange = function (propertyName, newValue, oldValue) {
        this.dispatchEvent(propertyName + "Change", [newValue, oldValue]);
        this.dispatchEvent("change", [propertyName, newValue, oldValue]);
    };

    Model.prototype.equals = function (val1, val2) {
        if (org.izi.utils.typeOf(val1) === "Array" && org.izi.utils.typeOf(val2) === "Array") {
            return this.equalsArray(val1, val2);
        }

        return val1 === val2;
    };

    Model.prototype.equalsArray = function (arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    };

    /**
     * @private
     * @param config
     * @return {Function}
     */
    Model.define = function (config) {

        var Class = function () {
            Class.upper.constructor.apply(this);
            this.data = createInitialData(config);
        };
        org.izi.utils.inherit(Class, Model);

        forEach(config.fields, function (field) {
            var fieldName = org.izi.utils.typeOf(field) === "String"
                ? field
                : field.name;

            implementGetterAndSetter(Class, fieldName);
        });

        for (var key in config) {
            if (org.izi.utils.hasOwnProperty(config, key) && key != 'fields') {
                Class.prototype[key] = config[key];
            }
        }

        return Class;
    };


    return Model;
}();



org.izi.ioc.bean.createInstance = function (Clazz, args, props, beansContext) {

    function resolveArguments(args, beansContext) {
        var i, arg, result = [];
        for (i = 0; i < args.length; i = i + 1) {
            arg = args[i];
            if (arg && arg.isIziInjection) {
                result.push(arg.resolveBean(beansContext));
            } else {
                result.push(arg);
            }
        }
        return result;
    }

    function applyProps(instance, props) {
        if (props !== undefined) {
            for (var prop in props) {
                if (org.izi.utils.hasOwnProperty(props, prop)) {
                    instance[prop] = props[prop];
                }
            }
        }
    }

    if (org.izi.utils.typeOf(Clazz) === "String") {
        Clazz = org.izi.utils.getClassByName(Clazz);
    }

    var a = resolveArguments(args, beansContext),
        argsCount = a.length,
        instance;

    if (argsCount === 0) {
        instance = new Clazz();
    } else if (argsCount === 1) {
        instance = new Clazz(a[0]);
    } else if (argsCount === 2) {
        instance = new Clazz(a[0], a[1]);
    } else if (argsCount === 3) {
        instance = new Clazz(a[0], a[1], a[2]);
    } else if (argsCount === 4) {
        instance = new Clazz(a[0], a[1], a[2], a[3]);
    } else if (argsCount === 5) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4]);
    } else if (argsCount === 6) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4], a[5]);
    } else if (argsCount === 7) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
    } else if (argsCount === 8) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
    } else if (argsCount === 9) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
    } else if (argsCount === 10) {
        instance = new Clazz(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9]);
    } else {
        throw new Error("Too many arguments given");
    }

    applyProps(instance, props);

    return instance;
};
org.izi.ioc.bean.LazySingletonStrategy = function () {

    /**
     * Lazy Singleton strategy used in {@link org.izi.ioc.bean.BeanBuilder}
     * @class org.izi.ioc.bean.LazySingletonStrategy
     * @private
     * @constructor
     * @param {org.izi.ioc.Config} config
     */
    var LazySingletonStrategy = function org_izi_ioc_bean_LazySingletonStrategy(config) {
        this.Clazz = config.getClazz();
        this.args = config.getArguments();
        this.props = config.getProperties();
        this.instance = undefined;
    };

    LazySingletonStrategy.prototype.init = function (context) {
        return null;
    };

    LazySingletonStrategy.prototype.create = function (context) {
        if (!this.instance) {
            this.instance = org.izi.ioc.bean.createInstance(this.Clazz, this.args, this.props, context);
        }

        return this.instance;
    };

    LazySingletonStrategy.prototype.matchesByType = function (type) {
        return type === this.Clazz;
    };

    LazySingletonStrategy.prototype.getArguments = function () {
        return this.args;
    };

    return LazySingletonStrategy;
}();
org.izi.ioc.bean.InstanceStrategy = function () {

    /**
     * Ready instance strategy used in {@link org.izi.ioc.bean.BeanBuilder}
     * @class org.izi.ioc.bean.InstanceStrategy
     * @private
     * @constructor
     * @param {*} instance
     */
    var InstanceStrategy = function org_izi_ioc_bean_InstanceStrategy(instance) {
        this.instance = instance;
    };

    InstanceStrategy.prototype.init = function (beansContext) {
        return this.instance;
    };

    InstanceStrategy.prototype.create = function (beansContext) {
        return this.instance;
    };

    InstanceStrategy.prototype.matchesByType = function (type) {
        return this.instance instanceof type;
    };

    InstanceStrategy.prototype.getArguments = function () {
        return [];
    };

    return InstanceStrategy;
}();
org.izi.ioc.bean.PrototypeStrategy = function () {

    /**
     * Prototype strategy used in {@link org.izi.ioc.bean.BeanBuilder}
     * @class org.izi.ioc.bean.PrototypeStrategy
     * @private
     * @constructor
     * @param {org.izi.ioc.Config} config
     */
    var PrototypeStrategy = function org_izi_ioc_bean_PrototypeStrategy(config) {
        this.Clazz = config.getClazz();
        this.args = config.getArguments();
        this.props = config.getProperties();
    };

    PrototypeStrategy.prototype.init = function (beansContext) {
        return null;
    };

    PrototypeStrategy.prototype.create = function (beansContext) {
        return org.izi.ioc.bean.createInstance(this.Clazz, this.args, this.props, beansContext);
    };

    PrototypeStrategy.prototype.matchesByType = function (type) {
        return type === this.Clazz;
    };

    PrototypeStrategy.prototype.getArguments = function () {
        return this.args;
    };

    return PrototypeStrategy;
}();org.izi.ioc.bean.SingletonStrategy = function () {

    /**
     * Singleton strategy used in {@link org.izi.ioc.bean.BeanBuilder}
     * @class org.izi.ioc.bean.SingletonStrategy
     * @private
     * @constructor
     * @param {org.izi.ioc.Config} config
     */
    var SingletonStrategy = function org_izi_ioc_bean_SingletonStrategy(config) {
        this.Clazz = config.getClazz();
        this.args = config.getArguments();
        this.props = config.getProperties();
        this.instance = undefined;
    };

    SingletonStrategy.prototype.createInstance = function (beansContext) {
        if (!this.instance) {
            this.instance = org.izi.ioc.bean.createInstance(this.Clazz, this.args, this.props, beansContext);
        }

        return this.instance;
    };

    SingletonStrategy.prototype.init = function (beansContext) {
        return this.createInstance(beansContext);
    };

    SingletonStrategy.prototype.create = function (beansContext) {
        return this.createInstance(beansContext);
    };

    SingletonStrategy.prototype.matchesByType = function (type) {
        return type === this.Clazz;
    };

    SingletonStrategy.prototype.getArguments = function () {
        return this.args;
    };

    return SingletonStrategy;
}();org.izi.ioc.bean.BeanBuilder = function () {

    function matchesById(selfId, otherId) {
        return selfId === otherId;
    }

    function matchesByType(factory, type) {
        return factory.matchesByType(type);
    }

    function injectDependenciesOnProperties(context, bean) {
        var prop;
        bean.iziInjectingInProgress = true;
        for (prop in bean) {
            if (bean[prop] && bean[prop].isIziInjection) {
                bean[prop] = bean[prop].resolveBean(context);
            }
        }
        delete bean.iziInjectingInProgress;
    }

    /**
     * Bean instance builder based on given strategy.
     * @class org.izi.ioc.bean.BeanBuilder
     * @private
     * @constructor
     * @param {String} id
     * @param {Object} strategy
     * @param {Function} strategy.init
     * @param {Function} strategy.create
     * @param {Function} strategy.matchesByType
     * @param {Function} strategy.getArguments
     */
    var BeanBuilder = function org_izi_ioc_bean_BeanBuilder(id, strategy) {
        this.id = id;
        this.strategy = strategy;
        this.createdBeans = [];
    };

    /**
     * Delegates init on strategy
     * @member org.izi.ioc.bean.BeanBuilder
     * @private
     * @param beansContext
     * @return {*}
     */
    BeanBuilder.prototype.init = function (beansContext) {
        return this.strategy.init(beansContext);
    };

    /**
     * Delegates create on strategy
     * @member org.izi.ioc.bean.BeanBuilder
     * @private
     * @param context
     * @return {*}
     */
    BeanBuilder.prototype.create = function (context) {
        var bean = this.strategy.create(context);

        if (bean.iziInjectingInProgress) {
            return bean;
        }

        injectDependenciesOnProperties(context, bean);

        if (bean.iziContext && !bean.iziContextCalled) {
            bean.iziContextCalled = true;
            bean.iziContext(context);
        }
        if (bean.iziInit && !bean.iziInitCalled) {
            bean.iziInitCalled = true;
            bean.iziInit();
        }

        this.createdBeans.push(bean);

        return bean;
    };

    BeanBuilder.prototype.destroyCreatedBeans = function () {
        org.izi.utils.forEach(this.createdBeans, function (createdBean) {
            if (createdBean.iziDestroy) {
                try {
                    createdBean.iziDestroy();
                } catch (e) {
                }
            }
            for (var key in createdBean) {
                try {
                    createdBean[key] = undefined;
                } catch (e) {
                }
            }
        });

        this.id = undefined;
        this.strategy = undefined;
        this.createdBeans = undefined;
    };

    BeanBuilder.prototype.preDestroyCreatedBeans = function () {
        org.izi.utils.forEach(this.createdBeans, function (createdBean) {
            if (createdBean.iziPreDestroy) {
                createdBean.iziPreDestroy();
            }
        });
    };

    /**
     * Matches factory by id or class type
     * @member org.izi.ioc.bean.BeanBuilder
     * @private
     * @param {String|Function} idOrType
     * @return {Boolean}
     */
    BeanBuilder.prototype.matches = function (idOrType) {
        if ((typeof idOrType) === "string") {
            return idOrType.indexOf(".") !== -1
                ? matchesByType(this.strategy, org.izi.utils.getClassByName(idOrType))
                : matchesById(this.id, idOrType);
        } else {
            return matchesByType(this.strategy, idOrType);
        }
    };

    /**
     * Get bean factories that are set as argument dependencies
     * @member org.izi.ioc.bean.BeanBuilder
     * @private
     * @param context
     * @return {*}
     */
    BeanBuilder.prototype.getArgumentsDependencies = function (context) {

        function findArgumentsDependencies(args) {
            var results = [];
            org.izi.utils.forEach(args, function (arg) {
                if (arg && arg.isIziInjection) {
                    results.push(arg.findBeanBuilder(context));
                }
            });
            return results;
        }

        return findArgumentsDependencies(this.strategy.getArguments());
    };

    return BeanBuilder;
}();/**
 * @private
 * @param {String|Function} beanIdOrType
 * @constructor
 */
org.izi.ioc.bean.NoBeanMatched = function (beanIdOrType) {
    this.message = "No bean matched: " + beanIdOrType;
};

org.izi.ioc.bean.NoBeanMatched.prototype = new Error();
org.izi.ioc.Config = function () {

    /**
     * Configuration used in IoC/DI fluent API
     * @class org.izi.ioc.Config
     * @constructor
     * @private
     * @param {Function|String|Object} Clazz Class constructor, dotted class definition string or ready instance of bean
     * @param {Function} Strategy Strategy constructor
     */
    var Config = function org_izi_ioc_Config(Clazz, Strategy) {
        this.Clazz = Clazz;
        this.Strategy = Strategy;
        this.args = [];
    };

    /**
     * @member org.izi.ioc.Config
     * @private
     * @return {*}
     */
    Config.prototype.createStrategy = function () {
        return new this.Strategy(this);
    };

    /**
     * @member org.izi.ioc.Config
     * @private
     * @return {Array}
     */
    Config.prototype.getArguments = function () {
        return this.args;
    };

    /**
     * @member org.izi.ioc.Config
     * @private
     * @return {Array}
     */
    Config.prototype.getProperties = function () {
        return this.props;
    };

    /**
     * @member org.izi.ioc.Config
     * @private
     * @return {Function|String|Object}
     */
    Config.prototype.getClazz = function () {
        return this.Clazz;
    };

    /**
     * Arguments that will be used to object creation. It accept also {@link izi#inject izi.inject()} values.
     *     izi.bakeBeans({
     *         bean: izi.instantiate(Class).withArgs("Value", izi.inject("beanId")
     *     });
     *
     * @member org.izi.ioc.Config
     * @noSanity
     * @param {Object...|org.izi.ioc.Injection...} vararg arguments
     * @return {org.izi.ioc.Config}
     */
    Config.prototype.withArgs = function () {
        if (arguments.length > 10) {
            throw new Error("Too many arguments passed. Ten arguments is maximum.");
        }

        this.args = arguments;
        return this;
    };

    /**
     * Properties that will be used to overwrite on created bean. It accept also {@link izi#inject izi.inject()} values.
     *     izi.bakeBeans({
     *         bean: izi.instantiate(Class).withProps({field1: "Value 1", field2: izi.inject("beanId")})
     *     });
     *
     * @member org.izi.ioc.Config
     * @noSanity
     * @param {Object} props Map of property=>value used to overwrite on bean
     * @return {org.izi.ioc.Config}
     */
    Config.prototype.withProps = function (props) {
        this.props = props;
        return this;
    };

    return Config;
}();org.izi.ioc.BeansContext = function () {

    function normalizeBeans(beans) {
        if (org.izi.utils.typeOf(beans) === 'Array') {
            return mergeBeans(beans);
        } else {
            return beans;
        }
    }

    function mergeBeans(beansCollection) {
        var result = {};
        org.izi.utils.forEach(beansCollection, function (beans) {
            iterateOwnProperties(beans, function (key, value) {
                if (result[key] === undefined) {
                    result[key] = value;
                } else {
                    throw new Error('Found duplicated bean ID: "' + key + '" in multiple configurations');
                }
            });
        });
        return result;
    }

    function iterateOwnProperties(object, callback) {
        for (var key in object) {
            if (org.izi.utils.hasOwnProperty(object, key)) {
                callback(key, object[key]);
            }
        }
    }

    function createBeansBuilders(beans, beansBuilders) {
        var beanId, beanConfig, beanBuilder;

        for (beanId in beans) {
            if (org.izi.utils.hasOwnProperty(beans, beanId)) {
                beanConfig = beans[beanId];

                if (beanConfig instanceof org.izi.ioc.Config) {
                    beanBuilder = new org.izi.ioc.bean.BeanBuilder(beanId, beanConfig.createStrategy());
                } else {
                    beanBuilder = new org.izi.ioc.bean.BeanBuilder(beanId, new org.izi.ioc.bean.InstanceStrategy(beanConfig));
                }

                beansBuilders.push(beanBuilder);
            }
        }
    }

    function findCircularDependencies(beansContext, beanBuilder) {

        function visitDependencies(visitedBuilder) {
            var dependencies = visitedBuilder.getArgumentsDependencies(beansContext);

            org.izi.utils.forEach(dependencies, function (dependency) {
                if (dependency === beanBuilder) {
                    throw new Error("Circular dependencies found. If it is possible try inject those dependencies by properties instead by arguments.");
                }
                visitDependencies(dependency);
            });
        }

        visitDependencies(beanBuilder);
    }

    function initBean(beansContext, beanBuilder) {
        findCircularDependencies(beansContext, beanBuilder);
        return beanBuilder.init(beansContext);
    }

    function initAllBeans(beansContext, beansBuilders) {
        var bean, beansToCreate = [];

        org.izi.utils.forEach(beansBuilders, function (beanBuilder) {
            bean = initBean(beansContext, beanBuilder);
            if (bean) {
                beansToCreate.push(beanBuilder);
            }
        });

        org.izi.utils.forEach(beansToCreate, function (beanToCreate) {
            beanToCreate.create(beansContext);
        });
    }

    function createPreDestroyEvent() {
        return {

            isPrevented: false,

            isDestroyPrevented: function () {
                return this.isPrevented;
            },

            preventDestroy: function () {
                this.isPrevented = true;
            }
        }
    }

    /**
     * @param {org.izi.ioc.BeansContext} beansContext
     */
    function handleDestroyFromParentContext(beansContext) {izi.sanityOf("handleDestroyFromParentContext()").args(izi.arg().of("org.izi.ioc.BeansContext")).check(arguments);
        var parentContext = beansContext.parentContext,
            childrenDispatcher = beansContext.destroyDispatcher,
            parentDispatcher = parentContext && parentContext.destroyDispatcher;

        if (!parentDispatcher) {
            return;
        }

        function handlePreDestroy(event) {
            childrenDispatcher.dispatchEvent("preDestroy", arguments);
            if (event.isDestroyPrevented()) {
                return;
            }

            var shouldDestroy = beansContext.doPreDestroy();
            if (!shouldDestroy) {
                event.preventDestroy();
            }
        }

        function handleDestroy(event) {
            parentDispatcher.removeListener("destroy", handleDestroy);
            parentDispatcher.removeListener("preDestroy", handlePreDestroy);

            childrenDispatcher.dispatchEvent("destroy", arguments);
            beansContext.doDestroy();
        }

        parentDispatcher.addListener("preDestroy", handlePreDestroy);
        parentDispatcher.addListener("destroy", handleDestroy);
    }

    /**
     * BeansContext instance is returned by {@link izi#bakeBeans izi.bakeBeans()} function. It is also available
     * in <code>.iziContext(context)</code> function implemented on any bean, ie:
     *
     *     izi.bakeBeans({
     *
     *         bean: izi.instantiate(SomeDependency),
     *
     *         myBean: {
     *
     *             dependency: izi.inject(SomeDependency),
     *
     *             iziContext: function (context) {
     *                 // iziContext function is called when all dependencies are provided and ready to use
     *             }
     *
     *             iziInit: function () {
     *                 // iziInit() is called after iziContext()
     *             }
     *         }
     *     });
     *
     *  When you have BeansContext reference, you can:
     *
     *   * wire dependencies to object created outside the context: <code>context.wire(objectContainingIziInjects)</code>
     *   * create descendant context: <code>izi.bakeBeans({...}, parentContext);</code>
     *   * destroy context: <code>context.destroy()</code>
     *
     * @class org.izi.ioc.BeansContext
     * @constructor
     * @private
     * @param beans {Object|Object[]} Beans configuration as a map of beanId:bean or array of maps.
     * @param {org.izi.ioc.BeansContext} [parentContext]
     */
    var BeansContext = function org_izi_ioc_BeansContext(beans, parentContext) {
        this.beans = normalizeBeans(beans);
        this.destroyDispatcher = new org.izi.model.Observable();
        this.parentContext = parentContext;
        this.beansBuilders = [];

        handleDestroyFromParentContext(this);
    };

    /**
     * Init context
     * @member org.izi.ioc.BeansContext
     * @private
     * @return {org.izi.ioc.BeansContext}
     */
    BeansContext.prototype.initContext = function () {

        createBeansBuilders(this.beans, this.beansBuilders);
        initAllBeans(this, this.beansBuilders);

        return this;
    };

    /**
     * Find bean by its id or class name
     * @member org.izi.ioc.BeansContext
     * @param {String|Function} beanIdOrType
     * @return {*}
     */
    BeansContext.prototype.getBean = function (beanIdOrType) {izi.sanityOf("getBean()").args(izi.arg().of("String|Function")).check(arguments);

        var beanBuilder = this.findBeanBuilder(beanIdOrType);

        if (!beanBuilder) {
            throw new org.izi.ioc.bean.NoBeanMatched(beanIdOrType);
        }

        return beanBuilder.create(this);
    };

    /**
     * Injects needed dependencies from this context into passed object.
     * @member org.izi.ioc.BeansContext
     * @since 1.3.0
     * @param {Object} objectContainingIziInjects
     * @return {Object}
     */
    BeansContext.prototype.wire = function (objectContainingIziInjects) {izi.sanityOf("wire()").args(izi.arg().ofObject()).check(arguments);
        var strategy = new org.izi.ioc.bean.InstanceStrategy(objectContainingIziInjects),
            beanBuilder = new org.izi.ioc.bean.BeanBuilder("", strategy);
        this.beansBuilders.push(beanBuilder);
        return beanBuilder.create(this);
    };

    /**
     * Destroys beans context and all descendant contexts. First it calls <code>.iziPreDestroy()</code> method on every
     * created bean if implemented. Throwing an error inside <code>.iziPreDestroy()</code> stops destroying the context.
     * After calling <code>.iziPreDestroy()</code> izi calls <code>.iziDestroy()</code> methods on every created bean
     * if implemented. All thrown errors inside <code>.iziDestroy()</code> are caught and ignored.
     *
     * <code>.iziDestroy()</code> is a place where you should unregister all event listeners added within its class.
     *
     *     var context = izi.bakeBeans({
     *
     *         someBean: {
     *
     *             iziInit: function () {
     *                 var bind = this.bind = izi.bind();
     *
     *                 bind.valueOf(loginInput).to(model, "login");
     *                 bind.valueOf(passwordInput).to(model, "password");
     *
     *                 this.login = izi.perform(doLogin).when("click").on(loginButton);
     *             },
     *
     *             iziPreDestroy: function () {
     *                 // you can throw new Error() here if you don't want to destroy context for any reason
     *             }
     *
     *             iziDestroy: function () {
     *                 this.bind.unbindAll();
     *                 this.login.stopObserving();
     *             }
     *         }
     *     });
     *
     *     context.destroy();
     *
     * @member org.izi.ioc.BeansContext
     * @return {boolean} true when destroying was successful, false when any of beans thrown an exception in iziPreDestroy() method
     * @since 1.4.0
     */
    BeansContext.prototype.destroy = function () {
        var destroyDispatcher = this.destroyDispatcher,
            preDestroyEvent = createPreDestroyEvent();

        destroyDispatcher.dispatchEvent("preDestroy", [preDestroyEvent]);

        if (preDestroyEvent.isDestroyPrevented()) {
            return false;
        }

        var shouldDestroy = this.doPreDestroy();

        if (!shouldDestroy) {
            return false;
        }

        destroyDispatcher.dispatchEvent("destroy");
        this.doDestroy();

        return true;
    };

    BeansContext.prototype.doPreDestroy = function () {
        return org.izi.utils.every(this.beansBuilders, function (beanBuilder) {
            try {
                beanBuilder.preDestroyCreatedBeans();
                return true;
            } catch (e) {
                return false;
            }
        });
    };

    BeansContext.prototype.doDestroy = function () {
        org.izi.utils.forEach(this.beansBuilders, function (beanBuilder) {
            beanBuilder.destroyCreatedBeans();
        });
        this.beansBuilders = [];
        this.beans = undefined;
        this.parentContext = undefined;
        this.destroyDispatcher = undefined;

        return true;
    };

    /**
     * Find bean builder by its id or type
     * @member org.izi.ioc.BeansContext
     * @private
     * @param {String/Function} beanIdOrType
     * @return {org.izi.ioc.bean.BeanBuilder}
     */
    BeansContext.prototype.findBeanBuilder = function (beanIdOrType) {
        var foundBuilder = null;

        org.izi.utils.forEach(this.beansBuilders, function (factory) {
            if (factory.matches(beanIdOrType)) {
                if (foundBuilder) {
                    throw new Error("Ambiguous reference to bean by type. Please refer by id.");
                }
                foundBuilder = factory;
            }
        });

        if (!foundBuilder && this.parentContext !== undefined) {
            foundBuilder = this.parentContext.findBeanBuilder(beanIdOrType);
        }

        return foundBuilder;
    };

    return BeansContext;
}();org.izi.ioc.Injection = function () {


    /**
     * Injection marker for beans arguments and properties.
     * @class org.izi.ioc.Injection
     * @private
     * @constructor
     * @private
     * @param {String|Function} beanIdOrType Bean id or constructor function or dotted string class definition
     */
    var Injection = function org_izi_ioc_Injection(beanIdOrType) {
        this.beanIdOrType = beanIdOrType;
        this.getCallerLine = org.izi.utils.getCallerLineProvider(2);
    };

    /**
     * @member org.izi.ioc.Injection
     * @private
     * @return {String}
     */
    Injection.prototype.getBeanNotFoundMessage = function() {
        return "Bean couldn't be found from injection at line:\n" + this.getCallerLine();
    };

    /**
     * Delegates get bean
     * @member org.izi.ioc.Injection
     * @private
     * @param {org.izi.ioc.BeansContext} beansContext
     * @return {*}
     */
    Injection.prototype.resolveBean = function (beansContext) {
        var bean;
        try {
            bean = beansContext.getBean(this.beanIdOrType);
        } catch (e) {
            if (e instanceof org.izi.utils.ClassNotFound || e instanceof org.izi.ioc.bean.NoBeanMatched) {
                throw new Error(this.getBeanNotFoundMessage());
            }
            else {
                throw e;
            }
        }
        return bean;
    };

    /**
     * Delegates find bean builder
     * @member org.izi.ioc.Injection
     * @private
     * @param {org.izi.ioc.BeansContext} beansContext
     * @return {org.izi.ioc.bean.BeanBuilder}
     */
    Injection.prototype.findBeanBuilder = function (beansContext) {
        var beanBuilder = beansContext.findBeanBuilder(this.beanIdOrType);
        if (beanBuilder === null) {
            throw new Error(this.getBeanNotFoundMessage());
        }
        return beanBuilder;
    };

    /**
     * Marker field to use instead of: ... instanceof org.izi.ioc.Injection
     * @member org.izi.ioc.Injection
     * @private
     * @type {Boolean}
     */
    Injection.prototype.isIziInjection = true;

    return Injection;
}();org.izi.events.EventConfig = function () {

    var PREVENT_DEFAULT = 'preventDefault',
        STOP_PROPAGATION = 'stopPropagation',
        BOTH = 'both';


    /**
     * @class org.izi.events.EventConfig
     * @constructor
     * @private
     * @param {String} [eventType]
     */
    var EventConfig = function org_izi_events_EventConfig(eventType) {

        /**
         * @private
         * @member org.izi.events.EventConfig
         * @type {String}
         */
        this.eventType = eventType;

        /**
         * @private
         * @member org.izi.events.EventConfig
         * @type {Object}
         */
        this.modifiers = {
            shift: false,
            ctrl: false,
            alt: false
        };

        /**
         * @private
         * @member org.izi.events.EventConfig
         * @type {String}
         */
        this.stopEventType = undefined;
    };

    /**
     * @member org.izi.events.EventConfig
     * @private
     * @type {Boolean}
     */
    EventConfig.prototype.isEventConfig = true;

    /**
     * Setup if SHIFT key is expected to be pressed during user interaction
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.shift = function () {
        this.modifiers.shift = true;
        return this;
    };

    /**
     * Setup if CTRL key is expected to be pressed during user interaction
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.ctrl = function () {
        this.modifiers.ctrl = true;
        return this;
    };

    /**
     * Setup if ALT key is expected to be pressed during user interaction
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.alt = function () {
        this.modifiers.alt = true;
        return this;
    };

    /**
     * Setup if stopPropagation() and preventDefaults() should be called on triggered event
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.stopEvent = function () {
        this.stopEventType = BOTH;
        return this;
    };

    /**
     * Setup if stopPropagation() should be called on triggered event
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.stopPropagation = function () {
        this.stopEventType = STOP_PROPAGATION;
        return this;
    };

    /**
     * Setup if preventDefaults() should be called on triggered event
     * @member org.izi.events.EventConfig
     * @return {org.izi.events.EventConfig}
     */
    EventConfig.prototype.preventDefault = function () {
        this.stopEventType = PREVENT_DEFAULT;
        return this;
    };

    /**
     * Returns flag for SHIFT key modifier
     * @private
     * @member org.izi.events.EventConfig
     * @return {Boolean}
     */
    EventConfig.prototype.isExpectedShiftKey = function () {
        return this.modifiers.shift;
    };

    /**
     * Returns flag for CTRL key modifier
     * @private
     * @member org.izi.events.EventConfig
     * @return {Boolean}
     */
    EventConfig.prototype.isExpectedCtrlKey = function () {
        return this.modifiers.ctrl;
    };

    /**
     * Returns flag for ALT key modifier
     * @private
     * @member org.izi.events.EventConfig
     * @return {Boolean}
     */
    EventConfig.prototype.isExpectedAltKey = function () {
        return this.modifiers.alt;
    };

    /**
     * Returns event type
     * @private
     * @member org.izi.events.EventConfig
     * @return {String}
     */
    EventConfig.prototype.getEventType = function () {
        return this.eventType;
    };

    /**
     * Returns if event should be stopped for further propagation
     * @private
     * @member org.izi.events.EventConfig
     * @return {Boolean}
     */
    EventConfig.prototype.shouldStopPropagation = function () {
        return this.stopEventType === STOP_PROPAGATION || this.stopEventType === BOTH;
    };

    /**
     * Returns if event should prevent default behavior
     * @private
     * @member org.izi.events.EventConfig
     * @return {Boolean}
     */
    EventConfig.prototype.shouldPreventDefault = function () {
        return this.stopEventType === PREVENT_DEFAULT || this.stopEventType === BOTH;
    };

    /**
     * Returns true if all given modifiers matches configured modifiers.
     * @member org.izi.events.EventConfig
     * @private
     * @param {Boolean} shiftKey
     * @param {Boolean} ctrlKey
     * @param {Boolean} altKey
     * @return {Boolean}
     */
    EventConfig.prototype.matchesModifiers = function (shiftKey, ctrlKey, altKey) {
        return this.isExpectedShiftKey() === shiftKey &&
               this.isExpectedCtrlKey() === ctrlKey &&
               this.isExpectedAltKey() === altKey;
    };

    return EventConfig;
}();
org.izi.events.KeyboardConfig = function () {

    /**
     * @class org.izi.events.KeyboardConfig
     * @extends org.izi.events.EventConfig
     * @constructor
     * @private
     * @param {String} eventType
     */
    var KeyboardConfig = function org_izi_events_KeyboardConfig(eventType) {
        org.izi.events.EventConfig.apply(this, arguments);
        this.expectedKeyCode = 0;
    };
    KeyboardConfig.prototype = new org.izi.events.EventConfig();
    KeyboardConfig.prototype.constructor = KeyboardConfig;

    /**
     * @member org.izi.events.KeyboardConfig
     * @private
     * @type {Boolean}
     */
    KeyboardConfig.prototype.isKeyboardEventConfig = true;

    /**
     * Setup custom expected keyCode. Use it only when you can't find desired key in methods below:
     * <code>izi.events.keyDown().ENTER()</code> etc.
     * @member org.izi.events.KeyboardConfig
     * @param {Number} value
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.keyCode = function (value) {izi.sanityOf("keyCode()").args(izi.arg().ofNumber()).check(arguments);
        this.expectedKeyCode = value;
        return this;
    };

    /**
     * Returns expected key code
     * @member org.izi.events.KeyboardConfig
     * @private
     * @return {Number}
     */
    KeyboardConfig.prototype.getExpectedKeyCode = function () {
        return this.expectedKeyCode;
    };

    /**
     * Setup BACKSPACE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.BACKSPACE = function () {
        return this.keyCode(8);
    };
    
    /**
     * Setup TAB key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.TAB = function () {
        return this.keyCode(9);
    };
    
    /**
     * Setup NUM_CENTER key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_CENTER = function () {
        return this.keyCode(12);
    };

    /**
     * Setup ENTER key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.ENTER = function () {
        return this.keyCode(13);
    };
    
    /**
     * Setup RETURN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.RETURN = function () {
        return this.keyCode(13);
    };
    
    /**
     * Setup SHIFT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.SHIFT = function () {
        this.shift(); // If you press SHIFT key - event modifier will be set to true, so we need to also expect that.
        return this.keyCode(16);
    };
    
    /**
     * Setup CTRL key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.CTRL = function () {
        this.ctrl(); // If you press CTRL key - event modifier will be set to true, so we need to also expect that.
        return this.keyCode(17);
    };
    
    /**
     * Setup ALT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.ALT = function () {
        this.alt(); // If you press ALT key - event modifier will be set to true, so we need to also expect that.
        return this.keyCode(18);
    };
    
    /**
     * Setup PAUSE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.PAUSE = function () {
        return this.keyCode(19);
    };
    
    /**
     * Setup CAPS_LOCK key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.CAPS_LOCK = function () {
        return this.keyCode(20);
    };
    
    /**
     * Setup ESC key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.ESC = function () {
        return this.keyCode(27);
    };
    
    /**
     * Setup SPACE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.SPACE = function () {
        return this.keyCode(32);
    };
    
    /**
     * Setup PAGE_UP key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.PAGE_UP = function () {
        return this.keyCode(33);
    };
    
    /**
     * Setup PAGE_DOWN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.PAGE_DOWN = function () {
        return this.keyCode(34);
    };
    
    /**
     * Setup END key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.END = function () {
        return this.keyCode(35);
    };
    
    /**
     * Setup HOME key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.HOME = function () {
        return this.keyCode(36);
    };
    
    /**
     * Setup LEFT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.LEFT = function () {
        return this.keyCode(37);
    };
    
    /**
     * Setup UP key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.UP = function () {
        return this.keyCode(38);
    };
    
    /**
     * Setup RIGHT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.RIGHT = function () {
        return this.keyCode(39);
    };
    
    /**
     * Setup DOWN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.DOWN = function () {
        return this.keyCode(40);
    };
    
    /**
     * Setup PRINT_SCREEN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.PRINT_SCREEN = function () {
        return this.keyCode(44);
    };
    
    /**
     * Setup INSERT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.INSERT = function () {
        return this.keyCode(45);
    };
                                                                //
    /**
     * Setup DELETE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.DELETE = function () {
        return this.keyCode(46);
    };
    
    /**
     * Setup ZERO key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.ZERO = function () {
        return this.keyCode(48);
    };
    
    /**
     * Setup ONE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.ONE = function () {
        return this.keyCode(49);
    };
    
    /**
     * Setup TWO key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.TWO = function () {
        return this.keyCode(50);
    };
    
    /**
     * Setup THREE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.THREE = function () {
        return this.keyCode(51);
    };
    
    /**
     * Setup FOUR key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.FOUR = function () {
        return this.keyCode(52);
    };
    
    /**
     * Setup FIVE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.FIVE = function () {
        return this.keyCode(53);
    };
    
    /**
     * Setup SIX key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.SIX = function () {
        return this.keyCode(54);
    };
    
    /**
     * Setup SEVEN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.SEVEN = function () {
        return this.keyCode(55);
    };
    
    /**
     * Setup EIGHT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.EIGHT = function () {
        return this.keyCode(56);
    };
    
    /**
     * Setup NINE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NINE = function () {
        return this.keyCode(57);
    };

    /**
     * Setup A key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.A = function () {
        return this.keyCode(65);
    };

    /**
     * Setup B key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.B = function () {
        return this.keyCode(66);
    };

    /**
     * Setup C key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.C = function () {
        return this.keyCode(67);
    };

    /**
     * Setup D key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.D = function () {
        return this.keyCode(68);
    };

    /**
     * Setup E key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.E = function () {
        return this.keyCode(69);
    };

    /**
     * Setup F key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F = function () {
        return this.keyCode(70);
    };

    /**
     * Setup G key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.G = function () {
        return this.keyCode(71);
    };

    /**
     * Setup H key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.H = function () {
        return this.keyCode(72);
    };

    /**
     * Setup I key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.I = function () {
        return this.keyCode(73);
    };

    /**
     * Setup J key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.J = function () {
        return this.keyCode(74);
    };

    /**
     * Setup K key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.K = function () {
        return this.keyCode(75);
    };

    /**
     * Setup L key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.L = function () {
        return this.keyCode(76);
    };

    /**
     * Setup M key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.M = function () {
        return this.keyCode(77);
    };

    /**
     * Setup N key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.N = function () {
        return this.keyCode(78);
    };

    /**
     * Setup O key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.O = function () {
        return this.keyCode(79);
    };

    /**
     * Setup P key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.P = function () {
        return this.keyCode(80);
    };

    /**
     * Setup Q key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.Q = function () {
        return this.keyCode(81);
    };

    /**
     * Setup R key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.R = function () {
        return this.keyCode(82);
    };

    /**
     * Setup S key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.S = function () {
        return this.keyCode(83);
    };

    /**
     * Setup T key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.T = function () {
        return this.keyCode(84);
    };

    /**
     * Setup U key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.U = function () {
        return this.keyCode(85);
    };

    /**
     * Setup V key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.V = function () {
        return this.keyCode(86);
    };

    /**
     * Setup W key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.W = function () {
        return this.keyCode(87);
    };

    /**
     * Setup X key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.X = function () {
        return this.keyCode(88);
    };

    /**
     * Setup Y key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.Y = function () {
        return this.keyCode(89);
    };

    /**
     * Setup Z key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.Z = function () {
        return this.keyCode(90);
    };

    /**
     * Setup NUM_ZERO key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_ZERO = function () {
        return this.keyCode(96);
    };

    /**
     * Setup NUM_ONE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_ONE = function () {
        return this.keyCode(97);
    };

    /**
     * Setup NUM_TWO key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_TWO = function () {
        return this.keyCode(98);
    };

    /**
     * Setup NUM_THREE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_THREE = function () {
        return this.keyCode(99);
    };

    /**
     * Setup NUM_FOUR key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_FOUR = function () {
        return this.keyCode(100);
    };

    /**
     * Setup NUM_FIVE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_FIVE = function () {
        return this.keyCode(101);
    };

    /**
     * Setup NUM_SIX key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_SIX = function () {
        return this.keyCode(102);
    };

    /**
     * Setup NUM_SEVEN key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_SEVEN = function () {
        return this.keyCode(103);
    };

    /**
     * Setup NUM_EIGHT key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_EIGHT = function () {
        return this.keyCode(104);
    };

    /**
     * Setup NUM_NINE key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_NINE = function () {
        return this.keyCode(105);
    };

    /**
     * Setup NUM_MULTIPLY key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_MULTIPLY = function () {
        return this.keyCode(106);
    };

    /**
     * Setup NUM_PLUS key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_PLUS = function () {
        return this.keyCode(107);
    };

    /**
     * Setup NUM_MINUS key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_MINUS = function () {
        return this.keyCode(109);
    };

    /**
     * Setup NUM_PERIOD key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_PERIOD = function () {
        return this.keyCode(110);
    };

    /**
     * Setup NUM_DIVISION key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.NUM_DIVISION = function () {
        return this.keyCode(111);
    };

    /**
     * Setup F1 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F1 = function () {
        return this.keyCode(112);
    };

    /**
     * Setup F2 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F2 = function () {
        return this.keyCode(113);
    };

    /**
     * Setup F3 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F3 = function () {
        return this.keyCode(114);
    };

    /**
     * Setup F4 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F4 = function () {
        return this.keyCode(115);
    };

    /**
     * Setup F5 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F5 = function () {
        return this.keyCode(116);
    };

    /**
     * Setup F6 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F6 = function () {
        return this.keyCode(117);
    };

    /**
     * Setup F7 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F7 = function () {
        return this.keyCode(118);
    };

    /**
     * Setup F8 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F8 = function () {
        return this.keyCode(119);
    };

    /**
     * Setup F9 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F9 = function () {
        return this.keyCode(120);
    };

    /**
     * Setup F10 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F10 = function () {
        return this.keyCode(121);
    };

    /**
     * Setup F11 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F11 = function () {
        return this.keyCode(122);
    };

    /**
     * Setup F12 key as expected to be pressed
     * @member org.izi.events.KeyboardConfig
     * @method
     * @return {org.izi.events.KeyboardConfig}
     */
    KeyboardConfig.prototype.F12 = function () {
        return this.keyCode(123);
    };

    return KeyboardConfig;
}();
/**
 * <code>izi.events.*</code> fluent API entry points. You can use them to define izi behaviors based on more complex events, like:
 *
 *      izi.perform(behavior).when(izi.events.click().shift()).on(button);
 *
 *      izi.perform(behavior).when(izi.events.keyDown().ENTER()).on(textInput);
 *
 *      izi.perform(behavior).when(izi.events.keyDown().F5().preventDefault()).on(document);
 *
 *      izi.perform(behavior).when(izi.events.keyDown().ctrl().alt().ONE()).on(document);
 *
 * @class org.izi.events.IziEvents
 * @singleton
 */

org.izi.events.IziEvents = {

    /**
     * Creates fluent builder for desired event type. If you need to watch keyboard events, please use
     * <code>izi.events.keyDown()</code> or <code>izi.events.keyUp()</code> or <code>izi.events.keyboardEvent('keypress')</code>
     * @member org.izi.events.IziEvents
     * @param {String} eventType
     * @return {org.izi.events.EventConfig}
     */
    event: function (eventType) {izi.sanityOf("event()").args(izi.arg().ofString()).check(arguments);
        return new org.izi.events.EventConfig(eventType);
    },

    /**
     * Creates fluent builder. It is recommended to use only
     * <code>izi.events.keyDown()</code> or <code>izi.events.keyUp()</code>, because of not cross browsers
     * compatibility of "keyPress" event.
     * @member org.izi.events.IziEvents
     * @param {String} eventType
     * @return {org.izi.events.KeyboardConfig}
     */
    keyboardEvent: function (eventType) {izi.sanityOf("keyboardEvent()").args(izi.arg().ofString()).check(arguments);
        return new org.izi.events.KeyboardConfig(eventType);
    },

    // -------------------- Keyboard -----------------

    /**
     * Creates fluent builder for keyboard "keydown" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.KeyboardConfig}
     */
    keyDown: function () {
        return this.keyboardEvent('keydown');
    },

    /**
     * Creates fluent builder for keyboard "keyup" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.KeyboardConfig}
     */
    keyUp: function () {
        return this.keyboardEvent('keyup');
    },

    // -------------------- HTML Window -----------------

    /**
     * Creates fluent builder for html window "afterprint" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    afterPrint: function () {
        return this.event('afterprint');
    },

    /**
     * Creates fluent builder for html window "beforeprint" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    beforePrint: function () {
        return this.event('beforeprint');
    },

    /**
     * Creates fluent builder for html window "beforeonload" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    beforeOnLoad: function () {
        return this.event('beforeonload');
    },

    /**
     * Creates fluent builder for html window "error" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    error: function () {
        return this.event('error');
    },

    /**
     * Creates fluent builder for html window "haschange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    hasChange: function () {
        return this.event('haschange');
    },

    /**
     * Creates fluent builder for html window "load" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    load: function () {
        return this.event('load');
    },

    /**
     * Creates fluent builder for html window "message" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    message: function () {
        return this.event('message');
    },

    /**
     * Creates fluent builder for html window "offline" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    offline: function () {
        return this.event('offline');
    },

    /**
     * Creates fluent builder for html window "line" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    line: function () {
        return this.event('line');
    },

    /**
     * Creates fluent builder for html window "pagehide" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    pageHide: function () {
        return this.event('pagehide');
    },

    /**
     * Creates fluent builder for html window "pageshow" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    pageShow: function () {
        return this.event('pageshow');
    },

    /**
     * Creates fluent builder for html window "popstate" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    popState: function () {
        return this.event('popstate');
    },

    /**
     * Creates fluent builder for html window "redo" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    redo: function () {
        return this.event('redo');
    },

    /**
     * Creates fluent builder for html window "resize" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    resize: function () {
        return this.event('resize');
    },

    /**
     * Creates fluent builder for html window "storage" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    storage: function () {
        return this.event('storage');
    },

    /**
     * Creates fluent builder for html window "undo" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    undo: function () {
        return this.event('undo');
    },

    /**
     * Creates fluent builder for html window "unload" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    unload: function () {
        return this.event('unload');
    },

    // -------------------- Form element -----------------

    /**
     * Creates fluent builder for form element "blur" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    blur: function () {
        return this.event('blur');
    },

    /**
     * Creates fluent builder for form element "change" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    change: function () {
        return this.event('change');
    },

    /**
     * Creates fluent builder for form element "contextmenu" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    contextMenu: function () {
        return this.event('contextmenu');
    },

    /**
     * Creates fluent builder for form element "focus" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    focus: function () {
        return this.event('focus');
    },

    /**
     * Creates fluent builder for form element "formchange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    formChange: function () {
        return this.event('formchange');
    },

    /**
     * Creates fluent builder for form element "forminput" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    formInput: function () {
        return this.event('forminput');
    },

    /**
     * Creates fluent builder for form element "input" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    input: function () {
        return this.event('input');
    },

    /**
     * Creates fluent builder for form element "invalid" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    invalid: function () {
        return this.event('invalid');
    },

    /**
     * Creates fluent builder for form element "reset" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    reset: function () {
        return this.event('reset');
    },

    /**
     * Creates fluent builder for form element "select" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    select: function () {
        return this.event('select');
    },

    /**
     * Creates fluent builder for form element "submit" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    submit: function () {
        return this.event('submit');
    },

    // -------------------- Mouse -----------------

    /**
     * Creates fluent builder for mouse "click" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    click: function () {
        return this.event('click');
    },

    /**
     * Creates fluent builder for mouse "dblclick" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dblClick: function () {
        return this.event('dblclick');
    },

    /**
     * Creates fluent builder for mouse "drag" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    drag: function () {
        return this.event('drag');
    },

    /**
     * Creates fluent builder for mouse "dragend" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dragEnd: function () {
        return this.event('dragend');
    },

    /**
     * Creates fluent builder for mouse "dragenter" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dragEnter: function () {
        return this.event('dragenter');
    },

    /**
     * Creates fluent builder for mouse "dragleave" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dragLeave: function () {
        return this.event('dragleave');
    },

    /**
     * Creates fluent builder for mouse "dragover" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dragOver: function () {
        return this.event('dragover');
    },

    /**
     * Creates fluent builder for mouse "dragstart" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    dragStart: function () {
        return this.event('dragstart');
    },

    /**
     * Creates fluent builder for mouse "drop" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    drop: function () {
        return this.event('drop');
    },

    /**
     * Creates fluent builder for mouse "mousedown" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseDown: function () {
        return this.event('mousedown');
    },

    /**
     * Creates fluent builder for mouse "mousemove" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseMove: function () {
        return this.event('mousemove');
    },

    /**
     * Creates fluent builder for mouse "mouseout" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseOut: function () {
        return this.event('mouseout');
    },

    /**
     * Creates fluent builder for mouse "mouseover" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseOver: function () {
        return this.event('mouseover');
    },

    /**
     * Creates fluent builder for mouse "mouseup" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseUp: function () {
        return this.event('mouseup');
    },

    /**
     * Creates fluent builder for mouse "mousewheel" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    mouseWheel: function () {
        return this.event('mousewheel');
    },

    /**
     * Creates fluent builder for mouse "scroll" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    scroll: function () {
        return this.event('scroll');
    },

    // -------------------- Media -----------------

    /**
     * Creates fluent builder for media "abort" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    abort: function () {
        return this.event('abort');
    },

    /**
     * Creates fluent builder for media "canplay" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    canPlay: function () {
        return this.event('canplay');
    },

    /**
     * Creates fluent builder for media "canplaythrough" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    canPlayThrough: function () {
        return this.event('canplaythrough');
    },

    /**
     * Creates fluent builder for media "durationchange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    durationChange: function () {
        return this.event('durationchange');
    },

    /**
     * Creates fluent builder for media "emptied" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    emptied: function () {
        return this.event('emptied');
    },

    /**
     * Creates fluent builder for media "ended" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    ended: function () {
        return this.event('ended');
    },

    /**
     * Creates fluent builder for media "loadeddata" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    loadedData: function () {
        return this.event('loadeddata');
    },

    /**
     * Creates fluent builder for media "loadedmetadata" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    loadedMetaData: function () {
        return this.event('loadedmetadata');
    },

    /**
     * Creates fluent builder for media "loadstart" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    loadStart: function () {
        return this.event('loadstart');
    },

    /**
     * Creates fluent builder for media "pause" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    pause: function () {
        return this.event('pause');
    },

    /**
     * Creates fluent builder for media "play" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    play: function () {
        return this.event('play');
    },

    /**
     * Creates fluent builder for media "playing" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    playing: function () {
        return this.event('playing');
    },

    /**
     * Creates fluent builder for media "progress" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    progress: function () {
        return this.event('progress');
    },

    /**
     * Creates fluent builder for media "ratechange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    rateChange: function () {
        return this.event('ratechange');
    },

    /**
     * Creates fluent builder for media "readystatechange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    readyStateChange: function () {
        return this.event('readystatechange');
    },

    /**
     * Creates fluent builder for media "seeked" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    seeked: function () {
        return this.event('seeked');
    },

    /**
     * Creates fluent builder for media "seeking" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    seeking: function () {
        return this.event('seeking');
    },

    /**
     * Creates fluent builder for media "stalled" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    stalled: function () {
        return this.event('stalled');
    },

    /**
     * Creates fluent builder for media "suspend" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    suspend: function () {
        return this.event('suspend');
    },

    /**
     * Creates fluent builder for media "timeupdate" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    timeUpdate: function () {
        return this.event('timeupdate');
    },

    /**
     * Creates fluent builder for media "volumechange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    volumeChange: function () {
        return this.event('volumechange');
    },

    /**
     * Creates fluent builder for media "waiting" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    waiting: function () {
        return this.event('waiting');
    },

    // -------------------- Mobile -----------------

    /**
     * Creates fluent builder for mobile "touchstart" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchStart: function () {
        return this.event('touchstart');
    },

    /**
     * Creates fluent builder for mobile "touchmove" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchMove: function () {
        return this.event('touchmove');
    },

    /**
     * Creates fluent builder for mobile "touchend" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchEnd: function () {
        return this.event('touchend');
    },

    /**
     * Creates fluent builder for mobile "touchcancel" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchCancel: function () {
        return this.event('touchcancel');
    },

    /**
     * Creates fluent builder for mobile "touchenter" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchEnter: function () {
        return this.event('touchenter');
    },

    /**
     * Creates fluent builder for mobile "touchlave" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    touchLave: function () {
        return this.event('touchlave');
    },

    /**
     * Creates fluent builder for mobile "gesturestart" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    gestureStart: function () {
        return this.event('gesturestart');
    },

    /**
     * Creates fluent builder for mobile "gesturechange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    gestureChange: function () {
        return this.event('gesturechange');
    },

    /**
     * Creates fluent builder for mobile "gestureend" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    gestureEnd: function () {
        return this.event('gestureend');
    },

    /**
     * Creates fluent builder for mobile "orientationchange" event.
     * @member org.izi.events.IziEvents
     * @return {org.izi.events.EventConfig}
     */
    orientationChange: function () {
        return this.event('orientationchange');
    }

};org.izi.behavior.Config = function () {
    /**
     * Internal configuration used in behavior fluent API
     * @class org.izi.behavior.Config
     * @private
     * @constructor
     * @private
     * @param {Object} impl izi behavior implementation
     */
    var Config = function org_izi_behavior_Config(impl) {
        Config.prototype.impl = impl;
    };

    /**
     * Set dispatcher
     * @member org.izi.behavior.Config
     * @private
     * @param dispatcher
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withDispatcher = function (dispatcher) {
        this.dispatcher = dispatcher;
        return this;
    };

    /**
     * Set event type
     * @member org.izi.behavior.Config
     * @private
     * @param {org.izi.events.EventConfig[]} events
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withEvents = function (events) {
        this.events = events;
        return this;
    };

    /**
     * Set event options
     * @member org.izi.behavior.Config
     * @private
     * @param eventOptions
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withEventOptions = function (eventOptions) {
        this.eventOptions = eventOptions;
        return this;
    };

    /**
     * Set action
     * @member org.izi.behavior.Config
     * @private
     * @param action
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };

    /**
     * Set scope
     * @member org.izi.behavior.Config
     * @private
     * @param scope
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };

    /**
     * Set model properties
     * @member org.izi.behavior.Config
     * @private
     * @param modelProperties
     * @return {org.izi.behavior.Config}
     */
    Config.prototype.withModelProperties = function (modelProperties) {
        this.modelProperties = modelProperties;
        return this;
    };

    /**
     * In case of usage: <code>izi.perform(behavior)</code> - it will return <code>behavior.perform</code> function
     * In case of usage: <code>izi.perform(scope.function)</code> - it will return <code>scope.function</code>
     * @member org.izi.behavior.Config
     * @return {Function}
     */
    Config.prototype.getAction = function () {
        if ((typeof this.action) !== "function" && (!this.scope)) {
            return this.getScope()[this.getImpl().defaultPerformFunction];
        }

        return this.action;
    };

    /**
     * In case of usage: <code>izi.perform(behavior)</code> - it will return <code>behavior</code>
     * In case of usage: <code>izi.perform(scope.function, scope)</code> - it will return <code>scope</code>
     * @member org.izi.behavior.Config
     * @return {Object}
     */
    Config.prototype.getScope = function () {
        if ((typeof this.action) !== "function" && (!this.scope)) {
            return this.action;
        }

        return this.scope;
    };

    /**
     * Get event type
     * @member org.izi.behavior.Config
     * @return {org.izi.events.EventConfig[]}
     */
    Config.prototype.getEvents = function () {
        return this.events;
    };

    /**
     * Get event options
     * @member org.izi.behavior.Config
     * @return {Object}
     */
    Config.prototype.getEventOptions = function () {
        return this.eventOptions;
    };

    /**
     * Get event dispatcher
     * @member org.izi.behavior.Config
     * @return {*}
     */
    Config.prototype.getDispatcher = function () {
        return this.dispatcher.delegatedIn || this.dispatcher;
    };

    /**
     * Get behavior implementation
     * @member org.izi.behavior.Config
     * @return {*}
     */
    Config.prototype.getImpl = function () {
        return this.impl;
    };

    /**
     * Get model properties
     * @member org.izi.behavior.Config
     * @return {String[]}
     */
    Config.prototype.getModelProperties = function () {
        return this.modelProperties;
    };

    return Config;
}();org.izi.behavior.WhenWidget = function () {

    /**
     * After <code>izi.perform(behavior).when('click')...</code> behavior API
     * @class org.izi.behavior.WhenWidget
     * @constructor
     * @private
     * @param {org.izi.behavior.Config} config
     */
    var WhenWidget = function org_izi_behavior_WhenWidget(config) {
        this.config = config;
    };

    /**
     * Widget declaration. You can pass directly widget instance or object containing widget on <strong>delegatedIn</strong> property.
     * <code>
     *     var showMessage = new ShowMessage();
     *     var button = new Button();
     *     var wrapper = {
     *         delegatedIn: button
     *     };
     *
     *     izi.perform(showMessage).when('click').on(button);
     *
     *     // will work also for:
     *     izi.perform(showMessage).when('click').on(wrapper);
     * </code>
     *
     * @member org.izi.behavior.WhenWidget
     * @sanity izi.sanityOf("on()").args(izi.arg("widget").ofObject()).args(izi.arg("wrapper").ofObject().havingProperty("delegatedIn")).check(arguments);
     * @param {Object} widget Widget that should be observed.
     * @return {org.izi.behavior.OnWidget}
     */
    WhenWidget.prototype.on = function (widget) {izi.sanityOf("on()").args(izi.arg("widget").ofObject()).args(izi.arg("wrapper").ofObject().havingProperty("delegatedIn")).check(arguments);
        return new org.izi.behavior.OnWidget(this.config.withDispatcher(widget));
    };

    return WhenWidget;
}();
org.izi.behavior.WhenModel = function () {

    /**
     * After <code>izi.perform(behavior).whenChangeOf('firstName')...</code> behavior API
     * @class org.izi.behavior.WhenModel
     * @constructor
     * @private
     * @param {org.izi.behavior.Config} config
     */
    var WhenModel = function org_izi_behavior_WhenModel(config) {
        this.config = config;
    };

    /**
     * Model declaration. You can pass directly model instance or object containing model on <strong>delegatedIn</strong> property.
     * <code>
     *     var showFullName = new ShowFullName();
     *     var model = new UserModel();
     *     var wrapper = {
     *         delegatedIn: model
     *     };
     *
     *     izi.perform(showFullName).whenChangeOf('firstName', 'lastName').on(model);
     *
     *     // will work also for:
     *     izi.perform(showFullName).whenChangeOf('firstName', 'lastName').on(wrapper);
     * </code>
     * @member org.izi.behavior.WhenModel
     * @param {Object} model Model that should be observed for properties changes.
     * @return {org.izi.behavior.OnModel}
     */
    WhenModel.prototype.on = function (model) {izi.sanityOf("on()").args(izi.arg().ofObject()).check(arguments);
        return new org.izi.behavior.OnModel(this.config.withDispatcher(model));
    };

    return WhenModel;
}();
org.izi.behavior.OnWidget = function () {

    /**
     * After <code>izi.perform(behavior).when('click').on(widget)...</code> behavior API
     * @class org.izi.behavior.OnWidget
     * @constructor
     * @private
     * @param {org.izi.behavior.Config} config
     */
    var OnWidget = function org_izi_behavior_OnWidget(config) {
        var action = config.getAction(),
            scope = config.getScope(),
            events = config.getEvents(),
            eventOptions = config.getEventOptions(),
            widget = config.getDispatcher(),
            impl = config.getImpl(),
            me = this;


        function startObserving() {
            me.observers = [];

            org.izi.utils.forEach(events, function (eventConfig) {

                if (eventConfig.isKeyboardEventConfig) {
                    if (widget.iziObserveKeyStroke) {
                        me.observers.push(widget.iziObserveKeyStroke(eventConfig, action, scope, eventOptions));
                    } else {
                        me.observers.push(impl.observeKeyStroke(widget, eventConfig, action, scope, eventOptions));
                    }

                } else if (eventConfig.isEventConfig) {
                    if (widget.iziObserveWidget) {
                        me.observers.push(widget.iziObserveWidget(eventConfig, action, scope, eventOptions));
                    } else {
                        me.observers.push(impl.observeWidget(widget, eventConfig, action, scope, eventOptions));
                    }
                } else {
                    throw new Error("Incorrect event type. Expecting izi.event.* or 'eventType'");
                }
            });
        }

        startObserving();
    };

    /**
     * Stops observing the widget
     * @member org.izi.behavior.OnWidget
     */
    OnWidget.prototype.stopObserving = function () {
        org.izi.utils.forEach(this.observers, function (observer) {
            observer();
        });
    };

    return OnWidget;
}();

/**
 * After <code>izi.perform(behavior).whenChangeOf('property1', 'property2').on(model)...</code> behavior API
 * @constructor
 * @private
 * @param {org.izi.behavior.Config} config
 */
org.izi.behavior.OnModel = function (config) {
    var action = config.getAction(),
        scope = config.getScope(),
        model = config.getDispatcher(),
        modelProperties = config.getModelProperties(),
        bindings = [];

    function triggerAction() {
        action.apply(scope);
    }

    org.izi.utils.forEach(modelProperties, function (property) {
        bindings.push(izi.bind({executeAtStartup: false}).valueOf(model, property).to(triggerAction));
    });

    /**
     * Stops observing the model
     */
    this.stopObserving = function () {
        org.izi.utils.forEach(bindings, function (binding) {
            binding.unbind();
        });
    };
};
org.izi.behavior.Perform = function () {
    /**
     * After <code>izi.perform(behavior)...</code> behavior API
     * @class org.izi.behavior.Perform
     * @constructor
     * @private
     * @param {org.izi.behavior.Config} config
     */
    var Perform = function org_izi_behavior_Perform(config) {
        this.config = config;
    };

    /**
     * Specifies when your behavior should be executed. This method accept multiple inputs:
     *
     * String:
     *     izi.perform(behavior).when('click').on(button);
     *
     * EventConfig:
     *     izi.perform(behavior).when(izi.events.click().shift()).on(button);
     *     izi.perform(behavior).when(izi.events.keyDown().F4().shift().stopEvent()).on(document);
     *
     * Multiple events:
     *     izi.perform(behavior).when('mouseup', 'mousedown').on(button);
     *     izi.perform(behavior).when(izi.events.click(), izi.events.keyDown().ENTER()).on(button);
     *
     * @member org.izi.behavior.Perform
     * @param {String.../org.izi.events.EventConfig.../Object...} events Event type which should be observed for triggering behavior
     * or event config created by izi.events.click() etc...
     * @param {Object} [eventOptions] Optionally you can pass also event options if your framework implementation supports it.
     * @return {org.izi.behavior.WhenWidget}
     */
    Perform.prototype.when = function () {izi.sanityOf("when()").args(izi.varargOf("String|org.izi.events.EventConfig|Object")).args(izi.varargOf("String|org.izi.events.EventConfig|Object"),izi.arg().ofObject()).check(arguments);
        var events = [],
            eventOptions,
            arg;

        for (var i = arguments.length - 1; i >= 0; i--) {
            arg = arguments[i];

            if (org.izi.utils.typeOf(arg) === 'String') {
                events.push(new org.izi.events.EventConfig(arg));
            } else if (arg.isEventConfig) {
                events.push(arg);
            } else if (org.izi.utils.typeOf(arg) === 'Object') {
                eventOptions = arg;
            } else {
                throw new Error("Incorrect event types/options arguments");
            }
        }

        return new org.izi.behavior.WhenWidget(this.config.withEvents(events).withEventOptions(eventOptions));
    };

    /**
     * Model properties names which should be observed for changes
     * @member org.izi.behavior.Perform
     * @param {String...} properties
     * @return {org.izi.behavior.WhenModel}
     */
    Perform.prototype.whenChangeOf = function (properties) {izi.sanityOf("whenChangeOf()").args(izi.varargOf("String")).check(arguments);

        return new org.izi.behavior.WhenModel(this.config.withModelProperties(Array.prototype.slice.call(arguments)));
    };


    /**
     * Target object for custom registrar
     *     var registrar = {
     *
     *         register: function (target) {
     *             target.addEventListener(...);
     *             target.addEventListener(...);
     *             target.addEventListener(...);
     *         },
     *
     *         unregister: function (target) {
     *             target.removeEventListener(...);
     *             target.removeEventListener(...);
     *             target.removeEventListener(...);
     *         }
     *     };
     *
     *     izi.perform(registrar).on(target);
     *
     * @param {Object} target
     */
    Perform.prototype.on = function (target) {izi.sanityOf("on()").args(izi.arg().ofObject()).check(arguments);
        var registrar = this.config.action;

        if (org.izi.utils.typeOf(registrar.register) === 'Function') {

            registrar.register(target);

            return {
                stopObserving: function () {
                    registrar.unregister(target);
                }
            }
        } else {
            throw new Error("Use on(target) method only for custom registrars: izi.perform({register: function (target){...}).on(target)");
        }
    };

    return Perform;
}();
/**
 * @member org.izi.behavior
 * @method
 * @private
 * @param {Object} impl
 */
org.izi.behavior.register = function (impl) {

    if (!impl.defaultPerformFunction) {
        throw new Error("Behavior implementation must have defined property: defaultPerformFunction: 'someFunctionName'");
    }
    if (!impl.observeWidget) {
        throw new Error("Behavior implementation must have defined function observeWidget (widget, eventConfig, action, scope, options)");
    }
    if (!impl.observeKeyStroke) {
        throw new Error("Behavior implementation must have defined function observeKeyStroke (widget, keyboardConfig, action, scope, options)");
    }

    /**
     * @hide
     * @sanity izi.sanityOf("izi.perform()").args(izi.arg("behavior").ofObject().havingFunction(impl.defaultPerformFunction)).args(izi.arg("behaviorWrapper").ofObject().havingProperty("delegatedIn")).args(izi.arg("callback").ofFunction()).args(izi.arg("callback").ofFunction(), izi.arg("scope").ofObject()).args(izi.arg("registrar").ofObject().havingFunctions("register", "unregister")).check(arguments);
     */
    return function (action, scope) {izi.sanityOf("izi.perform()").args(izi.arg("behavior").ofObject().havingFunction(impl.defaultPerformFunction)).args(izi.arg("behaviorWrapper").ofObject().havingProperty("delegatedIn")).args(izi.arg("callback").ofFunction()).args(izi.arg("callback").ofFunction(), izi.arg("scope").ofObject()).args(izi.arg("registrar").ofObject().havingFunctions("register", "unregister")).check(arguments);
        return new org.izi.behavior.Perform(new org.izi.behavior.Config(impl).withAction(action).withScope(scope));
    };
};
org.izi.binding.Config = function () {

    /**
     * Internal configuration used in binding fluent API
     * @class org.izi.binding.Config
     * @private
     * @constructor
     * @private
     * @param {Object} impl izi binding implementation
     */
    var Config = function org_izi_binding_Config(impl) {
        this.options = {
            auto: true,
            executeAtStartup: true,
            debug: false
        };
        this.impl = impl;
        this.triggerProperties = [];
        this.bindings = [];
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param {Object} options
     * @return {org.izi.binding.Config}
     * @since 1.1.0
     */
    Config.prototype.withOptions = function (options) {
        this.options = org.izi.utils.mergeObjects(this.options, options);
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param {org.izi.binding.Binding[]} bindings
     * @return {org.izi.binding.Config}
     * @since 1.1.0
     */
    Config.prototype.withBindings = function (bindings) {
        this.bindings = bindings;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param {Function} callerLineProvider
     * @return {org.izi.binding.Config}
     * @since 1.1.0
     */
    Config.prototype.withCallerLineProvider = function (callerLineProvider) {
        this.callerLineProvider = callerLineProvider;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param source
     * @return {org.izi.binding.Config}
     */
    Config.prototype.withSource = function (source) {
        this.source = source;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param sourceProperties
     * @return {org.izi.binding.Config}
     */
    Config.prototype.withSourceProperties = function (sourceProperties) {
        this.sourceProperties = sourceProperties.constructor === Array ? sourceProperties : [sourceProperties];
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param target
     * @return {org.izi.binding.Config}
     */
    Config.prototype.withTarget = function (target) {
        this.target = target;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param value
     * @return {org.izi.binding.Config}
     */
    Config.prototype.withTargetProperty = function (value) {
        this.targetProperty = value;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param formatter
     * @return {org.izi.binding.Config}
     */
    Config.prototype.withFormatter = function (formatter) {
        this.formatter = formatter;
        return this;
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param property
     */
    Config.prototype.addTriggerProperty = function (property) {
        this.triggerProperties.push(property);
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param {org.izi.binding.Binding} binding
     */
    Config.prototype.addBinding = function (binding) {
        this.bindings.push(binding);
    };

    /**
     * @member org.izi.binding.Config
     * @private
     * @param {org.izi.binding.Binding} binding
     */
    Config.prototype.removeBinding = function (binding) {
        org.izi.utils.removeItem(this.bindings, binding);
    };

    return Config;
}();org.izi.binding.Bind = function () {
    /**
     * After <code>izi.bind()...</code> fluent API
     * @class org.izi.binding.Bind
     * @constructor
     * @private
     * @param {org.izi.binding.Config} config
     */
    var Bind = function org_izi_binding_Bind(config) {
        this.config = config;
    };

    /**
     * @private
     * @param source
     * @param sourceProperty
     * @return {org.izi.binding.ValueOf}
     * @private
     */
    Bind.prototype._valueOf = function (source, sourceProperty) {

        if (arguments.length > 2) {
            sourceProperty = Array.prototype.slice.call(arguments, 1);
        }
        var config = this.cloneConfig()
            .withSource(source)
            .withSourceProperties(sourceProperty || "value")
            .withCallerLineProvider(org.izi.utils.getCallerLineProvider(2));

        return new org.izi.binding.ValueOf(config);
    };

    /**
     * Binding source setup.
     *
     * You can pass directly source instance or object containing source on <strong>delegatedIn</strong> property.
     * <code>
     *     var model = new User();
     *     var wrapper = {
     *         delegatedIn: model
     *     }
     *     izi.bind().valueOf(model, 'firstName');
     *
     *     // will work also for:
     *     izi.bind().valueOf(wrapper, 'firstName');
     * </code>
     * You can also specify more than one property:
     * <code>
     *     izi.bind().valueOf(model, 'firstName', 'lastName', 'title');
     * </code>
     *
     * @sanity izi.sanityOf("valueOf()").args(izi.arg("source").ofObject()).args(izi.arg("source").ofObject().havingProperty("delegatedIn")).args(izi.arg("source").ofObject(), izi.varargOf(izi.arg("sourceProperty").ofString())).args(izi.arg("source").ofObject().havingProperty("delegatedIn"), izi.varargOf(izi.arg("sourceProperty").ofString())).check(arguments);
     * @member org.izi.binding.Bind
     * @param {*} source Model or widget
     * @param {String...} [sourceProperty="value"] Property name or properties names
     * @return {org.izi.binding.ValueOf}
     */
    Bind.prototype.valueOf = function (source, sourceProperty) {izi.sanityOf("valueOf()").args(izi.arg("source").ofObject()).args(izi.arg("source").ofObject().havingProperty("delegatedIn")).args(izi.arg("source").ofObject(), izi.varargOf(izi.arg("sourceProperty").ofString())).args(izi.arg("source").ofObject().havingProperty("delegatedIn"), izi.varargOf(izi.arg("sourceProperty").ofString())).check(arguments);
        return this._valueOf.apply(this, arguments);
    };

    /**
     * Binding source setup for selected items of lists, grids, etc.
     * This is an alias to <code>this.valueOf(source, "selectedItems")</code>
     * You can pass directly model instance or object containing model on <strong>delegatedIn</strong> property.
     *
     *     var dataGrid = new DataGrid();
     *     var wrapper = {
     *         delegatedIn: dataGrid
     *     }
     *     izi.bind().selectedItemsOf(dataGrid);
     *
     *     // will work also for:
     *     izi.bind().selectedItemsOf(wrapper);
     *
     * @member org.izi.binding.Bind
     * @sanity izi.sanityOf("selectedItemsOf()").args(izi.arg("source").ofObject()).args(izi.arg("source").ofObject().havingProperty("delegatedIn")).check(arguments);
     * @param {*} source Grid, list or any other 'selectedItems' holder
     * @return {org.izi.binding.ValueOf}
     */
    Bind.prototype.selectedItemsOf = function (source) {izi.sanityOf("selectedItemsOf()").args(izi.arg("source").ofObject()).args(izi.arg("source").ofObject().havingProperty("delegatedIn")).check(arguments);
        return this._valueOf(source, "selectedItems");
    };

    /**
     * @member org.izi.binding.Bind
     * @private
     * @return {org.izi.binding.Config}
     */
    Bind.prototype.cloneConfig = function () {
        return new org.izi.binding.Config(this.config.impl)
            .withBindings(this.config.bindings)
            .withOptions(this.config.options);
    };

    /**
     * Unbind all registered bindings created by one <code>izi.bind()</code> instance.
     *
     *     var model = new User();
     *     var firstNameEditor, lastNameEditor;
     *
     *     var bind = izi.bind();
     *
     *     bind.valueOf(model, "firstName").to().valueOf(firstNameEditor);
     *     bind.valueOf(model, "lastName").to().valueOf(lastNameEditor);
     *
     *     bind.unbindAll(); // will stop listening for changes of both properties (firstName and lastName)
     *
     * @since 1.1.0
     * @member org.izi.binding.Bind
     */
    Bind.prototype.unbindAll = function () {
        org.izi.utils.forEach(this.config.bindings, function (binding) {
            binding.unbind();
        })
    };

    /**
     * Execute manually all registered bindings created by one <code>izi.bind({auto: false})</code> instance.
     *
     *     var model = new User();
     *     var firstNameEditor, lastNameEditor;
     *
     *     var bind = izi.bind();
     *
     *     bind.valueOf(model, "firstName").to().valueOf(firstNameEditor);
     *     bind.valueOf(model, "lastName").to().valueOf(lastNameEditor);
     *
     *     bind.executeAll(); // will execute bindings for both properties (firstName and lastName)
     *
     * @since 1.1.0
     * @member org.izi.binding.Bind
     */
    Bind.prototype.executeAll = function () {
        org.izi.utils.forEach(this.config.bindings, function (binding) {
            binding.execute();
        })
    };

    return Bind;
}();
org.izi.binding.ValueOf = function () {


    /**
     * After <code>izi.bind().valueOf(widget)...</code> fluent API
     * @class org.izi.binding.ValueOf
     * @constructor
     * @private
     * @param {org.izi.binding.Config} config
     */
    var ValueOf = function org_izi_binding_ValueOf(config) {
        this.config = config;
    };

    /**
     * Binding target setup.
     * You can pass directly target instance or object containing target on <strong>delegatedIn</strong> property.
     * <code>
     *     var label = new Label();
     *     var wrapper = {
     *         delegatedIn: label
     *     }
     *     izi.bind().valueOf(model).to(label, "text");
     *
     *     //will work also for:
     *     izi.bind().valueOf(model).to(wrapper, "text");
     * </code>
     * You can skip both parameters in order to more elegant notation:
     * <code>
     *     izi.bind().valueOf(model).to().textOf(label);
     * </code>
     *
     * As a target you can also use a function with given scope:
     *
     *     var scope = {
     *         firstName: null,
     *
     *         firstNameChangeHandler: function (value) {
     *             this.firstName = value;
     *         }
     *     }
     *
     *     izi.bind().valueOf(model, "firstName").to(scope.firstNameChangeHandler, scope);
     *     model.firstName("John");
     *
     * You can also skip the scope:
     *
     *     function firstNameChangeHandler(value) {
     *         console.log(value); // "John"
     *     }
     *
     *     izi.bind().valueOf(model, "firstName").to(firstNameChangeHandler);
     *     model.firstName("John");
     *
     * @member org.izi.binding.ValueOf
     * @sanity izi.sanityOf("to()").args().args(izi.arg("targetFunction").ofFunction()).args(izi.arg("targetFunction").ofFunction(), izi.arg("scope").ofObject()).args(izi.arg("target").ofObject(), izi.arg("targetProperty").ofString()).args(izi.arg("target").ofObject().havingProperty("delegatedIn"), izi.arg("targetProperty").ofString()).check(arguments);
     * @param {Object/Function} [target] Model or widget or Function
     * @param {String/Object} [targetProperty] Target property name or Function scope
     * @return {org.izi.binding.Binding|org.izi.binding.ValueOf} <code>.to()</code> returns org.izi.binding.ValueOf, <code>.to(target, "property")</code> returns org.izi.binding.Binding
     */
    ValueOf.prototype.to = function (target, targetProperty) {izi.sanityOf("to()").args().args(izi.arg("targetFunction").ofFunction()).args(izi.arg("targetFunction").ofFunction(), izi.arg("scope").ofObject()).args(izi.arg("target").ofObject(), izi.arg("targetProperty").ofString()).args(izi.arg("target").ofObject().havingProperty("delegatedIn"), izi.arg("targetProperty").ofString()).check(arguments);
        if (arguments.length === 0) {
            return this;
        } else {
            return new org.izi.binding.Binding(this.config.withTarget(target).withTargetProperty(targetProperty));
        }
    };

    /**
     * Binding target setup for 'value' property.
     *
     * @member org.izi.binding.ValueOf
     * @sanity izi.sanityOf("valueOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
     * @param {Object} target
     * @return {org.izi.binding.Binding}
     */
    ValueOf.prototype.valueOf = function (target) {izi.sanityOf("valueOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
        return this.to(target, "value");
    };

    /**
     * Binding target setup for 'text' property.
     *
     * @member org.izi.binding.ValueOf
     * @sanity izi.sanityOf("textOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
     * @param {Object} target
     * @return {org.izi.binding.Binding}
     */
    ValueOf.prototype.textOf = function (target) {izi.sanityOf("textOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
        return this.to(target, "text");
    };

    /**
     * Binding target setup for 'selectedItems' property.
     *
     * @member org.izi.binding.ValueOf
     * @sanity izi.sanityOf("selectedItemsOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
     * @param {Object} target
     * @return {org.izi.binding.Binding}
     */
    ValueOf.prototype.selectedItemsOf = function (target) {izi.sanityOf("selectedItemsOf()").args(izi.arg("target").ofObject()).args(izi.arg("target").ofObject().havingProperty("delegatedIn")).check(arguments);
        return this.to(target, "selectedItems");
    };

    /**
     * Formatter function which is used before set value on target.
     * If you specified more than one source properties - you must also specify formatter function.
     * <code>
     *     var fullNameFormatter = function (firstName, lastName) {
     *         return firstName + ' ' + lastName;
     *     }
     *     izi.bind().valueOf(model, 'firstName', 'lastName').through(fullNameFormatter)
     * </code>
     *
     * @member org.izi.binding.ValueOf
     * @param {Function} formatter Function that combines all source values to one value
     * @return {org.izi.binding.ValueOf}
     */
    ValueOf.prototype.through = function (formatter) {izi.sanityOf("through()").args(izi.arg().ofFunction()).check(arguments);
        this.config.withFormatter(formatter);
        return this;
    };

    /**
     * Additional source property which change will trigger binding execution.
     * <code>
     *     var label = new Label();
     *     var model = new User();
     *     model.getFullName = function () {
     *       return this.get("firstName") + ' ' + this.get("lastName");
     *     }
     *
     *     izi.bind().valueOf(model, "fullName")
     *               .onChangeOf("firstName")
     *               .onChangeOf("lastName")
     *               .to().textOf(label);
     * </code>
     *
     * @member org.izi.binding.ValueOf
     * @param {String} property Model property that triggers binding execution
     * @return {org.izi.binding.ValueOf}
     */
    ValueOf.prototype.onChangeOf = function (property) {izi.sanityOf("onChangeOf()").args(izi.arg().ofString()).check(arguments);
        this.config.addTriggerProperty(property);
        return this;
    };

    return ValueOf;
}();org.izi.binding.Binding = (function () {
    var forEach = org.izi.utils.forEach,
        curry = org.izi.utils.curry,
        findClosure = org.izi.utils.findClosure,
        INVALID_VALUE = {};

    /**
     * Binding initializer - the last part of
     * <code>izi.bind().valueOf(source, 'sourceProperty').to(target, 'targetProperty')</code> fluent API
     * @class org.izi.binding.Binding
     * @constructor
     * @private
     * @param {org.izi.binding.Config} config
     */
    var Binding = function org_izi_binding_Binding(config) {

        this.impl = config.impl;
        this.source = config.source.delegatedIn || config.source;
        this.sourceProperties = config.sourceProperties;
        this.triggerProperties = config.triggerProperties;
        this.target = config.target.delegatedIn || config.target;
        this.targetProperty = config.targetProperty;
        this.formatter = config.formatter;
        this.sourceReaders = {};
        this.targetReader = undefined;
        this.targetWriter = undefined;
        this.observers = [];
        this.options = config.options;
        this.getCallerLine = config.callerLineProvider;

        this.registerReadersAndWriters();

        if (this.options.auto) {
            if (this.options.executeAtStartup) {
                this.transferValue();
            }
            this.bind();
        }

        config.addBinding(this);
    };

    /**
     * @member org.izi.binding.Binding
     * @private
     * @param object
     * @param properties
     * @return {*}
     */
    Binding.prototype.getFormattedValues = function (object, properties) {
        var values = [],
            sourceReader,
            sourceReaders = this.sourceReaders,
            formatter = this.formatter;


        forEach(properties, function (property) {
            sourceReader = sourceReaders[property];
            values.push(sourceReader(object, property));
        });

        if (formatter && (typeof formatter === "function")) {
            return formatter.apply(null, values);
        } else if (values.length === 1) {
            return values[0];
        } else {
            throw new Error("You must use formatter if you want to bind more properties than one. Ex: izi.bind().valueOf(model, 'firstName', 'lastName').through(concatFormatter)...");
        }
    };

    /**
     * @private
     * @param sourceValue
     */
    Binding.prototype.debugBinding = function (sourceValue) {
        var callerLine;

        if (this.options.debug) {
            callerLine = org.izi.utils.trim(this.getCallerLine());
            org.izi.utils.log('[BINDING] ' + callerLine, {
                source: this.source,
                sourceProperties: this.sourceProperties,
                target: this.target,
                targetProperty: this.targetProperty,
                triggerProperties: this.triggerProperties,
                value: sourceValue
            });
        }
    };

    /**
     * @member org.izi.binding.Binding
     * @private
     */
    Binding.prototype.transferValue = function () {
        var source = this.source,
            sourceProperties = this.sourceProperties,
            sourceValue = this.getFormattedValues(source, sourceProperties),
            targetReader = this.targetReader,
            targetWriter = this.targetWriter,
            target = this.target,
            targetProperty = this.targetProperty,
            targetValue;

        try {
            targetValue = targetReader(target, targetProperty);
        } catch (error) {
            targetValue = INVALID_VALUE;
        }

        if (sourceValue !== targetValue) {
            this.debugBinding(sourceValue);
            targetWriter(target, targetProperty, sourceValue);
        }
    };

    /**
     * @member org.izi.binding.Binding
     * @private
     * @param source
     * @param sourceProperty
     * @param target
     * @param targetProperty
     * @param transferValueFn
     * @return {*}
     */
    Binding.prototype.getChangeObserver = function (source, sourceProperty, target, targetProperty, transferValueFn) {
        var impl = this.impl;

        try {
            return findClosure(impl.changeObservers, [source, sourceProperty, target, targetProperty, transferValueFn], this);
        } catch (error) {
            if (!this.options.allowNotWatchable) {
                throw new Error("Could not find change observer for: " + source + " and property: " + sourceProperty);
            }

            if (izi.isDebug) {
                org.izi.utils.log("[BINDING] Could not find change observer for:",  source,  "and property:", sourceProperty);
            }

            return function notWatchableObserver () {
                return function doNothing() {}
            }
        }
    };

    /**
     * @member org.izi.binding.Binding
     * @private
     */
    Binding.prototype.registerReadersAndWriters = function () {
        var source = this.source,
            target = this.target,
            targetProperty = this.targetProperty,
            sourceProperties = this.sourceProperties,
            sourceReaders = this.sourceReaders,
            valueReaders = this.impl.valueReaders,
            valueWriters = this.impl.valueWriters,
            me = this;

        forEach(sourceProperties, function (sourceProperty) {
            try {
                sourceReaders[sourceProperty] = findClosure(valueReaders, [source, sourceProperty, "sourceReader"], this);
            } catch (e) {
                throw new Error("Could not find reader function for: " + source + " using property: " + sourceProperty);
            }
        });

        try {
            this.targetReader = findClosure(valueReaders, [target, targetProperty, "targetReader"], this);
        } catch (e) {
            this.targetReader = function () {
                return INVALID_VALUE;
            }
        }

        try {
            this.targetWriter = findClosure(valueWriters, [target, targetProperty], this);
        } catch (e) {
            throw new Error("Could not find writer function for: " + target + " using property: " + targetProperty);
        }
    };

    /**
     * Bind target to source (start listening for source changes). When you use <code>izi.bind()</code> this is called
     * automatically. You should call it only when you use <code>izi.bind({auto:false})</code> option.
     * This method doesn't transfer value from source to target - {@link org.izi.binding.Binding#execute} does it.
     * @member org.izi.binding.Binding
     * @since 1.1.0
     */
    Binding.prototype.bind = function () {
        var sourceProperties = this.sourceProperties,
            triggerProperties = this.triggerProperties,
            source = this.source,
            target = this.target,
            targetProperty = this.targetProperty,
            allTriggerProperties = triggerProperties.concat(sourceProperties),
            observers = this.observers,
            transferValueFn = curry(this.transferValue, this),
            me = this;

        forEach(allTriggerProperties, function (sourceProperty) {
            var changeObserver = me.getChangeObserver(source, sourceProperty, target, targetProperty, transferValueFn);
            observers.push(changeObserver(source, sourceProperty, target, targetProperty, transferValueFn));
        });
    };

    /**
     * @member org.izi.binding.Binding
     * @deprecated 1.1.0 Use {@link org.izi.binding.Binding#unbind} instead.
     * @return {void}
     */
    Binding.prototype.stopObserving = function () {
        this.unbind();
    };

    /**
     * Unbind target from source (stop listening for source changes).
     * @member org.izi.binding.Binding
     * @since 1.1.0
     */
    Binding.prototype.unbind = function () {
        forEach(this.observers, function (observer) {
            observer();
        });
    };

    /**
     * Execute binding (transfer value from source to target)
     * @member org.izi.binding.Binding
     * @since 1.1.0
     */
    Binding.prototype.execute = function () {
        this.transferValue();
    };

    return Binding;
}());org.izi.binding.impl.createReader = function (matcher, reader) {
    return function () {
        return matcher.apply(this, arguments) ? reader : null;
    }
};org.izi.binding.impl.createWriter = function (matcher, writer) {
    return function () {
        return matcher.apply(this, arguments) ? writer : null;
    }
};org.izi.binding.impl.createObserver = function (matcher, observer) {
    return function () {
        return matcher.apply(this, arguments) ? observer : null;
    }
};

org.izi.binding.impl.readByGet = function () {

    function matcher(object, property) {
        return (typeof object.get) === "function";
    }

    function reader(object, property) {
        return object.get(property);
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();

org.izi.binding.impl.readByCapitalizedGetter = function () {

    var capitalize = org.izi.utils.capitalize;

    function reader(object, property) {
        return object["get" + capitalize(property)]();
    }

    function matcher(object, property) {
        return org.izi.utils.typeOf(property) === "String" &&  (typeof object["get" + capitalize(property)]) === "function";
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();

org.izi.binding.impl.readByFunction = function () {

    function reader(object, property) {
        return object[property]();
    }

    function matcher(object, property) {
        return (typeof object[property] === 'function');
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();

org.izi.binding.impl.readFromProperty = function () {

    function reader(object, property) {
        return object[property];
    }

    function matcher(object, property) {
        return true;
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();

org.izi.binding.impl.readFromOwnedProperty = function () {

    function reader(object, property) {
        return object[property];
    }

    function matcher(object, property) {
        return org.izi.utils.hasOwnProperty(object, property);
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();org.izi.binding.impl.writeBySet = function () {

    function matcher(object, property) {
        return (typeof object.set) === "function";
    }

    function writer(object, property, value) {
        object.set(property, value);
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();

org.izi.binding.impl.writeByCapitalizedSetter = function () {

    var capitalize = org.izi.utils.capitalize;

    function matcher(object, property) {
        return org.izi.utils.typeOf(property) === "String" &&  (typeof object["set" + capitalize(property)]) === "function";
    }

    function writer(object, property, value) {
        object["set" + capitalize(property)](value);
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();

org.izi.binding.impl.writeToProperty = function () {

    function matcher(object, property) {
        return true;
    }

    function writer(object, property, value) {
        object[property] = value;
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();

org.izi.binding.impl.writeToOwnedProperty = function () {

    function matcher(object, property) {
        return org.izi.utils.hasOwnProperty(object, property);
    }

    function writer(object, property, value) {
        object[property] = value;
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();

org.izi.binding.impl.writeByFunction = function () {

    function matcher(object, property) {
        return org.izi.utils.typeOf(object) === 'Function';
    }

    function writer(fn, scope, value) {
        try {
            fn.call(scope, value);
        } catch (e) {
        }
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();

org.izi.binding.impl.writeToFunction = function () {

    function matcher(object, property) {
        return org.izi.utils.typeOf(object[property]) === 'Function';
    }

    function writer(object, property, value) {
        object[property](value);
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();org.izi.binding.impl.iziModelChangeObserver = function () {

    function matcher(source, sourceProperty, target, targetProperty, transferValueFn) {
        return source.isIziModel;
    }

    function observer(source, sourceProperty, target, targetProperty, transferValueFn) {

        var propertyChange = sourceProperty + "Change";

        source.addListener(propertyChange, transferValueFn);

        return function stopObserving() {
            source.removeListener(propertyChange, transferValueFn);
        };
    }

    return org.izi.binding.impl.createObserver(matcher, observer);
}();org.izi.binding.impl.customPropertyObserver = function () {

    function matcher(source, sourceProperty, target, targetProperty, transferValueFn) {
        return source.iziObserveProperty;
    }

    function observer(source, sourceProperty, target, targetProperty, transferValueFn) {

        return source.iziObserveProperty(sourceProperty, transferValueFn);
    }

    return org.izi.binding.impl.createObserver(matcher, observer);
}();/**
 * @member org.izi.binding
 * @method
 * @private
 * @param {Object} impl
 */
org.izi.binding.register = function (impl) {
    var nestedImpl = {
        changeObservers: [org.izi.binding.impl.nested.nestedObserver,
                          org.izi.binding.impl.customPropertyObserver].concat(impl.changeObservers),
        valueReaders: [org.izi.binding.impl.nested.nestedReader].concat(impl.valueReaders),
        valueWriters: [org.izi.binding.impl.nested.nestedWriter].concat(impl.valueWriters)
    };
    return function (options) {
        return new org.izi.binding.Bind(new org.izi.binding.Config(nestedImpl).withOptions(options || {}));
    };
};org.izi.binding.impl.nested.isNestedProperty = function org_izi_binding_impl_nested_isNestedProperty(property) {
    return org.izi.utils.typeOf(property) === "String" && property.indexOf(".") > -1
};org.izi.binding.impl.nested.TargetWriter = function () {

    var TargetWriter = function org_izi_binding_impl_nested_TargetWriter(path, writers) {
        this.property = path.split(".").pop();
        this.writers = writers;
    };

    TargetWriter.prototype.writeValue = function (object, value) {
        try {
            var writer = org.izi.utils.findClosure(this.writers, [object, this.property, value]);
            writer(object, this.property, value);
        } catch (e) {
        }
    };

    return TargetWriter;
}();org.izi.binding.impl.nested.TargetFinder = function () {

    var TargetFinder = function (path, readers) {
        this.path = path.split(".");
        this.path.pop();
        this.readers = readers;
    };

    TargetFinder.prototype.findFor = function (object) {
        var currentObject = object;
        for (var i = 0; i < this.path.length; i++) {
            var property = this.path[i];

            try {
                var reader = org.izi.utils.findClosure(this.readers, [currentObject, property, "targetReader"]);
                currentObject = reader(currentObject, property);
                if (!currentObject) {
                    break;
                }
            } catch (e) {
                break;
            }
        }

        if (i === this.path.length) {
            return currentObject;
        } else {
            return undefined;
        }
    };

    return TargetFinder;
}();org.izi.binding.impl.nested.NestedWatcher = function () {

    function extractFirstField(field) {
        if (field.indexOf(".") === -1) {
            return field;
        }
        return field.substr(0, field.indexOf("."));
    }

    function extractNextFields(field) {
        if (field.indexOf(".") === -1) {
            return undefined;
        }

        return field.substr(field.indexOf(".") + 1);
    }

    var NestedWatcher = function org_izi_binding_impl_NestedWatcher(path) {

        this.path = path;
        this.sourceProperty = extractFirstField(path);

        var nextFields = extractNextFields(path);
        if (nextFields) {
            this.child = new NestedWatcher(nextFields);
            this.child.onValueChanged(this.fireChange, this);
        }

        NestedWatcher.upper.constructor.apply(this);
    };

    org.izi.utils.inherit(NestedWatcher, org.izi.model.Observable);


    NestedWatcher.prototype.setSource = function (source) {
        this.stopObserving();
        this.source = source;
        this.startObserving();
    };

    NestedWatcher.prototype.onValueChanged = function (callback, scope) {
        this.addListener("valueChanged", callback, scope);
    };

    NestedWatcher.prototype.stopObserving = function () {
        if (this.handler) {
            this.handler.unbind();
        }

        if (this.child) {
            this.child.stopObserving();
        }
    };

    NestedWatcher.prototype.startObserving = function () {
        if (this.source) {
            var bind = izi.bind({allowNotWatchable: true});
            bind.config.withSource(this.source).withSourceProperties(this.sourceProperty).withTarget(this.valueChanged).withTargetProperty(this);
            this.handler = new org.izi.binding.Binding(bind.config);
        } else {
            this.fireChange(undefined);
        }
    };

    NestedWatcher.prototype.valueChanged = function (value) {
        if (this.child) {
            this.child.setSource(value);
        } else {
            this.fireChange(value);
        }
    };

    NestedWatcher.prototype.fireChange = function (value) {
        this.dispatchEvent("valueChanged", [value]);
    };

    return NestedWatcher;
}();org.izi.binding.impl.nested.nestedReader = function () {

    var nestedWatcher;

    function watchForCurrentValue(object, property) {
        if (!object.iziNestedWatchers) {
            object.iziNestedWatchers = {};
        }

        if (object.iziNestedWatchers[property]) {
            nestedWatcher = object.iziNestedWatchers[property];
        } else {
            nestedWatcher = new org.izi.binding.impl.nested.NestedWatcher(property);
            nestedWatcher.onValueChanged(function (value) {
                this.currentValue = value;
            }, nestedWatcher);
            nestedWatcher.setSource(object);
            object.iziNestedWatchers[property] = nestedWatcher;
        }
    }

    function matcher(object, property, type) {
        var isWatchableNestedProperty = type === "sourceReader" && org.izi.binding.impl.nested.isNestedProperty(property);

        if (isWatchableNestedProperty) {
            watchForCurrentValue(object, property);
        }

        return isWatchableNestedProperty;
    }

    function reader(object, property) {
        return nestedWatcher.currentValue;
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();
org.izi.binding.impl.nested.nestedWriter = function () {
    var impl, targetFinder, targetWriter;

    function matcher(object, property) {
        impl = this.impl;
        var result = org.izi.binding.impl.nested.isNestedProperty(property);
        if (result) {
            targetFinder = new org.izi.binding.impl.nested.TargetFinder(property, impl.valueReaders);
            targetWriter = new org.izi.binding.impl.nested.TargetWriter(property, impl.valueWriters);

            if (izi.isDebug && property.split(".").length > 3) {
                org.izi.utils.log("[BINDING]" + this.getCallerLine() + " Binding target path \"" + property +"\" has more than 3 parts. Consider using .to(function(value) { target.x.y.x = value; }) instead.");
            }
        }
        return result;
    }

    function writer(object, property, value) {
        var target = targetFinder.findFor(object);

        if (target) {
            targetWriter.writeValue(target, value);
        }
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();org.izi.binding.impl.nested.nestedObserver = function () {

    function matcher(source, sourceProperty, target, targetProperty, transferValueFn) {
        return org.izi.binding.impl.nested.isNestedProperty(sourceProperty);
    }

    function observer(source, sourceProperty, target, targetProperty, transferValueFn) {

        var nestedWatcher = source.iziNestedWatchers[sourceProperty];
        nestedWatcher.onValueChanged(transferValueFn);

        return org.izi.utils.curry(nestedWatcher.stopObserving, nestedWatcher);
    }

    return org.izi.binding.impl.createObserver(matcher, observer);
}();org.izi.queue.TimeoutGuard = function () {
    var curry = org.izi.utils.curry;

    /**
     * @class org.izi.queue.TimeoutGuard
     * @private
     * @constructor
     * @param {org.izi.queue.Queue} queue
     */
    var TimeoutGuard = function org_izi_queue_TimeoutGuard(queue) {
        this.queue = queue;
        queue.onTaskStarted(this.startCountDown, this);
        queue.onTaskFinished(this.stopCountDown, this);
    };

    /**
     * @member org.izi.queue.TimeoutGuard
     * @private
     * @param event
     */
    TimeoutGuard.prototype.startCountDown = function (event) {
        var timeout = this.queue.timeoutForTask(event.task);
        if (timeout > 0) {
            this.timeoutId = setTimeout(curry(this.timeoutTask, this), timeout);
        }
    };

    /**
     * @member org.izi.queue.TimeoutGuard
     * @private
     */
    TimeoutGuard.prototype.timeoutTask = function () {
        this.queue.currentTaskTimeouted();
    };

    /**
     * @member org.izi.queue.TimeoutGuard
     * @private
     */
    TimeoutGuard.prototype.stopCountDown = function () {
        clearTimeout(this.timeoutId);
    };

    return TimeoutGuard;
}();org.izi.queue.GenericTask = function () {

    /**
     * @class org.izi.queue.GenericTask
     * @private
     * @constructor
     * @param functionToExecute
     * @param scope
     */
    var GenericTask = function org_izi_queue_GenericTask(functionToExecute, scope) {
        this.functionToExecute = functionToExecute;
        this.scope = scope;
    };

    /**
     * @member org.izi.queue.GenericTask
     * @private
     */
    GenericTask.prototype.execute = function () {
        this.functionToExecute.apply(this.scope, arguments);
    };

    return GenericTask;
}();org.izi.queue.SynchronizedFunction = function () {

    /**
     * @class org.izi.queue.SynchronizedFunction
     * @private
     * @param originalFunction
     * @param scope
     */
    var SynchronizedFunction = function org_izi_queue_SynchronizedFunction(originalFunction, scope) {
        SynchronizedFunction.upper.constructor.apply(this);
        this.originalFunction = originalFunction;
        this.scope = scope;
        this.logLabel = "synchronize.onCallback()";
    };
    org.izi.utils.inherit(SynchronizedFunction, org.izi.model.Observable);

    /**
     * @member org.izi.queue.SynchronizedFunction
     * @private
     * @return {Function}
     */
    SynchronizedFunction.prototype.synchronizedFunction = function () {
        try
        {
            if (this.originalFunction)
                return this.originalFunction.apply(this.scope, arguments);
        }
        finally
        {
            this.dispatchEvent("synchronized", [this]);
        }
    };

    return SynchronizedFunction;
}();org.izi.queue.SynchronizedOnEvent = function () {

    /**
     * @class org.izi.queue.SynchronizedOnEvent
     * @private
     * @constructor
     * @param {Object} dispatcher
     * @param {Array|Arguments} events
     */
    var SynchronizedOnEvent = function org_izi_queue_SynchronizedOnEvent(dispatcher, events) {
        SynchronizedOnEvent.upper.constructor.apply(this);
        var perform = izi.perform(this.doSynchronized, this);
        this.handler = perform.when.apply(perform, events).on(dispatcher);
        this.logLabel = "synchronize.onEvent()";
    };
    org.izi.utils.inherit(SynchronizedOnEvent, org.izi.model.Observable);

    /**
     * @member org.izi.queue.SynchronizedOnEvent
     * @private
     */
    SynchronizedOnEvent.prototype.doSynchronized = function () {
        this.handler.stopObserving();
        this.dispatchEvent("synchronized", [this]);
    };

    return SynchronizedOnEvent;
}();org.izi.queue.SynchronizedResponder = function () {

    /**
     * @class org.izi.queue.SynchronizedResponder
     * @private
     * @constructor
     * @param {Object} responder
     * @param {String} [resultFunctionName="result"]
     * @param {String} [errorFunctionName="error"]
     */
    var SynchronizedResponder = function org_izi_queue_SynchronizedResponder(responder, resultFunctionName, errorFunctionName) {
        SynchronizedResponder.upper.constructor.apply(this);

        var me = this;
        resultFunctionName = resultFunctionName || "result";
        errorFunctionName = errorFunctionName || "error";

        this.synchronizedResponder = {};
        this.synchronizedResponder[resultFunctionName] = function () {
            try {
                responder[resultFunctionName].apply(responder, arguments);
            } finally {
                me.dispatchEvent("synchronized", [me]);
            }
        };
        this.synchronizedResponder[errorFunctionName] = function () {
            try {
                responder[errorFunctionName].apply(responder, arguments);
            } finally {
                me.dispatchEvent("synchronized", [me]);
            }
        };
        this.logLabel = "synchronize.responder()";
    };

    org.izi.utils.inherit(SynchronizedResponder, org.izi.model.Observable);

    return SynchronizedResponder;
}();org.izi.queue.Synchronizer = function () {

    /**
     * Synchronizer is a utility that allows you to synchronize current task in the easiest way. Instance of this
     * class is available as first argument of `execute()` method when the task is defined as an `Object` or directly
     * as first argument of function, when the task is defined as a `Function`:
     *
     *     var task1 = {
     *             execute: function (synchronize) {
     *                 // synchronize.onCallback(...)
     *                 // synchronize.onEvent(...)
     *                 // synchronize.responder(...)
     *             }
     *         },
     *         task2 = function (synchronize) {
     *             // synchronize.onCallback(...)
     *             // synchronize.onEvent(...)
     *             // synchronize.responder(...)
     *         }
     *     };
     *     izi.queue().execute(task1, task2);
     *
     * When one of:
     *
     *  * {@link org.izi.queue.Synchronizer#onCallback synchronize.onCallback}
     *  * {@link org.izi.queue.Synchronizer#onEvent synchronize.onEvent}
     *  * {@link org.izi.queue.Synchronizer#responder synchronize.responder}
     *
     * is called, it informs the queue that this task calls some asynchronous code, so queue should wait until all asynchronous callbacks
     * return. There may be synchronized more than one asynchronous code - the queue will be waiting for all of them.
     *
     * There is also available access to queue.cancel() method directly in synchronizer:
     *     var task1 = {
     *         execute: function (synchronize) {
     *             // store handler of cancelQueue for later execution
     *             this.cancelQueue = synchronize.cancelQueue;
     *
     *             setTimeout(synchronize.onCallback(this.doOnCallback, this), 1000);
     *         },
     *
     *         doOnCallback: function () {
     *             if (someCondition) {
     *                 this.cancelQueue();
     *             }
     *         }
     *     }
     *
     *
     * @since 1.2.0
     * @class org.izi.queue.Synchronizer
     * @constructor
     * @private
     * @param {org.izi.queue.Queue} queue
     */
    var Synchronizer = function org_izi_queue_Synchronizer(queue) {
        this.queue = queue;
        this.synchronizations = new org.izi.utils.Map();
        this.awaitedTasks = new org.izi.utils.Map();

        /**
         * Delegates to queue.cancel()
         * @member org.izi.queue.Synchronizer
         */
        this.cancelQueue = function () {
            queue.cancel();
        }
    };

    /**
     * Synchronizes the queue after `nonSynchronized` callback will be called by external caller. This method returns
     * a closure which executes first `nonSynchronized` function and after that notifies the queue to execute next task.
     * If `nonSynchronized` is not given, then queue will just execute next task when callback triggers.
     *
     * Example 1 - just synchronize on callback
     *     var task1 = {
     *         execute: function(synchronize) {
     *             // when setTimeout() callback triggers after 1000ms, then queue will execute `task2`
     *             setTimeout(synchronize.onCallback(), 1000);
     *         }
     *     };
     *
     *     izi.queue().execute(task1, task2);
     *
     * Example 2 - synchronize on callback and execute some extra callback code
     *     var task1 = {
     *         execute: function(synchronize) {
     *             setTimeout(synchronize.onCallback(this.doOnCallback, this), 1000);
     *         }
     *
     *         doOnCallback: function () {
     *             // do some extra code when callback called
     *             // after this code the queue will execute `task2`
     *         }
     *     };
     *
     *     izi.queue().execute(task1, task2);
     *
     * @since 1.2.0
     * @member org.izi.queue.Synchronizer
     * @param {Function} [nonSynchronized]
     * @param {Object} [scope]
     * @return {Function}
     */
    Synchronizer.prototype.onCallback = function (nonSynchronized, scope) {izi.sanityOf("onCallback()").args().args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        var task = this.obtainTask(),
            synchronization = new org.izi.queue.SynchronizedFunction(nonSynchronized, scope);

        this.recordSynchronization(synchronization, task);

        return org.izi.utils.curry(synchronization.synchronizedFunction, synchronization);
    };

    /**
     * Synchronizes the queue when dispatcher will fire an event of given type
     *
     * Example - synchronize task when user clicks OK button
     *     var task1 = {
     *         alertPopup: new AlertPopup(),
     *
     *         execute: function(synchronize) {
     *             synchronize.onEvent(this.alertPopup.okButton, izi.events.click());
     *         }
     *     };
     *
     *     izi.queue().execute(task1, task2);
     *
     * @since 1.2.0
     * @member org.izi.queue.Synchronizer
     * @param {Object} dispatcher
     * @param {String...|org.izi.events.EventConfig...} vararg of event types as String or `izi.events.*`
     */
    Synchronizer.prototype.onEvent = function (dispatcher, event) {izi.sanityOf("onEvent()").args(izi.arg().ofObject(),izi.varargOf("String|org.izi.events.EventConfig")).check(arguments);
        var task = this.obtainTask(),
            synchronization = new org.izi.queue.SynchronizedOnEvent(dispatcher, Array.prototype.slice.call(arguments, 1));
        this.recordSynchronization(synchronization, task);
    };

    /**
     * Synchronizes the queue when service triggers the responder either on `result()` or `error()` methods.
     * If you have reponder with methods different than `result()` or `error()`, then you can specify the custom ones.
     *
     * Example - synchronize task when any of `result()` or `error()` methods will be triggered
     *     var task1 = {
     *
     *         execute: function(synchronize) {
     *             Ajax.request("/someUrl", someParameters, synchronize.responder(this));
     *         },
     *
     *         result: function (ajaxResponse) {
     *             // some code for handling Ajax response
     *             // after this code the queue will execute `task2`
     *         },
     *
     *         error: function (ajaxFailure) {
     *             // some code for handling Ajax error
     *             // after this code the queue will execute `task2`
     *         },
     *     };
     *
     *     izi.queue().execute(task1, task2);
     *
     * @since 1.2.0
     * @member org.izi.queue.Synchronizer
     * @param {Object} responder
     * @param {String} [resultFunctionName="result"]
     * @param {String} [errorFunctionName="error"]
     * @return {*}
     */
    Synchronizer.prototype.responder = function (responder, resultFunctionName, errorFunctionName) {izi.sanityOf("responder()").args(izi.arg().ofObject()).args(izi.arg().ofObject(),izi.arg().ofString()).args(izi.arg().ofObject(),izi.arg().ofString(),izi.arg().ofString()).check(arguments);
        var task = this.obtainTask(),
            synchronization = new org.izi.queue.SynchronizedResponder(responder, resultFunctionName, errorFunctionName);
        return this.recordSynchronization(synchronization, task).synchronizedResponder;
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param synchronization
     * @param task
     * @return {*}
     */
    Synchronizer.prototype.recordSynchronization = function (synchronization, task) {
        this.queue.log("        " + synchronization.logLabel + " was used by task: " + this.queue.getCurrentTaskIndex() + " of " + this.queue.countTasks());
        this.synchronizations.set(synchronization, task);
        synchronization.addListener("synchronized", this.removeSynchronization, this);
        return synchronization;
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param synchronization
     */
    Synchronizer.prototype.removeSynchronization = function (synchronization) {
        var task = this.synchronizations.get(synchronization);
        this.synchronizations.remove(synchronization);

        var pendingSynchronizationsOnTask = this.countSynchronizations(task);
        this.queue.log("        " + synchronization.logLabel + " completed by task: " + this.queue.getCurrentTaskIndex() + " of " + this.queue.countTasks());
        if (pendingSynchronizationsOnTask == 0)
            this.taskSynchronized(task);
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param task
     */
    Synchronizer.prototype.taskSynchronized = function (task) {
        var awaitedTasks = this.awaitedTasks;

        var proceedClosure = awaitedTasks.get(task);
        if (proceedClosure) {
            try {
                proceedClosure.fn.apply(proceedClosure.scope);
            }
            finally {
                awaitedTasks.remove(task);
            }
        }
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param task
     * @return {*}
     */
    Synchronizer.prototype.countSynchronizations = function (task) {
        return this.synchronizations.countValues(task);
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @return {*}
     */
    Synchronizer.prototype.obtainTask = function () {
        var task = this.queue.currentTask;
        if (!task)
            throw new Error("There is no task executed. Please use izi.queue().execute(someTask) and use this method.");
        return task;
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @return {boolean}
     */
    Synchronizer.prototype.hasPendingSynchronizations = function () {
        return !!this.synchronizations.count();
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param task
     * @param proceedClosure
     */
    Synchronizer.prototype.afterSynchronizingTaskCall = function (task, proceedClosure) {
        this.awaitedTasks.set(task, proceedClosure);
    };

    /**
     * @member org.izi.queue.Synchronizer
     * @private
     * @param task
     */
    Synchronizer.prototype.taskTimeout = function (task) {
        var synchronizations = this.synchronizations,
            synchronizationsToRemove = synchronizations.getKeysOf(task);

        this.queue.log("    Time outed task: " + this.queue.getCurrentTaskIndex() + " of " + this.queue.countTasks());
        this.awaitedTasks.remove(task);

        org.izi.utils.forEach(synchronizationsToRemove, function (synchronization) {
            synchronizations.remove(synchronization);
        });
    };

    return Synchronizer;
}();
org.izi.queue.Queue = function (global) {

    var typeOf = org.izi.utils.typeOf,
        mergeObjects = org.izi.utils.mergeObjects,
        forEach = org.izi.utils.forEach,
        log = org.izi.utils.log,
        queueUniqueId = 0;

    function formatTimeStamp() {
        var now = new Date();
        return padding(now.getHours(), 2) +
               ":" +
               padding(now.getMinutes(), 2) +
               ":" +
               padding(now.getSeconds(), 2) +
               "." +
               padding(now.getMilliseconds(), 3);
    }

    function padding(value, padding) {
        var number = "" + value;
        return new Array(padding - number.length + 1).join("0") + number;
    }

    /**
     * `izi.queue()` allows you to define and execute sequence of synchronous and asynchronous tasks. Task may be defined
     * as a `Function` or an `Object` with `execute()` function.
     *
     *     var taskAsFunction = function () {
     *         // some code of task
     *     }
     *
     *     var taskAsObject = {
     *         execute: function () {
     *             // some code of task
     *         }
     *     }
     *
     * Example - two equivalent ways for defining and running the queue:
     *
     *     izi.queue().execute(task1,
     *                         task2,
     *                         task3);
     *
     *     // is a shortcut of:
     *     izi.queue().push(task1,
     *                      task2,
     *                      task3).start();
     *
     * The second example allows you to define a queue once and run many times and also it allows to add event listeners
     * before starting the queue:
     *     var queue = izi.queue().push(task1,
     *                                  task2,
     *                                  task3);
     *
     *     queue.onTaskStarted(doSomethingWhenTaskStarted);
     *     queue.onTaskFinished(doSomethingWhenTaskFinished);
     *
     *     queue.start();
     *
     * When the task executes some asynchronous code and the queue should wait until it finish - then we can say the task
     * is asynchronous and we need to notify somehow the queue to not execute next task immediately. This problem is
     * solved by usage of **{@link org.izi.queue.Synchronizer synchronize}** argument passed to each task, like in example below:
     *
     *     var asynchronousTask = {
     *         execute: function (synchronize) {
     *             setTimeout(synchronize.onCallback(), 1000);
     *         }
     *     };
     *     var synchronousTask = {
     *         execute: function () {
     *             // do some synchronous code
     *         }
     *     }
     *
     *     izi.queue().execute(asynchronousTask,
     *                         synchronousTask);
     *
     * You can find more synchronization methods in {@link org.izi.queue.Synchronizer} documentation
     *
     * @class org.izi.queue.Queue
     * @since 1.2.0
     * @constructor
     * @private
     * @param {Object} impl framework queue implementation
     * @param {Object} config queue configuration
     */
    var Queue = function org_izi_queue_Queue(impl, config) {
        var defaultConfig = {
            scope: global,
            defaultTimeout: 0,
            debug: undefined
        };

        this.config = mergeObjects(defaultConfig, config);
        this.queue = [];
        this.originalQueue = [];
        if (this.config.debug) {
            queueUniqueId++;
            this.id = this.config.debug + ":" + queueUniqueId;
        }

        this.delegatedIn = impl.createEventDispatcher();
        this.dispatchEvent = impl.dispatchEvent;

        this.synchronizer = new org.izi.queue.Synchronizer(this);
        new org.izi.queue.TimeoutGuard(this);
    };

    /**
     * Enqueue all given functions and tasks (object with execute function), and execute them sequentially
     *
     * @since 1.2.0
     * @member org.izi.queue.Queue
     * @param {Function...|Object~execute()...} vararg of tasks or functions
     * @return {org.izi.queue.Queue}
     */
    Queue.prototype.execute = function () {izi.sanityOf("execute()").args(izi.varargOf("Function|Object~execute()")).check(arguments);
        this.pushAll(arguments);
        this.start();
        return this;
    };

    /**
     * Enqueue all given functions and tasks (object with execute function)
     *
     * @since 1.2.0
     * @member org.izi.queue.Queue
     * @param {Function...|Object~execute...} vararg of tasks or functions
     * @return {org.izi.queue.Queue}
     */
    Queue.prototype.push = function () {izi.sanityOf("push()").args(izi.varargOf("Function|Object~execute")).check(arguments);
        this.pushAll(arguments);
        return this;
    };

    /**
     * Start executing tasks synchronously
     *
     * @since 1.2.0
     * @member org.izi.queue.Queue
     * @return {org.izi.queue.Queue}
     */
    Queue.prototype.start = function () {
        if (this.isExecutedTask()) {
            throw new Error("Can't start already started queue until it's finished");
        }

        this.queue = this.originalQueue.slice();
        this.log("Queue started. Total tasks to execute: " + this.countTasks());
        this.proceed();
        return this;
    };

    /**
     * Cancel executing tasks.
     *
     * @since 1.2.0
     * @member org.izi.queue.Queue
     */
    Queue.prototype.cancel = function () {
        this.log("Queue canceled at executing task: " + this.getCurrentTaskIndex() + " of " + this.countTasks());
        this.dispatchTaskEvent("queueCanceled", true);
        this.queue = [];
        this.clearAndProceed();
    };

    /**
     * Add "taskStarted" event listener
     *
     * @since 1.2.0
     * @param {Function} fn
     * @param {Object} [scope]
     * @return {org.izi.behavior.OnWidget}
     */
    Queue.prototype.onTaskStarted = function (fn, scope) {izi.sanityOf("onTaskStarted()").args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        return izi.perform(fn, scope || global).when("taskStarted").on(this);
    };

    /**
     * Add "taskFinished" event listener
     *
     * @since 1.2.0
     * @param {Function} fn
     * @param {Object} [scope]
     * @return {org.izi.behavior.OnWidget}
     */
    Queue.prototype.onTaskFinished = function (fn, scope) {izi.sanityOf("onTaskFinished()").args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        return izi.perform(fn, scope || global).when("taskFinished").on(this);
    };

    /**
     * Add "taskTimeouted" event listener
     *
     * @since 1.2.0
     * @param {Function} fn
     * @param {Object} [scope]
     * @return {org.izi.behavior.OnWidget}
     */
    Queue.prototype.onTaskTimeouted = function (fn, scope) {izi.sanityOf("onTaskTimeouted()").args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        return izi.perform(fn, scope || global).when("taskTimeouted").on(this);
    };

    /**
     * Add "queueFinished" event listener
     *
     * @since 1.2.0
     * @param {Function} fn
     * @param {Object} [scope]
     * @return {org.izi.behavior.OnWidget}
     */
    Queue.prototype.onQueueFinished = function (fn, scope) {izi.sanityOf("onQueueFinished()").args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        return izi.perform(fn, scope || global).when("queueFinished").on(this);
    };

    /**
     * Add "queueCanceled" event listener
     *
     * @since 1.2.0
     * @param {Function} fn
     * @param {Object} [scope]
     * @return {org.izi.behavior.OnWidget}
     */
    Queue.prototype.onQueueCanceled = function (fn, scope) {izi.sanityOf("onQueueCanceled()").args(izi.arg().ofFunction()).args(izi.arg().ofFunction(),izi.arg().ofObject()).check(arguments);
        return izi.perform(fn, scope || global).when("queueCanceled").on(this);
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param tasksOrFunctions
     */
    Queue.prototype.pushAll = function (tasksOrFunctions) {
        var me = this;

        forEach(tasksOrFunctions, function (taskOrFunction, index) {

            if (typeOf(taskOrFunction) === 'Function') {
                me.pushFunction(taskOrFunction);
            } else if (typeOf(taskOrFunction) === 'Object' && typeOf(taskOrFunction.execute) === 'Function') {
                me.pushTask(taskOrFunction);
            } else {
                throw new Error("Invalid queue element given at index: " + index + ". Expected Function or Object with execute() function.");
            }
        });
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param task
     */
    Queue.prototype.pushTask = function (task) {
        this.originalQueue.push(task);
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param fn
     */
    Queue.prototype.pushFunction = function (fn) {
        this.pushTask(new org.izi.queue.GenericTask(fn, this.getScope()));
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @return {*}
     */
    Queue.prototype.getScope = function () {
        return this.config.scope;
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     */
    Queue.prototype.proceed = function () {
        if (this.isExecutedTask())
            return;

        if (this.isEmptyQueue()) {
            this.log("");
            this.log("Queue finished");
            this.dispatchTaskEvent("queueFinished");
            return;
        }

        this.executeSynchronously(this.queue.shift());
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @return {boolean}
     */
    Queue.prototype.isEmptyQueue = function () {
        return this.queue.length === 0
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @return {boolean}
     */
    Queue.prototype.isExecutedTask = function () {
        return !!this.currentTask;
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param task
     */
    Queue.prototype.executeSynchronously = function (task) {
        this.currentTask = task;
        this.log("");
        this.log("    Task started: " + this.getCurrentTaskIndex() + " of " + this.countTasks());
        this.dispatchTaskEvent("taskStarted", true);
        task.execute(this.synchronizer);
        this.awaitSynchronizerOrProceed();
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     */
    Queue.prototype.awaitSynchronizerOrProceed = function () {
        if (this.synchronizer.hasPendingSynchronizations()) {
            this.synchronizer.afterSynchronizingTaskCall(this.currentTask, {fn: this.taskSynchronized, scope: this});
        }
        else {
            this.log("        No synchronizations used by task: " + this.getCurrentTaskIndex() + " of " + this.countTasks());
            this.taskSynchronized();
        }
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     */
    Queue.prototype.taskSynchronized = function () {
        this.log("    Task finished: " + this.getCurrentTaskIndex() + " of " + this.countTasks());
        this.dispatchTaskEvent("taskFinished", true);
        this.clearAndProceed();
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     */
    Queue.prototype.clearAndProceed = function () {
        this.currentTask = undefined;
        this.proceed();
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param type
     * @param addStatistics
     */
    Queue.prototype.dispatchTaskEvent = function (type, addStatistics) {
        var event = {
            type: type,
            queue: this,
            task: this.currentTask
        };
        if (addStatistics) {
            event.currentTask = this.getCurrentTaskIndex();
            event.totalTasks = this.countTasks();
        }
        this.dispatchEvent(this.delegatedIn, type, event)
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @return {number}
     */
    Queue.prototype.getCurrentTaskIndex = function () {
        return this.originalQueue.length - this.queue.length;
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @return {Number}
     */
    Queue.prototype.countTasks = function () {
        return this.originalQueue.length;
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     * @param task
     * @return {number|defaultTimeout}
     */
    Queue.prototype.timeoutForTask = function (task) {
        // todo - specific timeouts for tasks
        return this.config.defaultTimeout;
    };

    /**
     * @member org.izi.queue.Queue
     * @private
     */
    Queue.prototype.currentTaskTimeouted = function () {
        this.synchronizer.taskTimeout(this.currentTask);
        this.dispatchTaskEvent("taskTimeouted", true);
        this.clearAndProceed();
    };

    Queue.prototype.log = function (message) {
        if (this.config.debug) {
            log("[izi.queue:" + this.id + "] " + formatTimeStamp() + " " + message);
        }
    };

    return Queue;

}(this);

/**
 * @member org.izi.binding
 * @method
 * @private
 * @param {Object} impl
 */
org.izi.queue.register = function (impl) {

    return function (config) {
        return new org.izi.queue.Queue(impl, config);
    };
};/**
 * @class izi
 * @singleton
 *
 * All <strong>izi</strong> fluent API entry points.
 */


/**
 * Creates beans context using passed config. It can be one configuration, like:
 *
 *     izi.bakeBeans({beanId: 'value'});
 *
 * Or multiple configurations as an array:
 *
 *     var config1 = {
 *         bean1: 'value 1'
 *     };
 *     var config2 = {
 *         bean2: 'value 2'
 *     };
 *
 *     izi.bakeBeans([config1, config2]);
 *
 * @param {Object|Object[]} config One or multiple configurations
 * @param {org.izi.ioc.BeansContext} [parentContext]
 * @return {org.izi.ioc.BeansContext}
 */
izi.bakeBeans = function (config, parentContext) {izi.sanityOf("bakeBeans()").args(izi.arg().of("Object|Object[]")).args(izi.arg().of("Object|Object[]"),izi.arg().of("org.izi.ioc.BeansContext")).check(arguments);
    return new org.izi.ioc.BeansContext(config, parentContext).initContext();
};

/**
 * Creates singleton bean definition using passed class type
 *
 * @param {Function|String} clazz constructor function or dotted string class definition
 * @return {org.izi.ioc.Config}
 */
izi.instantiate = function (clazz) {izi.sanityOf("instantiate()").args(izi.arg().of("Function|String")).check(arguments);
    return new org.izi.ioc.Config(clazz, org.izi.ioc.bean.SingletonStrategy);
};

/**
 * Creates lazy singleton bean definition using passed class type
 *
 * @param {Function|String} clazz constructor function or dotted string class definition
 * @return {org.izi.ioc.Config}
 */
izi.lazy = function (clazz) {izi.sanityOf("lazy()").args(izi.arg().of("Function|String")).check(arguments);
    return new org.izi.ioc.Config(clazz, org.izi.ioc.bean.LazySingletonStrategy);
};

/**
 * Creates prototype bean definition using passed class type
 * @param {Function|String} clazz constructor function or dotted string class definition
 * @return {org.izi.ioc.Config}
 */
izi.protoOf = function (clazz) {izi.sanityOf("protoOf()").args(izi.arg().of("Function|String")).check(arguments);
    return new org.izi.ioc.Config(clazz, org.izi.ioc.bean.PrototypeStrategy);
};

/**
 * Injects dependency by its beanId or class type. It can be used as constructor dependency injection or by
 * property dependency injection.
 *
 * @param {String|Function} beanIdOrType Bean id or constructor function or dotted string class definition
 * @return {org.izi.ioc.Injection}
 */
izi.inject = function (beanIdOrType) {izi.sanityOf("inject()").args(izi.arg().of("String|Function")).check(arguments);
    return new org.izi.ioc.Injection(beanIdOrType);
};

/**
 * Init behavior API. You can specify function and scope:
 *     izi.perform(behavior.perform, behavior).when('click').on(button)
 * ... or only behavior ('perform' function will be called by default):
 *     izi.perform(behavior).when('click').on(button)
 * ... or custom event registrar ('register' and 'unregister' functions are required):
 *     var registrar = {
 *
 *         register: function (target) {
 *             target.addEventListener(...);
 *             target.addEventListener(...);
 *             target.addEventListener(...);
 *         },
 *
 *         unregister: function (target) {
 *             target.removeEventListener(...);
 *             target.removeEventListener(...);
 *             target.removeEventListener(...);
 *         }
 *     };
 *
 *     izi.perform(registrar).on(target);
 *
 * @noSanity
 * @param {Function|Object} functionOrBehaviorOrRegistrar
 * @param {Object} [scope]
 * @return {org.izi.behavior.Perform}
 */
izi.perform = function (functionOrBehaviorOrRegistrar, scope) {
    throw new Error("Register your behavior implementation first: izi.registerBehaviorImpl(org.izi.behavior.impl.SomeImpl)");
};

/**
 * Registers behavior implementation
 *
 * @sanity izi.sanityOf("registerBehaviorImpl()").args(izi.arg("impl").ofObject().havingFunctions("observeWidget", "observeKeyStroke").havingProperty("defaultPerformFunction")).check(arguments);
 * @param {Object} impl Behavior implementation config
 * @param {String} impl.defaultPerformFunction Name of default perform function called on behavior
 * @param {Function} impl.observeWidget Function that starts observing widget and returns function that stops observing. This function gets following arguments: <code>widget, eventConfig, action, scope, options</code>
 * @param {Function} impl.observeKeyStroke Function that starts observing keyboard and returns function that stops observing. This function gets following arguments: <code>widget, keyboardConfig, action, scope, options</code>
 */
izi.registerBehaviorImpl = function (impl) {izi.sanityOf("registerBehaviorImpl()").args(izi.arg("impl").ofObject().havingFunctions("observeWidget", "observeKeyStroke").havingProperty("defaultPerformFunction")).check(arguments);
    izi.perform = org.izi.behavior.register(impl);
};

/**
 * Init binding API
 * @sanity izi.sanityOf("bind()").args().args(izi.arg("options").ofObject()).check(arguments);
 * @param {Object} [options] Advanced options
 * @param {Boolean} [options.auto=true] Start listen for changes automatically.
 * @param {Boolean} [options.executeAtStartup=true] Execute binding immediately after creation. It works only when <code>auto=true</code>.
 * @param {Boolean} [options.debug=false] Log every binding execution on browser's console.
 * @return {org.izi.binding.Bind}
 */
izi.bind = function (options) {izi.sanityOf("bind()").args().args(izi.arg("options").ofObject()).check(arguments);
    throw new Error("Register your binding implementation first: izi.registerBindingImpl(org.izi.binding.impl.SomeImpl)");
};

/**
 * Registers binding implementation
 * @sanity izi.sanityOf("registerBindingImpl()").args(izi.arg("impl").ofObject().havingProperties("changeObservers", "valueReaders", "valueWriters")).check(arguments);izi.sanityOf("impl.changeObservers").args(izi.varargOf(izi.arg().ofFunction())).check(impl.changeObservers);izi.sanityOf("impl.valueReaders").args(izi.varargOf(izi.arg().ofFunction())).check(impl.valueReaders);izi.sanityOf("impl.valueWriters").args(izi.varargOf(izi.arg().ofFunction())).check(impl.valueWriters);
 * @param impl Binding implementation config
 * @param {Function[]} impl.changeObservers Array of change observers functions. These functions get following parameters: <code>source, sourceProperty, target, targetProperty, transferValueFn</code>
 * @param {Function[]} impl.valueReaders Array of functions that can read value from given object and property. These functions get following arguments: <code>object, property</code>
 * @param {Function[]} impl.valueWriters Array of functions that can write value on given object and property. These functions get following arguments: <code>object, property, value</code>
 */
izi.registerBindingImpl = function (impl) {izi.sanityOf("registerBindingImpl()").args(izi.arg("impl").ofObject().havingProperties("changeObservers", "valueReaders", "valueWriters")).check(arguments);izi.sanityOf("impl.changeObservers").args(izi.varargOf(izi.arg().ofFunction())).check(impl.changeObservers);izi.sanityOf("impl.valueReaders").args(izi.varargOf(izi.arg().ofFunction())).check(impl.valueReaders);izi.sanityOf("impl.valueWriters").args(izi.varargOf(izi.arg().ofFunction())).check(impl.valueWriters);
    izi.bind = org.izi.binding.register(impl);
};

/**
 * Creates class of izi model. Use this model in your project for data binding only when your framework
 * doesn't provide 'observable' model.
 *
 * @sanity izi.sanityOf("izi.modelOf()").args(izi.arg("config").ofObject().havingProperty("fields")).check(arguments);izi.sanityOf("config.fields").args(izi.varargOf(izi.arg("field").ofObject().havingProperty("name"), izi.arg("fieldName").ofString())).check(config.fields);
 * @param config Model fields configuration. It must contain <strong>fields</strong> array of fields objects.
 * @param {Array} config.fields Configuration of model field
 * @param {String} config.fields.name Field name
 * @param {String} config.fields.defaultValue Initial value of field after creating empty model
 * @return {*}
 */
izi.modelOf = function (config) {izi.sanityOf("izi.modelOf()").args(izi.arg("config").ofObject().havingProperty("fields")).check(arguments);izi.sanityOf("config.fields").args(izi.varargOf(izi.arg("field").ofObject().havingProperty("name"), izi.arg("fieldName").ofString())).check(config.fields);
    return org.izi.model.Model.define(config);
};

/**
 *
 * @type {org.izi.events.IziEvents}
 */
izi.events = org.izi.events.IziEvents;

/**
 * Init synchronized queue API
 * @nosanity
 * @param {Object} [config] Queue configuration
 * @param {Object} [config.scope] default scope for all functions executions
 * @param {Number} [config.timeout="0"] default timeout for synchronized tasks - 0 is a default which means no timeout
 * @param {String} [config.debug] use any String as an identifier of the queue that will be logged in browser console
 * @return {org.izi.queue.Queue}
 */
izi.queue = function (config) {
    throw new Error("Register your queue implementation first: izi.registerQueueImpl(org.izi.queue.impl.SomeImpl)");
};

/**
 * Registers queue implementation
 * @sanity izi.sanityOf("registerQueueImpl()").args(izi.arg("impl").ofObject().havingFunctions("dispatchEvent", "createEventDispatcher")).check(arguments);
 * @param {Object} impl
 * @param {Function} impl.dispatchEvent
 * @param {Function} impl.createEventDispatcher
 */
izi.registerQueueImpl = function (impl) {izi.sanityOf("registerQueueImpl()").args(izi.arg("impl").ofObject().havingFunctions("dispatchEvent", "createEventDispatcher")).check(arguments);
    izi.queue = org.izi.queue.register(impl);
};izi.isDebug = true;
/**
 * Init izi-chrome-extension if available
 */
if (izi.chromeExtension) {
    izi.chromeExtension.init();
}
;