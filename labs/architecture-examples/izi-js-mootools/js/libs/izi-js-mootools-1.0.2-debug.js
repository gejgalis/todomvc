/*
 * izi-js-mootools-1.0.2 20120821-1212
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

org.izi.behavior.impl.MooTools = (function (global) {

    var charCode,
        keys = {
            38: 'up',
            40: 'down',
            37: 'left',
            39: 'right',
            27: 'esc',
            32: 'space',
            8: 'backspace',
            9: 'tab',
            46: 'delete',
            13: 'enter',
            16: 'shift',
            17: 'control',
            18: 'alt',
            20: 'capslock',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            144: 'numlock',
            145: 'scrolllock',
            186: ';',
            187: '=',
            188: ',',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            //107: '+',
            19: 'pause',
            45: 'insert',
            44: 'printscreen',
            12: 'num_center',
            106: 'num_multiply',
            107: 'num_plus',
            109: 'num_minus',
            110: 'num_period',
            111: 'num_division'
        };

    DOMEvent.defineKeys({
                            19: 'pause',
                            45: 'insert',
                            44: 'printscreen',
                            12: 'num_center',
                            106: 'num_multiply',
                            107: 'num_plus',
                            109: 'num_minus',
                            110: 'num_period',
                            111: 'num_division'
                        });


    // Populate keys from a-z
    for (charCode = 65; charCode <= 90; charCode++) {
        keys[charCode] = String.fromCharCode(charCode).toLowerCase();
    }

    // Populate keys from 0-9
    for (charCode = 48; charCode <= 57; charCode++) {
        keys[charCode] = '' + (charCode - 48);
    }
    // Populate keys from F1 to F12
    for (charCode = 112; charCode <= 123; charCode++) {
        keys[charCode] = 'f' + (charCode - 111);
    }

    function createModifiersKeys(keyboardConfig) {
        var result = [], key;
        if (keyboardConfig.isExpectedShiftKey()) {
            result.push("shift");
        }
        if (keyboardConfig.isExpectedCtrlKey()) {
            result.push("control");
        }
        if (keyboardConfig.isExpectedAltKey()) {
            result.push("alt");
        }

        key = keys[keyboardConfig.getExpectedKeyCode()];

        if (key) {
            result.push(key);
        }

        return result.join("+");
    }

    function createPseudoKeys(keyboardConfig) {
        var eventType = keyboardConfig.getEventType(),
            modifiersKeys = createModifiersKeys(keyboardConfig);

        return eventType + ":keys(" + modifiersKeys + ")";
    }

    return {

        defaultPerformFunction: "perform",


        observeKeyStroke: function (widget, keyboardConfig, action, scope, options) {
            keyboardConfig.eventType = createPseudoKeys(keyboardConfig);
            return this.observeWidget(widget, keyboardConfig, action, scope, options);
        },

        observeWidget: function (widget, eventConfig, action, scope, options) {
            var eventType = eventConfig.getEventType();

            function eventHandler(event) {
                if (!event) {

                    action.apply(scope, arguments);

                } else if (eventConfig.matchesModifiers(!!event.shift, !!event.control, !!event.alt)) {

                    if (eventConfig.shouldStopPropagation()) {
                        event.stopPropagation();
                    }
                    if (eventConfig.shouldPreventDefault()) {
                        event.preventDefault();
                    }

                    action.apply(scope, arguments);
                }
            }

            widget.addEvent(eventType, eventHandler);

            return function stopObservingWidget() {
                widget.removeEvent(eventType, eventHandler);
            };
        }
    }
})(this);

izi.registerBehaviorImpl(org.izi.behavior.impl.MooTools);org.izi.binding.impl.mootools = {};org.izi.binding.impl.mootools.textInputChangeObserver = function () {

    var perform = org.izi.behavior.register(org.izi.behavior.impl.MooTools);

    function matcher(source, sourceProperty, target, targetProperty, transferValueFn) {
        return source instanceof Element
            && (typeof source.get('type')) === "string"
            && source.get('type').toLowerCase() === 'text';
    }

    function observer(source, sourceProperty, target, targetProperty, transferValueFn) {
        var allStoppers = [];

        function stopObserving() {
            allStoppers.forEach(function (stopper) {
                stopper.stopObserving();
            })
        }

        allStoppers.push(perform(transferValueFn).when("change").on(source));
        allStoppers.push(perform(transferValueFn).when("keyup").on(source));
        allStoppers.push(perform(transferValueFn).when("paste").on(source));

        return stopObserving;
    }

    return org.izi.binding.impl.createObserver(matcher, observer);
}();

org.izi.binding.impl.MooTools = {

    changeObservers: [
        org.izi.binding.impl.iziModelChangeObserver,
        org.izi.binding.impl.mootools.textInputChangeObserver
    ],

    valueReaders: [
        org.izi.binding.impl.readByCapitalizedGetter,
        org.izi.binding.impl.readFromOwnedProperty,
        org.izi.binding.impl.readByGet,
        org.izi.binding.impl.readFromProperty
    ],

    valueWriters: [
        org.izi.binding.impl.writeByFunction,
        org.izi.binding.impl.writeByCapitalizedSetter,
        org.izi.binding.impl.writeToOwnedProperty,
        org.izi.binding.impl.writeBySet,
        org.izi.binding.impl.writeToProperty
    ]
};

izi.registerBindingImpl(org.izi.binding.impl.MooTools);