/*
 * izi-js-jquery-1.5.0-RC1 20131020-1741
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

// ---- Start of izi-sanity
(function(){var a;a=void 0;a={utils:{},sanity:{}};this.izi="izi"in this?this.izi:{};a.utils.indexOf=function(){function a(j,c){return Array.prototype.indexOf.call(j,c)}function b(a,c){var b,i=a.length;for(b=0;b<i;b+=1)if(a[b]===c)return b;return-1}return"function"===typeof Array.prototype.indexOf?a:b}();a.utils.arrayContains=function(c,b){return-1!==a.utils.indexOf(c,b)};a.utils.forEach=function(){function a(j,b,c){Array.prototype.forEach.call(j,b,c)}function b(a,b,c){var i,h=a.length;for(i=0;i<h;i+=
1)b.call(c,a[i],i,a)}return"function"===typeof Array.prototype.forEach?a:b}();a.utils.some=function(){function a(b,c,g){return Array.prototype.some.call(b,c,g)}function b(a,b,c){var i=a.length>>>0;if("function"!=typeof b)throw new TypeError;for(var h=0;h<i;h++)if(h in a&&b.call(c,a[h],h,a))return!0;return!1}return"function"===typeof Array.prototype.some?a:b}();a.utils.every=function(){function a(b,c,g){return Array.prototype.every.call(b,c,g)}function b(a,b,c){for(var i=a.length>>>0,h=0;h<i;h++)if(h in
a&&!b.call(c,a[h],h,a))return!1;return!0}return"function"===typeof Array.prototype.every?a:b}();a.utils.typeOf=function(a){if(void 0===a)return"undefined";if(null===a)return"null";switch(typeof a){case "string":return"String";case "number":return"Number";case "boolean":return"Boolean";case "function":return"Function"}switch(Object.prototype.toString.call(a)){case "[object Array]":return"Array";case "[object Date]":return"Date";case "[object RegExp]":return"RegExp";case "[object Boolean]":return"Boolean";
case "[object Number]":return"Number"}if("object"===typeof a)return"Object";throw Error("Couldn't find type of given value");};a.utils.ClassNotFound=function(a){this.message='Class name given as string: "'+a+"\" couldn't be resolved as a class"};a.utils.ClassNotFound.prototype=Error();a.utils.getClassByName=function(c){return function(b){var j,f=b.split(".");j=c;a.utils.forEach(f,function(c){c=j[c];if(void 0===c)throw new a.utils.ClassNotFound(b);j=c});return j}}(this);a.utils.getCallerLineProvider=
function(a){if(!izi.isDebug)return function(){return"Line numbers are available only in debug version of izi-js"};var b=Error();return function(){if(b.stack){var j=b.stack.split("\n"),f=-1<navigator.userAgent.indexOf("WebKit")?3+a:1+a;return j[f]}return" [IE doesn't provide line number in call stack]"}};a.sanity.Sanity=function(){var c=function(b){this.config=b.withCallerLineProvider(a.utils.getCallerLineProvider(3))};c.prototype.args=function(){var b=arguments;a.utils.forEach(b,function(a){if(a&&
a.isVarArg&&b[b.length-1]!==a)throw Error("izi.varargOf() must be declared only once and must be placed at the end");});this.config.addSignatures(arguments);return new a.sanity.Check(this.config)};return c}();a.sanity.Config=function(){var a=function(){this.signatures=[]};a.prototype.withName=function(a){this.name=a;return this};a.prototype.withCallerLineProvider=function(a){this.callerLineProvider=a;return this};a.prototype.addSignatures=function(a){this.signatures.push(a)};return a}();a.sanity.SingleArgConfig=
function(c){function b(o,d){return a.utils.every(d,function(a){return"function"===typeof o[a]})}function j(o,d){return a.utils.every(d,function(a){return void 0!==o[a]})}function f(d){return"String"===a.utils.typeOf(d)&&-1<d.indexOf("[")}function g(d,e){var b=/['"]/g;switch(d){case "*":return!0;case "Boolean":case "RegExp":case "Date":case "Number":case "String":case "Object":case "Function":case "Array":return a.utils.typeOf(e).toLowerCase()===d.toLowerCase();default:if("Function"===a.utils.typeOf(d))return e instanceof
d;if("String"===a.utils.typeOf(d)&&b.test(d))return d.replace(b,"")===e;try{return e instanceof a.utils.getClassByName(d)}catch(j){return"console"in c&&console.warn(j.message),!0}}}function i(d){var e=[];a.utils.forEach(d,function(a){f(a.type)||e.push(a.type)});return e}function h(d){var e=[];a.utils.forEach(d,function(a){f(a.type)&&e.push(a.type)});return e}function l(d,e){return a.utils.some(d,function(a){return g(a,e)})}function n(d,e){return 0===d.length||"Array"!==a.utils.typeOf(e)?!1:a.utils.every(e,
function(e){return a.utils.some(d,function(a){a=a.replace(/[[]]/g,"");return g(a,e)})})}function k(d){if(0===d.length)return"";var e=[];a.utils.forEach(d,function(a){e.push(a+"()")});return"~"+e.join("~")}function m(d){var e=[];a.utils.forEach(d,function(a){e.push(a.typeLabel||a.type)});return e.join("|")}var d=function(a){this.name=a;this.expectedFunctions=[];this.expectedProperties=[]};d.prototype.ofArray=function(a){return!a||"*"===a?this.of("Array"):this.of(a+"[]")};d.prototype.ofObject=function(){return this.of("Object")};
d.prototype.ofDate=function(){return this.of("Date")};d.prototype.ofString=function(){return this.of("String")};d.prototype.ofNumber=function(){return this.of("Number")};d.prototype.ofBoolean=function(){return this.of("Boolean")};d.prototype.ofRegExp=function(){return this.of("RegExp")};d.prototype.ofFunction=function(){return this.of("Function")};d.prototype.ofAny=function(){return this.of("*")};d.prototype.of=function(d,e){var b=this;if("function"===typeof d&&!e)throw Error("You must provide type label if you expect some class: izi.arg().of(SomeClass, 'SomeClass')");
if("String"===a.utils.typeOf(d)){var c=d.split(/[|\/]/);this.types=[];a.utils.forEach(c,function(a){b.types.push({type:a})})}if("Function"===a.utils.typeOf(d))this.types=[{type:d,typeLabel:e}];return this};d.prototype.havingFunction=function(a){this.expectedFunctions.push(a);return this};d.prototype.havingFunctions=function(){a.utils.forEach(arguments,function(a){this.havingFunction(a)},this);return this};d.prototype.havingProperty=function(a){this.expectedProperties.push(a);return this};d.prototype.havingProperties=
function(){a.utils.forEach(arguments,function(a){this.havingProperty(a)},this);return this};d.prototype.matches=function(a){if(void 0!==a&&null!==a&&(!b(a,this.expectedFunctions)||!j(a,this.expectedProperties)))return!1;var d=i(this.types),c=h(this.types);return l(d,a)||n(c,a)};d.prototype.format=function(){var a=m(this.types),d=this.name?" "+this.name:"",b=k(this.expectedFunctions),c=0===this.expectedProperties.length?"":"~"+this.expectedProperties.join("~");return"{"+a+b+c+"}"+d};return d}(this);
a.sanity.VarArgConfig=function(){function c(b){var c=[],b=b.split(/[|\/]/);a.utils.forEach(b,function(a){c.push(izi.arg().of(a))});return c}var b=function(b){this.argsConfigs="String"===a.utils.typeOf(b)?c(b):b};b.prototype.isVarArg=!0;b.prototype.matches=function(b){return a.utils.some(this.argsConfigs,function(a){return a.matches(b)})};b.prototype.format=function(){var b=[];a.utils.forEach(this.argsConfigs,function(a){b.push(a.format().replace("}","...}").replace("|","...|"))});return b.join(",").split("},{").join("|")};
return b}();a.sanity.Check=function(){function c(a){return a&&a.isVarArg}function b(a){var b=0,d;return function(){return c(d)?d:d=a[b++]}}function j(k,m){if(!a.utils.some(m,c)&&k.length!==m.length)return!1;var d=b(m);return a.utils.every(k,function(a){return d().matches(a)})}function f(b){var c=[];a.utils.forEach(b,function(d){d=a.utils.typeOf(d)+"[]";a.utils.arrayContains(c,d)||c.push(d)});return 0===c.length?"Array":c.join("|")}function g(b){if(0===b.length)return"no arguments were given";var c=
[];a.utils.forEach(b,function(d){"Array"===a.utils.typeOf(d)?c.push("{"+f(d)+"}"):c.push("{"+a.utils.typeOf(d)+"}")});return"( "+c.join(", ")+" ) was given"}function i(b){var c=[];a.utils.forEach(b,function(a){c.push(a.format())});return c.join(", ")}function h(b){var c=[],d;a.utils.forEach(b,function(a){d=["("];d.push(i(a));d.push(")");c.push(d.join(" "))});return"    "+c.join("\nor  ")}function l(b,c,d,o){if(!a.utils.some(c,function(a){return j(d,a)}))throw b=b+" expects one of the following arguments:\n-----------------------------------------\n"+
h(c)+"\n-----------------------------------------\nbut "+g(d)+" at line:\n"+o(),Error(b);}var n=function(a){this.config=a};n.prototype.args=function(){this.config.addSignatures(arguments);return this};n.prototype.check=function(a){var b=this.config;l(b.name,b.signatures,a,b.callerLineProvider)};return n}();a.sanity.inject=function(c){function b(a){a.lastIndex=0;return a}function j(a){var b,c;if(0===a.length)return[];if(1===a.length){b=[];for(c=0;c<a[0].length;c++)b.push([a[0][c]])}else{b=[];var f=
j(a.slice(1));for(c=0;c<f.length;c++)for(var g=0;g<a[0].length;g++)b.push([].concat(a[0][g],f[c]))}return b}function f(a,b){if(b)return'izi.varargOf("'+a+'")';switch(a){case "Boolean":case "RegExp":case "Date":case "Number":case "String":case "Object":case "Function":case "Array":return"izi.arg().of"+a+"()";default:return-1<a.indexOf('"')?"izi.arg().of('"+a+"')":'izi.arg().of("'+a+'")'}}function g(d){var b;a.utils.some(d,function(a){if(a.isOptional)return b=a,!0});return b?b.index:-1}function i(a){var b,
c;if(!a)return"";if(c=/(\S+)\s*:\s*function/.exec(a))b=c[1];else if(c=/function\s+([^(]+)/.exec(a))b=c[1];else if(c=/([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=\s*function/.exec(a))b=c[1];return b?'"'+b+'()"':""}function h(d,c){if(!d)return[];for(var e=new m,f=0,j=b(/@param.*/ig),g,i=b(/@param[^{\n]+\{([^}]+)\}/ig),h,k=b(/@param[^{\n]+\{([^}]+)\}\s+\[/ig),l,p;g=j.exec(d);){if(h=i.exec(d))g=k.test(g[0]),h=h[1].split(/[|\/]/),l=[],p=[],a.utils.forEach(h,function(a){-1<a.indexOf("...")?l.push(a.replace(b(/\.{3}/g),
"")):p.push(a)}),0<p.length&&e.add(f,p.join("|"),g,!1),0<l.length&&e.add(f,l.join("|"),!1,!0);else return n("Function parameter type not specified: \n"+d+"\n"+c),[];f++}return e.createSignatures()}function l(d,c){var e;e=[];var f;if(e=b(/@sanity\s+(.*)$/gim).exec(d))return e[1];e=h(d,c);if(0===e.length)return"";f="izi.sanityOf("+i(c)+")";a.utils.forEach(e,function(d){var b=[];a.utils.forEach(d,function(a){b.push(a.arg)});f+=".args("+b.join(",")+")"});return f+=".check(arguments);"}function n(a){"java"in
c&&"lang"in c.java&&"System"in c.java.lang&&c.java.lang.System.out.println("[WARN] "+a);"console"in c&&c.console.warn(a)}var k=function(a){this.text=a;this.replacements=[];this.selection={};this.lastIndex=0};k.prototype.select=function(a,b){var c;this.selection={};a.lastIndex=this.lastIndex;if(c=a.exec(this.text))this.selection.from=a.lastIndex-c[0].length,this.lastIndex=a.lastIndex;else return null;if(b)if(b.lastIndex=this.lastIndex,b.exec(this.text))this.lastIndex=this.selection.to=b.lastIndex;
else return null;else this.selection.to=this.lastIndex;return this};k.prototype.insertAfter=function(a){this.replacements.push({from:this.selection.to,to:this.selection.to,text:a})};k.prototype.getResult=function(){var a,b,c=this.text;for(a=this.replacements.length-1;-1<a;a--)b=this.replacements[a],c=c.slice(0,b.from)+b.text+c.slice(b.to,c.length);return c};k.prototype.getSelectedText=function(){return this.text.slice(this.selection.from,this.selection.to)};var m=function(){this.parameters=[]};m.prototype.add=
function(a,b,c,g){void 0===this.parameters[a]&&(this.parameters[a]=[]);this.parameters[a].push({arg:f(b,g),index:a,type:b,isOptional:c,isVarArg:g})};m.prototype.createSignatures=function(){var b=j(this.parameters),c=[],e,f,h;a.utils.forEach(b,function(b){h=g(b);if(-1<h){e=[];for(f=0;f<h;f++)e.push(b[f]);c.push(e);for(f=h;f<b.length;f++)e=[],a.utils.some(b,function(a,b){e.push(a);if(b===f)return!0}),c.push(e)}else c.push(b)});return c};return function(a){for(var a=new k(a),c,f;a.select(/\/\*\*/g,/\*\//g);)if(c=
a.getSelectedText(),!(b(/@(no-?sanity|private|protected)/gi).test(c)||!1===b(/@(param|sanity)/gi).test(c))&&a.select(b(/.*function[^\{]+\{/g)))f=a.getSelectedText(),(c=l(c,f))&&a.insertAfter(c);return a.getResult()}}(this);izi.sanityOf=function(c){return new a.sanity.Sanity((new a.sanity.Config).withName(c||"function"))};izi.arg=function(c){return new a.sanity.SingleArgConfig(c||"")};izi.varargOf=function(){return 1===arguments.length&&"String"===a.utils.typeOf(arguments[0])?new a.sanity.VarArgConfig(arguments[0]):
new a.sanity.VarArgConfig(arguments)};izi.sanityInjectTo=function(c){return a.sanity.inject(c)};(function(c){var b=function(){var a=c.getElementsByTagName("script"),b,g,i=/^.*izi(\-js)?\-([^-]+)?\-sanity(\-min)?\.js/;for(b=a.length-1;0<=b;b-=1)if(g=a[b],g.src.match(i)){if(g.getAttribute("sanitize"))return g.getAttribute("sanitize").toString().split(";");if(-1<g.src.indexOf("?"))return g.src.replace(i,"").replace("?","").split(";");break}return null}();b&&a.utils.forEach(b,function(a){if(a){var b;
(b=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(b.open("GET",a,!1),b.send(null),b=b.responseText):b=!1;b=izi.sanityInjectTo(b);var g=c.createElement("script");g.setAttribute("fromUrl",a);g.text=b;g.type="text/javascript";c.head.appendChild(g)}})})(document,this)})();
// ---- End of izi-sanity

org.izi.behavior.impl.jQuery = {

    defaultPerformFunction: "perform",

    observeWidget: function (widget, eventConfig, action, scope, options) {

        var $widget = widget instanceof jQuery ? widget : $(widget);

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

        $widget.on(eventType, eventHandler);
        return function () {
            $widget.off(eventType, eventHandler);
        }
    },

    observeKeyStroke: function (widget, keyboardConfig, action, scope, options) {
        throw new Error("jQuery framework doesn't support keystrokes handling. Instead of izi.events.keyDown()/izi.events.keyUp() please use just plain 'keypress', 'keydown' or 'keyup' strings");
    }
};
izi.registerBehaviorImpl(org.izi.behavior.impl.jQuery);jQuery.iziDelegate = function (event, subSelector) {

    function when($target, action, scope) {
        var handler = $.proxy(action, scope);
        $target = $target instanceof  jQuery ? $target : jQuery($target);
        $target.on(event, subSelector, handler);
        return function () {
            $target.off(event, subSelector, handler);
        }
    }

    if (subSelector) {
        return when;
    } else {
        return function (selector) {
            subSelector = selector;
            return when;
        }
    }
};org.izi.queue.impl.jQuery = {
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
        if ($.length > 1) {
            var value = [];
            $.each(function (index, checkbox) {
                if (checkbox.checked) {
                    value.push(checkbox.value);
                }
            });
            return value;
        } else {
            return $.prop("checked");
        }
    }

    function writer($, property, value) {
        if ($.length > 1) {
            $.each(function (index, radio) {
                radio.checked = org.izi.utils.arrayContains(value, radio.value);
            });
        } else {
            $.prop("checked", value);
        }
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
        org.izi.binding.impl.jquery.selectObserver
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
        org.izi.binding.impl.jquery.writeCheckBoxValue,
        org.izi.binding.impl.jquery.writeRadioGroupValue,
        org.izi.binding.impl.jquery.writeSelectValue,
        org.izi.binding.impl.jquery.writeVal,
        org.izi.binding.impl.writeByFunction,
        org.izi.binding.impl.writeByCapitalizedSetter,
        org.izi.binding.impl.writeToOwnedProperty,
        org.izi.binding.impl.writeToFunction,
        org.izi.binding.impl.writeBySet,
        org.izi.binding.impl.writeToProperty
    ]
};
izi.registerBindingImpl(org.izi.binding.impl.jQuery);