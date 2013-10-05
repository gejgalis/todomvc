/*
 * izi-js-jquery-1.5.0-beta2 20131003-1627
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
org.izi.behavior.impl.jQuery = {

    defaultPerformFunction: "perform",

    observeWidget: function (widget, eventConfig, action, scope, options) {


        function eventHandler(event) {
            if (!event) {

                action.apply(scope, arguments);

            } else if (eventConfig.matchesModifiers(!!event.shiftKey, !!event.controlKey, !!event.altKey)) {

                if (eventConfig.shouldStopPropagation()) {
                    event.stopPropagation();
                }
                if (eventConfig.shouldPreventDefault()) {
                    event.preventDefault();
                }

                action.apply(scope, arguments);
            }
        }

        var eventType = eventConfig.getEventType();
        jQuery(widget).on(eventType, eventHandler);
        return function () {
            jQuery(widget).off(eventType, eventHandler);
        }
    },

    observeKeyStroke: function (widget, keyboardConfig, action, scope, options) {
        throw new Error("jQuery framework doesn't support keystrokes handling. Instead of izi.events.keyDown()/izi.events.keyUp() please use just plain 'keypress', 'keydown' or 'keyup' strings");
    }
};
izi.registerBehaviorImpl(org.izi.behavior.impl.jQuery);org.izi.queue.impl.jQuery = {
    createEventDispatcher: function () {
        return document.createElement("span");
    },

    dispatchEvent: function (dispatcher, eventType, eventParameters) {
        jQuery(dispatcher).trigger(eventType, eventParameters);
    }
};

izi.registerQueueImpl(org.izi.queue.impl.jQuery);org.izi.binding.impl.jquery = {};org.izi.binding.impl.jquery.textFieldObserver = function () {

    var inputEvents = "change input textInput keyup dragdrop propertychange";

    function matcher($, sourceProperty, target, targetProperty, transferValueFn) {
        return sourceProperty === "value" &&
               $ instanceof jQuery &&
               ($.is("input[type=text]") ||
                $.is("textarea") ||
                $.is("input[type=password]") ||
                $.is("input:not([type])"));
    }

    function observer($, sourceProperty, target, targetProperty, transferValueFn) {

        $.on(inputEvents, transferValueFn);

        return function () {
            $.off(inputEvents, transferValueFn);
        }
    }

    return org.izi.binding.impl.createObserver(matcher, observer);
}();org.izi.binding.impl.jquery.readVal = function () {

    function reader($, property) {
        return $.val();
    }

    function matcher($, property) {
        return property === "value" && $ instanceof jQuery;
    }

    return org.izi.binding.impl.createReader(matcher, reader);
}();org.izi.binding.impl.jquery.writeVal = function () {

    function writer($, property, value) {
        $.val(value);
        $.trigger("change");
    }

    function matcher($, property) {
        return property === "value" && $ instanceof jQuery;
    }

    return org.izi.binding.impl.createWriter(matcher, writer);
}();!function () {

    function matcher($, sourceProperty, target, targetProperty, transferValueFn) {
        return sourceProperty === "value" &&
               $ instanceof jQuery &&
               $.is("input[type=checkbox]");
    }

    function observer($, sourceProperty, target, targetProperty, transferValueFn) {
        $.on("change", transferValueFn);
        return function () {
            $.off("change", transferValueFn);
        }
    }

    function reader($, property) {
        return $.prop("checked");
    }

    function writer($, property, value) {
        $.prop("checked", value);
        $.trigger("change");
    }

    org.izi.binding.impl.jquery.checkBoxObserver = org.izi.binding.impl.createObserver(matcher, observer);
    org.izi.binding.impl.jquery.readCheckBoxValue = org.izi.binding.impl.createReader(matcher, reader);
    org.izi.binding.impl.jquery.writeCheckBoxValue = org.izi.binding.impl.createWriter(matcher, writer);
}();!function () {

    function matcher($, sourceProperty, target, targetProperty, transferValueFn) {
        return sourceProperty === "value" &&
               $ instanceof jQuery &&
               $.is("input[type=radio]");
    }

    function observer($, sourceProperty, target, targetProperty, transferValueFn) {
        $.on("change", transferValueFn);
        return function () {
            $.off("change", transferValueFn);
        }
    }

    function reader($, property) {
        var value;
        $.each(function (index, radio) {
            if (radio.checked) {
                value = radio.value;
                return false;
            }
            return true;
        });
        return value;
    }

    function writer($, property, value) {
        $.each(function (index, radio) {
            radio.checked = radio.value === value;
        });
        $.trigger("change");
    }

    org.izi.binding.impl.jquery.radioGroupObserver = org.izi.binding.impl.createObserver(matcher, observer);
    org.izi.binding.impl.jquery.readRadioGroupValue = org.izi.binding.impl.createReader(matcher, reader);
    org.izi.binding.impl.jquery.writeRadioGroupValue = org.izi.binding.impl.createWriter(matcher, writer);
}();!function () {

    function matcher($, property) {
        return property === "value" &&
               $ instanceof jQuery &&
               $.is("select");
    }

    function observer($, sourceProperty, target, targetProperty, transferValueFn) {
        $.on("change", transferValueFn);
        return function () {
            $.off("change", transferValueFn);
        }
    }

    function reader($, property) {
        if ($.is("select[multiple]")) {
            return jQuery.map($.find("option:selected"), function (option) {
                return jQuery(option).val();
            });
        } else {
            return $.find('option:selected').val();
        }
    }

    function writer($, property, value) {
        if ($.is("select[multiple]")) {
            var options = $.prop("options");
            org.izi.utils.forEach(options, function (option) {
                option.selected = org.izi.utils.arrayContains(value, jQuery(option).val());
            });
        } else {
            $.find("option[value='" + value + "']").prop("selected", true);
        }
        $.trigger("change");
    }

    org.izi.binding.impl.jquery.selectObserver = org.izi.binding.impl.createObserver(matcher, observer);
    org.izi.binding.impl.jquery.readSelectValue = org.izi.binding.impl.createReader(matcher, reader);
    org.izi.binding.impl.jquery.writeSelectValue = org.izi.binding.impl.createWriter(matcher, writer);
}();org.izi.binding.impl.jquery.JQueryTarget = function () {

    var JQueryTarget = function org_izi_binding_impl_jquery_JQueryTarget(config) {
        this.config = config;
    };

    JQueryTarget.prototype.val = function () {
        var target = this.config.target;
        return this.createBinding(function (value) {
            target.val(value);
        });
    };

    JQueryTarget.prototype.html = function () {
        var target = this.config.target;
        return this.createBinding(function (value) {
            target.html(value);
        });
    };

    JQueryTarget.prototype.text = function () {
        var target = this.config.target;
        return this.createBinding(function (value) {
            target.text(value);
        });
    };

    JQueryTarget.prototype.attr = function (attributeName) {
        var target = this.config.target;
        return this.createBinding(function (value) {
            if (attributeName) {
                target.attr(attributeName, value);
            } else {
                target.attr(value);
            }
        });
    };

    JQueryTarget.prototype.css = function (propertyName) {
        var target = this.config.target;
        return this.createBinding(function (value) {
            if (propertyName) {
                target.css(propertyName, value);
            } else {
                target.css(value);
            }
        });
    };

    JQueryTarget.prototype.prop = function (propertyName) {
        var target = this.config.target;
        return this.createBinding(function (value) {
            if (propertyName) {
                target.prop(propertyName, value);
            } else {
                target.prop(value);
            }
        });
    };

    JQueryTarget.prototype.data = function (propertyName) {
        var target = this.config.target;
        return this.createBinding(function (value) {
            if (propertyName) {
                target.data(propertyName, value);
            } else {
                target.data(value);
            }
        });
    };

    /**
     * @private
     * @param {Function} targetFunction
     * @returns {org.izi.binding.Binding}
     */
    JQueryTarget.prototype.createBinding = function (targetFunction) {
        return new org.izi.binding.Binding(this.config.withTarget(targetFunction));
    };

    /**
     * @member org.izi.binding.ValueOf
     * @param {String|HTMLElement|jQuery} selectorOrElementOr$
     * @returns {org.izi.binding.impl.jquery.JQueryTarget}
     */
    org.izi.binding.ValueOf.prototype.to$ = function (selectorOrElementOr$) {izi.sanityOf("to$()").args(izi.arg().of("String|HTMLElement|jQuery")).check(arguments);
        var target = selectorOrElementOr$ instanceof jQuery ? selectorOrElementOr$ : $(selectorOrElementOr$);
        this.config.target = target;
        return new org.izi.binding.impl.jquery.JQueryTarget(this.config);
    };

    return JQueryTarget;
}();org.izi.binding.impl.jQuery = {

    changeObservers: [
        org.izi.binding.impl.jquery.textFieldObserver,
        org.izi.binding.impl.jquery.checkBoxObserver,
        org.izi.binding.impl.jquery.radioGroupObserver,
        org.izi.binding.impl.jquery.selectObserver,
        org.izi.binding.impl.iziModelChangeObserver
    ],

    valueReaders: [
        org.izi.binding.impl.jquery.readCheckBoxValue,
        org.izi.binding.impl.jquery.readRadioGroupValue,
        org.izi.binding.impl.jquery.readSelectValue,
        org.izi.binding.impl.jquery.readVal,
        org.izi.binding.impl.readByCapitalizedGetter,
        org.izi.binding.impl.readFromOwnedProperty,
        org.izi.binding.impl.readByFunction,
        org.izi.binding.impl.readByGet,
        org.izi.binding.impl.readFromProperty
    ],

    valueWriters: [
        org.izi.binding.impl.jquery.writeSelectValue,
        org.izi.binding.impl.writeByFunction,
        org.izi.binding.impl.writeByCapitalizedSetter,
        org.izi.binding.impl.writeToOwnedProperty,
        org.izi.binding.impl.writeToFunction,
        org.izi.binding.impl.writeBySet,
        org.izi.binding.impl.writeToProperty
    ]
};
izi.registerBindingImpl(org.izi.binding.impl.jQuery);