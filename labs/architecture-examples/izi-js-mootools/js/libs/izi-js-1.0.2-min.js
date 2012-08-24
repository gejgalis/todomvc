this.org="org"in this?this.org:{};this.izi="izi"in this?this.izi:{};this.org.izi="izi"in this.org?this.org.izi:{};this.org.izi.utils="utils"in this.org.izi?this.org.izi.utils:{};this.org.izi.model={};this.org.izi.ioc={bean:{}};this.org.izi.behavior={impl:{}};this.org.izi.binding={impl:{}};this.org.izi.events={};
org.izi.utils.indexOf=function(){function a(a,b){return Array.prototype.indexOf.call(a,b)}function b(a,b){var f,c=a.length;for(f=0;f<c;f+=1)if(a[f]===b)return f;return-1}return"function"===typeof Array.prototype.indexOf?a:b}();org.izi.utils.arrayContains=function(a,b){return-1!==org.izi.utils.indexOf(a,b)};org.izi.utils.removeItem=function(a,b){var d=org.izi.utils.indexOf(a,b);-1!==d&&a.splice(d,1)};org.izi.utils.capitalize=function(a){return a.charAt(0).toUpperCase()+a.substr(1)};
org.izi.utils.forEach=function(){function a(a,b,f){Array.prototype.forEach.call(a,b,f)}function b(a,b,f){var c,g=a.length;for(c=0;c<g;c+=1)b.call(f,a[c],c,a)}return"function"===typeof Array.prototype.forEach?a:b}();
org.izi.utils.some=function(){function a(a,b,f){return Array.prototype.some.call(a,b,f)}function b(a,b,f){var c=a.length>>>0;if("function"!=typeof b)throw new TypeError;for(var g=0;g<c;g++)if(g in a&&b.call(f,a[g],g,a))return!0;return!1}return"function"===typeof Array.prototype.some?a:b}();
org.izi.utils.every=function(){function a(a,b,f){return Array.prototype.every.call(a,b,f)}function b(a,b,f){for(var c=a.length>>>0,g=0;g<c;g++)if(g in a&&!b.call(f,a[g],g,a))return!1;return!0}return"function"===typeof Array.prototype.every?a:b}();
org.izi.utils.typeOf=function(a){if(void 0===a)return"undefined";if(null===a)return"null";switch(typeof a){case "string":return"String";case "number":return"Number";case "boolean":return"Boolean";case "function":return"Function"}switch(Object.prototype.toString.call(a)){case "[object Array]":return"Array";case "[object Date]":return"Date";case "[object RegExp]":return"RegExp";case "[object Boolean]":return"Boolean";case "[object Number]":return"Number"}if("object"===typeof a)return"Object";throw Error("Couldn't find type of given value");
};org.izi.utils.ClassNotFound=function(a){this.message='Class name given as string: "'+a+"\" couldn't be resolved as a class"};org.izi.utils.ClassNotFound.prototype=Error();org.izi.utils.getClassByName=function(a){return function(b){var d,e=b.split(".");d=a;org.izi.utils.forEach(e,function(a){a=d[a];if(void 0===a)throw new org.izi.utils.ClassNotFound(b);d=a});return d}}(this);
org.izi.utils.getCallerLineProvider=function(a){var b=Error();return function(){if(b.stack){var d=b.stack.split("\n"),e=-1<navigator.userAgent.indexOf("WebKit")?2+a:1+a;return d[e]}return" [IE doesn't provide line number in call stack]"}};
org.izi.model.Observable=function(){function a(){this.listeners=[]}var b=org.izi.utils.forEach;a.prototype={constructor:a,findListeners:function(a){var e=[];b(this.listeners,function(b){b.type===a&&e.push(b)});return e},dispatchEvent:function(a,e){var f=this;b(this.findListeners(a),function(a){a.fn.apply(f,e)})},addListener:function(a,b){this.listeners.push({type:a,fn:b})},removeListener:function(a,e){var f=this;b(this.findListeners(a),function(a){a.fn===e&&org.izi.utils.removeItem(f.listeners,a)})}};
return a}();
org.izi.model.Model=function(){function a(a,b){a.prototype[b]=function(){if(0===arguments.length)return this.get(b);if(1===arguments.length)return this.set(b,arguments[0]);throw Error("Too many arguments. Setter function requires exactly one argument");}}function b(){}var d=org.izi.utils.forEach;b.prototype=new org.izi.model.Observable;b.prototype.constructor=b;b.prototype.isIziModel=!0;b.prototype.get=function(a){return this.data[a]};b.prototype.set=function(a,b){this.data[a]!==b&&(this.data[a]=b,
this.dispatchEvent("change",[a]));return this};b.define=function(e){function f(){var a={};d(e.fields,function(b){a[b.name]=b.initialValue});return a}var c=function(){this.data=f()};c.prototype=new b;c.prototype.constructor=c;d(e.fields,function(b){a(c,b.name)});for(var g in e)e.hasOwnProperty(g)&&"fields"!=g&&(c.prototype[g]=e[g]);return c};return b}();
org.izi.ioc.bean.createInstance=function(a,b,d){var e,f,c=[];for(e=0;e<b.length;e+=1)(f=b[e])&&f.isIziInjection?c.push(f.resolveBean(d)):c.push(f);b=c.length;if(0===b)return new a;if(1===b)return new a(c[0]);if(2===b)return new a(c[0],c[1]);if(3===b)return new a(c[0],c[1],c[2]);if(4===b)return new a(c[0],c[1],c[2],c[3]);if(5===b)return new a(c[0],c[1],c[2],c[3],c[4]);if(6===b)return new a(c[0],c[1],c[2],c[3],c[4],c[5]);if(7===b)return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6]);if(8===b)return new a(c[0],
c[1],c[2],c[3],c[4],c[5],c[6],c[7]);if(9===b)return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]);if(10===b)return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9]);throw Error("Too many arguments given");};
org.izi.ioc.bean.LazySingletonStrategy=function(){var a=function(a){this.Clazz=a.getClazz();this.args=a.getArguments();this.instance=void 0};a.prototype.init=function(){return null};a.prototype.create=function(a){if(!this.instance)this.instance=org.izi.ioc.bean.createInstance(this.Clazz,this.args,a);return this.instance};a.prototype.matchesByType=function(a){return a===this.Clazz};a.prototype.getArguments=function(){return this.args};return a}();
org.izi.ioc.bean.InstanceStrategy=function(){var a=function(a){this.instance=a};a.prototype.init=function(){return this.instance};a.prototype.create=function(){return this.instance};a.prototype.matchesByType=function(a){return this.instance instanceof a};a.prototype.getArguments=function(){return[]};return a}();
org.izi.ioc.bean.PrototypeStrategy=function(){var a=function(a){this.Clazz=a.getClazz();this.args=a.getArguments()};a.prototype.init=function(){return null};a.prototype.create=function(a){return org.izi.ioc.bean.createInstance(this.Clazz,this.args,a)};a.prototype.matchesByType=function(a){return a===this.Clazz};a.prototype.getArguments=function(){return this.args};return a}();
org.izi.ioc.bean.SingletonStrategy=function(){var a=function(a){this.Clazz=a.getClazz();this.args=a.getArguments();this.instance=void 0};a.prototype.createInstance=function(a){if(!this.instance)this.instance=org.izi.ioc.bean.createInstance(this.Clazz,this.args,a);return this.instance};a.prototype.init=function(a){return this.createInstance(a)};a.prototype.create=function(a){return this.createInstance(a)};a.prototype.matchesByType=function(a){return a===this.Clazz};a.prototype.getArguments=function(){return this.args};
return a}();
org.izi.ioc.bean.BeanBuilder=function(){var a=function(a,d){this.id=a;this.strategy=d};a.prototype.init=function(a){return this.strategy.init(a)};a.prototype.create=function(a){var d=this.strategy.create(a);if(d.iziInjectingInProgress)return d;var e;d.iziInjectingInProgress=!0;for(e in d)d[e]&&d[e].isIziInjection&&(d[e]=d[e].resolveBean(a));delete d.iziInjectingInProgress;if(d.iziContext&&!d.iziContextCalled)d.iziContextCalled=!0,d.iziContext(a);if(d.iziInit&&!d.iziInitCalled)d.iziInitCalled=!0,d.iziInit();
return d};a.prototype.matches=function(a){return"string"===typeof a?-1!==a.indexOf(".")?this.strategy.matchesByType(org.izi.utils.getClassByName(a)):this.id===a:this.strategy.matchesByType(a)};a.prototype.getArgumentsDependencies=function(a){return function(d){var e=[];org.izi.utils.forEach(d,function(d){d&&d.isIziInjection&&e.push(d.findBeanBuilder(a))});return e}(this.strategy.getArguments())};return a}();org.izi.ioc.bean.NoBeanMatched=function(a){this.message="No bean matched: "+a};
org.izi.ioc.bean.NoBeanMatched.prototype=Error();org.izi.ioc.Config=function(){var a=function(a,d){this.Clazz=a;this.Strategy=d;this.args=[]};a.prototype.createStrategy=function(){return new this.Strategy(this)};a.prototype.getArguments=function(){return this.args};a.prototype.getClazz=function(){return this.Clazz};a.prototype.withArgs=function(){if(10<arguments.length)throw Error("Too many arguments passed. Ten arguments is maximum.");this.args=arguments;return this};return a}();
org.izi.ioc.BeansContext=function(){function a(a,b){function c(d){d=d.getArgumentsDependencies(a);org.izi.utils.forEach(d,function(a){if(a===b)throw Error("Circular dependencies found. If it is possible try inject those dependencies by properties instead by arguments.");c(a)})}c(b)}function b(b,d){var c,g=[];org.izi.utils.forEach(d,function(d){a(b,d);(c=d.init(b))&&g.push(d)});org.izi.utils.forEach(g,function(a){a.create(b)})}var d=function(a,b){this.beans=a;this.parentContext=b;this.beansBuilders=
[]};d.prototype.initContext=function(){var a=this.beans,d=this.beansBuilders,c,g;for(c in a)g=a[c],g=g instanceof org.izi.ioc.Config?new org.izi.ioc.bean.BeanBuilder(c,g.createStrategy()):new org.izi.ioc.bean.BeanBuilder(c,new org.izi.ioc.bean.InstanceStrategy(g)),d.push(g);b(this,this.beansBuilders);return this};d.prototype.getBean=function(a){var b=this.findBeanBuilder(a);!b&&void 0!==this.parentContext&&(b=this.parentContext.findBeanBuilder(a));if(!b)throw new org.izi.ioc.bean.NoBeanMatched(a);
return b.create(this)};d.prototype.findBeanBuilder=function(a){var b=null;org.izi.utils.forEach(this.beansBuilders,function(c){if(c.matches(a)){if(b)throw Error("Ambiguous reference to bean by type. Please refer by id.");b=c}});return b};return d}();
org.izi.ioc.Injection=function(){var a=function(a){this.beanIdOrType=a;this.getCallerLine=org.izi.utils.getCallerLineProvider(2)};a.prototype.getBeanNotFoundMessage=function(){return"Bean couldn't be found from injection at line:\n"+this.getCallerLine()};a.prototype.resolveBean=function(a){var d;try{d=a.getBean(this.beanIdOrType)}catch(e){if(e instanceof org.izi.utils.ClassNotFound||e instanceof org.izi.ioc.bean.NoBeanMatched)throw Error(this.getBeanNotFoundMessage());throw e;}return d};a.prototype.findBeanBuilder=
function(a){a=a.findBeanBuilder(this.beanIdOrType);if(null===a)throw Error(this.getBeanNotFoundMessage());return a};a.prototype.isIziInjection=!0;return a}();
org.izi.events.EventConfig=function(){var a=function(a){this.eventType=a;this.modifiers={shift:!1,ctrl:!1,alt:!1};this.stopEventType=void 0};a.prototype.isEventConfig=!0;a.prototype.shift=function(){this.modifiers.shift=!0;return this};a.prototype.ctrl=function(){this.modifiers.ctrl=!0;return this};a.prototype.alt=function(){this.modifiers.alt=!0;return this};a.prototype.stopEvent=function(){this.stopEventType="both";return this};a.prototype.stopPropagation=function(){this.stopEventType="stopPropagation";
return this};a.prototype.preventDefault=function(){this.stopEventType="preventDefault";return this};a.prototype.isExpectedShiftKey=function(){return this.modifiers.shift};a.prototype.isExpectedCtrlKey=function(){return this.modifiers.ctrl};a.prototype.isExpectedAltKey=function(){return this.modifiers.alt};a.prototype.getEventType=function(){return this.eventType};a.prototype.shouldStopPropagation=function(){return"stopPropagation"===this.stopEventType||"both"===this.stopEventType};a.prototype.shouldPreventDefault=
function(){return"preventDefault"===this.stopEventType||"both"===this.stopEventType};a.prototype.matchesModifiers=function(a,d,e){return this.isExpectedShiftKey()===a&&this.isExpectedCtrlKey()===d&&this.isExpectedAltKey()===e};return a}();
org.izi.events.KeyboardConfig=function(){var a=function(a){org.izi.events.EventConfig.apply(this,arguments);this.expectedKeyCode=0};a.prototype=new org.izi.events.EventConfig;a.prototype.constructor=a;a.prototype.isKeyboardEventConfig=!0;a.prototype.keyCode=function(a){this.expectedKeyCode=a;return this};a.prototype.getExpectedKeyCode=function(){return this.expectedKeyCode};a.prototype.BACKSPACE=function(){return this.keyCode(8)};a.prototype.TAB=function(){return this.keyCode(9)};a.prototype.NUM_CENTER=
function(){return this.keyCode(12)};a.prototype.ENTER=function(){return this.keyCode(13)};a.prototype.RETURN=function(){return this.keyCode(13)};a.prototype.SHIFT=function(){this.shift();return this.keyCode(16)};a.prototype.CTRL=function(){this.ctrl();return this.keyCode(17)};a.prototype.ALT=function(){this.alt();return this.keyCode(18)};a.prototype.PAUSE=function(){return this.keyCode(19)};a.prototype.CAPS_LOCK=function(){return this.keyCode(20)};a.prototype.ESC=function(){return this.keyCode(27)};
a.prototype.SPACE=function(){return this.keyCode(32)};a.prototype.PAGE_UP=function(){return this.keyCode(33)};a.prototype.PAGE_DOWN=function(){return this.keyCode(34)};a.prototype.END=function(){return this.keyCode(35)};a.prototype.HOME=function(){return this.keyCode(36)};a.prototype.LEFT=function(){return this.keyCode(37)};a.prototype.UP=function(){return this.keyCode(38)};a.prototype.RIGHT=function(){return this.keyCode(39)};a.prototype.DOWN=function(){return this.keyCode(40)};a.prototype.PRINT_SCREEN=
function(){return this.keyCode(44)};a.prototype.INSERT=function(){return this.keyCode(45)};a.prototype.DELETE=function(){return this.keyCode(46)};a.prototype.ZERO=function(){return this.keyCode(48)};a.prototype.ONE=function(){return this.keyCode(49)};a.prototype.TWO=function(){return this.keyCode(50)};a.prototype.THREE=function(){return this.keyCode(51)};a.prototype.FOUR=function(){return this.keyCode(52)};a.prototype.FIVE=function(){return this.keyCode(53)};a.prototype.SIX=function(){return this.keyCode(54)};
a.prototype.SEVEN=function(){return this.keyCode(55)};a.prototype.EIGHT=function(){return this.keyCode(56)};a.prototype.NINE=function(){return this.keyCode(57)};a.prototype.A=function(){return this.keyCode(65)};a.prototype.B=function(){return this.keyCode(66)};a.prototype.C=function(){return this.keyCode(67)};a.prototype.D=function(){return this.keyCode(68)};a.prototype.E=function(){return this.keyCode(69)};a.prototype.F=function(){return this.keyCode(70)};a.prototype.G=function(){return this.keyCode(71)};
a.prototype.H=function(){return this.keyCode(72)};a.prototype.I=function(){return this.keyCode(73)};a.prototype.J=function(){return this.keyCode(74)};a.prototype.K=function(){return this.keyCode(75)};a.prototype.L=function(){return this.keyCode(76)};a.prototype.M=function(){return this.keyCode(77)};a.prototype.N=function(){return this.keyCode(78)};a.prototype.O=function(){return this.keyCode(79)};a.prototype.P=function(){return this.keyCode(80)};a.prototype.Q=function(){return this.keyCode(81)};a.prototype.R=
function(){return this.keyCode(82)};a.prototype.S=function(){return this.keyCode(83)};a.prototype.T=function(){return this.keyCode(84)};a.prototype.U=function(){return this.keyCode(85)};a.prototype.V=function(){return this.keyCode(86)};a.prototype.W=function(){return this.keyCode(87)};a.prototype.X=function(){return this.keyCode(88)};a.prototype.Y=function(){return this.keyCode(89)};a.prototype.Z=function(){return this.keyCode(90)};a.prototype.NUM_ZERO=function(){return this.keyCode(96)};a.prototype.NUM_ONE=
function(){return this.keyCode(97)};a.prototype.NUM_TWO=function(){return this.keyCode(98)};a.prototype.NUM_THREE=function(){return this.keyCode(99)};a.prototype.NUM_FOUR=function(){return this.keyCode(100)};a.prototype.NUM_FIVE=function(){return this.keyCode(101)};a.prototype.NUM_SIX=function(){return this.keyCode(102)};a.prototype.NUM_SEVEN=function(){return this.keyCode(103)};a.prototype.NUM_EIGHT=function(){return this.keyCode(104)};a.prototype.NUM_NINE=function(){return this.keyCode(105)};a.prototype.NUM_MULTIPLY=
function(){return this.keyCode(106)};a.prototype.NUM_PLUS=function(){return this.keyCode(107)};a.prototype.NUM_MINUS=function(){return this.keyCode(109)};a.prototype.NUM_PERIOD=function(){return this.keyCode(110)};a.prototype.NUM_DIVISION=function(){return this.keyCode(111)};a.prototype.F1=function(){return this.keyCode(112)};a.prototype.F2=function(){return this.keyCode(113)};a.prototype.F3=function(){return this.keyCode(114)};a.prototype.F4=function(){return this.keyCode(115)};a.prototype.F5=function(){return this.keyCode(116)};
a.prototype.F6=function(){return this.keyCode(117)};a.prototype.F7=function(){return this.keyCode(118)};a.prototype.F8=function(){return this.keyCode(119)};a.prototype.F9=function(){return this.keyCode(120)};a.prototype.F10=function(){return this.keyCode(121)};a.prototype.F11=function(){return this.keyCode(122)};a.prototype.F12=function(){return this.keyCode(123)};return a}();
org.izi.events.IziEvents={event:function(a){return new org.izi.events.EventConfig(a)},keyboardEvent:function(a){return new org.izi.events.KeyboardConfig(a)},keyDown:function(){return this.keyboardEvent("keydown")},keyUp:function(){return this.keyboardEvent("keyup")},afterPrint:function(){return this.event("afterprint")},beforePrint:function(){return this.event("beforeprint")},beforeOnLoad:function(){return this.event("beforeonload")},error:function(){return this.event("error")},hasChange:function(){return this.event("haschange")},
load:function(){return this.event("load")},message:function(){return this.event("message")},offline:function(){return this.event("offline")},line:function(){return this.event("line")},pageHide:function(){return this.event("pagehide")},pageShow:function(){return this.event("pageshow")},popState:function(){return this.event("popstate")},redo:function(){return this.event("redo")},resize:function(){return this.event("resize")},storage:function(){return this.event("storage")},undo:function(){return this.event("undo")},
unload:function(){return this.event("unload")},blur:function(){return this.event("blur")},change:function(){return this.event("change")},contextMenu:function(){return this.event("contextmenu")},focus:function(){return this.event("focus")},formChange:function(){return this.event("formchange")},formInput:function(){return this.event("forminput")},input:function(){return this.event("input")},invalid:function(){return this.event("invalid")},reset:function(){return this.event("reset")},select:function(){return this.event("select")},
submit:function(){return this.event("submit")},click:function(){return this.event("click")},dblClick:function(){return this.event("dblclick")},drag:function(){return this.event("drag")},dragEnd:function(){return this.event("dragend")},dragEnter:function(){return this.event("dragenter")},dragLeave:function(){return this.event("dragleave")},dragOver:function(){return this.event("dragover")},dragStart:function(){return this.event("dragstart")},drop:function(){return this.event("drop")},mouseDown:function(){return this.event("mousedown")},
mouseMove:function(){return this.event("mousemove")},mouseOut:function(){return this.event("mouseout")},mouseOver:function(){return this.event("mouseover")},mouseUp:function(){return this.event("mouseup")},mouseWheel:function(){return this.event("mousewheel")},scroll:function(){return this.event("scroll")},abort:function(){return this.event("abort")},canPlay:function(){return this.event("canplay")},canPlayThrough:function(){return this.event("canplaythrough")},durationChange:function(){return this.event("durationchange")},
emptied:function(){return this.event("emptied")},ended:function(){return this.event("ended")},loadedData:function(){return this.event("loadeddata")},loadedMetaData:function(){return this.event("loadedmetadata")},loadStart:function(){return this.event("loadstart")},pause:function(){return this.event("pause")},play:function(){return this.event("play")},playing:function(){return this.event("playing")},progress:function(){return this.event("progress")},rateChange:function(){return this.event("ratechange")},
readyStateChange:function(){return this.event("readystatechange")},seeked:function(){return this.event("seeked")},seeking:function(){return this.event("seeking")},stalled:function(){return this.event("stalled")},suspend:function(){return this.event("suspend")},timeUpdate:function(){return this.event("timeupdate")},volumeChange:function(){return this.event("volumechange")},waiting:function(){return this.event("waiting")},touchStart:function(){return this.event("touchstart")},touchMove:function(){return this.event("touchmove")},
touchEnd:function(){return this.event("touchend")},touchCancel:function(){return this.event("touchcancel")},touchEnter:function(){return this.event("touchenter")},touchLave:function(){return this.event("touchlave")},gestureStart:function(){return this.event("gesturestart")},gestureChange:function(){return this.event("gesturechange")},gestureEnd:function(){return this.event("gestureend")},orientationChange:function(){return this.event("orientationchange")}};
org.izi.behavior.Config=function(){var a=function(b){a.prototype.impl=b};a.prototype.withDispatcher=function(a){this.dispatcher=a;return this};a.prototype.withEventConfig=function(a){this.eventType=a;return this};a.prototype.withEventOptions=function(a){this.eventOptions=a;return this};a.prototype.withAction=function(a){this.action=a;return this};a.prototype.withScope=function(a){this.scope=a;return this};a.prototype.withModelProperties=function(a){this.modelProperties=a;return this};a.prototype.getAction=
function(){return"function"!==typeof this.action&&!this.scope?this.getScope()[this.getImpl().defaultPerformFunction]:this.action};a.prototype.getScope=function(){return"function"!==typeof this.action&&!this.scope?this.action:this.scope};a.prototype.getEventConfig=function(){return this.eventType};a.prototype.getEventOptions=function(){return this.eventOptions};a.prototype.getDispatcher=function(){return this.dispatcher.delegatedIn||this.dispatcher};a.prototype.getImpl=function(){return this.impl};
a.prototype.getModelProperties=function(){return this.modelProperties};return a}();org.izi.behavior.WhenWidget=function(){var a=function(a){this.config=a};a.prototype.on=function(a){return new org.izi.behavior.OnWidget(this.config.withDispatcher(a))};return a}();org.izi.behavior.WhenModel=function(){var a=function(a){this.config=a};a.prototype.on=function(a){return new org.izi.behavior.OnModel(this.config.withDispatcher(a))};return a}();
org.izi.behavior.OnWidget=function(a){var b=a.getAction(),d=a.getScope(),e=a.getEventConfig(),f=a.getEventOptions(),c=a.getDispatcher(),g=a.getImpl();this.stopObserving=function(){if(e.isKeyboardEventConfig)return g.observeKeyStroke(c,e,b,d,f);if(e.isEventConfig)return g.observeWidget(c,e,b,d,f);if("Function"===org.izi.utils.typeOf(e))return e(c,b,d,f);throw Error("Incorrect event type. Expecting izi.event.* or 'eventType' or Function while executing izi.perform().when(...)");}()};
org.izi.behavior.OnModel=function(a){function b(){d.apply(e)}var d=a.getAction(),e=a.getScope(),f=a.getDispatcher(),a=a.getModelProperties(),c=[];org.izi.utils.forEach(a,function(a){c.push(izi.bind().valueOf(f,a).to(b))});this.stopObserving=function(){org.izi.utils.forEach(c,function(a){a.stopObserving()})}};
org.izi.behavior.Perform=function(){var a=function(a){this.config=a};a.prototype.when=function(a,d){var e="String"===org.izi.utils.typeOf(a)?new org.izi.events.EventConfig(a):a;return new org.izi.behavior.WhenWidget(this.config.withEventConfig(e).withEventOptions(d))};a.prototype.whenChangeOf=function(a){return new org.izi.behavior.WhenModel(this.config.withModelProperties(Array.prototype.slice.call(arguments)))};return a}();
org.izi.behavior.register=function(a){if(!a.defaultPerformFunction)throw Error("Behavior implementation must have defined property: defaultPerformFunction: 'someFunctionName'");if(!a.observeWidget)throw Error("Behavior implementation must have defined function observeWidget (widget, eventConfig, action, scope, options)");if(!a.observeKeyStroke)throw Error("Behavior implementation must have defined function observeKeyStroke (widget, keyboardConfig, action, scope, options)");return function(b,d){return new org.izi.behavior.Perform((new org.izi.behavior.Config(a)).withAction(b).withScope(d))}};
org.izi.binding.Config=function(){var a=function(a){this.impl=a;this.triggerProperties=[]};a.prototype.withSource=function(a){this.source=a;return this};a.prototype.withSourceProperties=function(a){this.sourceProperties=a.constructor===Array?a:[a];return this};a.prototype.withTarget=function(a){this.target=a;return this};a.prototype.withTargetProperty=function(a){this.targetProperty=a;return this};a.prototype.withFormatter=function(a){this.formatter=a;return this};a.prototype.addTriggerProperty=function(a){this.triggerProperties.push(a)};
return a}();org.izi.binding.Bind=function(){var a=function(a){this.config=a};a.prototype.valueOf=function(a,d){2<arguments.length&&(d=Array.prototype.slice.call(arguments,1));return new org.izi.binding.ValueOf(this.config.withSource(a).withSourceProperties(d||"value"))};a.prototype.selectedItemsOf=function(a){return this.valueOf(a,"selectedItems")};return a}();
org.izi.binding.ValueOf=function(){var a=function(a){this.config=a};a.prototype.to=function(a,d){return 0===arguments.length?this:new org.izi.binding.Binding(this.config.withTarget(a).withTargetProperty(d))};a.prototype.valueOf=function(a){return this.to(a,"value")};a.prototype.textOf=function(a){return this.to(a,"text")};a.prototype.selectedItemsOf=function(a){return this.to(a,"selectedItems")};a.prototype.through=function(a){this.config.withFormatter(a);return this};a.prototype.onChangeOf=function(a){this.config.addTriggerProperty(a);
return this};return a}();
org.izi.binding.Binding=function(a){function b(a,b){var c,d;for(c=0;c<a.length;c+=1)if(d=a[c],d=d.apply(null,b))return d;throw Error("Closure not found");}function d(a,b){var c=[],d;j(b,function(b){d=m[b];c.push(d(a,b))});if(k&&"function"===typeof k)return k.apply(null,c);if(1===c.length)return c[0];throw Error("You must use formatter if you want to bind more properties than one. Ex: izi.bind().valueOf(model, 'firstName', 'lastName').through(concatFormatter)...");}function e(){var a=d(c,g),b;try{b=
l(h,i)}catch(e){b=void 0}a!==b&&n(h,i,a)}var f=a.impl,c=a.source.delegatedIn||a.source,g=a.sourceProperties,p=a.triggerProperties,h=a.target.delegatedIn||a.target,i=a.targetProperty,k=a.formatter,j=org.izi.utils.forEach,m={},l,n,o=[];this.stopObserving=function(){j(o,function(a){a()})};(function(){j(g,function(a){try{m[a]=b(f.valueReaders,[c,a])}catch(d){throw Error("Could not find reader function for: "+c+" using property: "+a);}});try{l=b(f.valueReaders,[h,i])}catch(a){l=function(){}}try{n=b(f.valueWriters,
[h,i])}catch(d){throw Error("Could not find writer function for: "+h+" using property: "+i);}})();e();(function(){var a=p.concat(g);j(a,function(a){var d;var g=c;try{d=b(f.changeObservers,[g,a,h,i,e])}catch(j){throw Error("Could not find change observer for: "+g+" and property: "+a);}o.push(d(c,a,h,i,e))})})()};org.izi.binding.impl.createReader=function(a,b){return function(d,e){return a(d,e)?b:null}};org.izi.binding.impl.createWriter=function(a,b){return function(d,e){return a(d,e)?b:null}};
org.izi.binding.impl.createObserver=function(a,b){return function(d,e,f,c,g){return a(d,e,f,c,g)?b:null}};org.izi.binding.impl.readByGet=function(){return org.izi.binding.impl.createReader(function(a){return"function"===typeof a.get},function(a,b){return a.get(b)})}();org.izi.binding.impl.readByCapitalizedGetter=function(){var a=org.izi.utils.capitalize;return org.izi.binding.impl.createReader(function(b,d){return"function"===typeof b["get"+a(d)]},function(b,d){return b["get"+a(d)]()})}();
org.izi.binding.impl.readByFunction=function(){return org.izi.binding.impl.createReader(function(a,b){return"function"===typeof a[b]},function(a,b){return a[b]()})}();org.izi.binding.impl.readFromProperty=function(){return org.izi.binding.impl.createReader(function(){return!0},function(a,b){return a[b]})}();org.izi.binding.impl.readFromOwnedProperty=function(){return org.izi.binding.impl.createReader(function(a,b){return a.hasOwnProperty(b)},function(a,b){return a[b]})}();
org.izi.binding.impl.writeBySet=function(){return org.izi.binding.impl.createWriter(function(a){return"function"===typeof a.set},function(a,b,d){a.set(b,d)})}();org.izi.binding.impl.writeByCapitalizedSetter=function(){var a=org.izi.utils.capitalize;return org.izi.binding.impl.createWriter(function(b,d){return"function"===typeof b["set"+a(d)]},function(b,d,e){b["set"+a(d)](e)})}();
org.izi.binding.impl.writeToProperty=function(){return org.izi.binding.impl.createWriter(function(){return!0},function(a,b,d){a[b]=d})}();org.izi.binding.impl.writeToOwnedProperty=function(){return org.izi.binding.impl.createWriter(function(a,b){return a.hasOwnProperty(b)},function(a,b,d){a[b]=d})}();org.izi.binding.impl.writeByFunction=function(){return org.izi.binding.impl.createWriter(function(a){return"Function"===org.izi.utils.typeOf(a)},function(a,b,d){a.call(b,d)})}();
org.izi.binding.impl.iziModelChangeObserver=function(){return org.izi.binding.impl.createObserver(function(a){return a.isIziModel},function(a,b,d,e,f){function c(a){a===b&&f()}a.addListener("change",c);return function(){a.removeListener("change",c)}})}();org.izi.binding.register=function(a){return function(){return new org.izi.binding.Bind(new org.izi.binding.Config(a))}};izi.bakeBeans=function(a,b){return(new org.izi.ioc.BeansContext(a,b)).initContext()};
izi.instantiate=function(a){return new org.izi.ioc.Config(a,org.izi.ioc.bean.SingletonStrategy)};izi.lazy=function(a){return new org.izi.ioc.Config(a,org.izi.ioc.bean.LazySingletonStrategy)};izi.protoOf=function(a){return new org.izi.ioc.Config(a,org.izi.ioc.bean.PrototypeStrategy)};izi.inject=function(a){return new org.izi.ioc.Injection(a)};izi.perform=function(){throw Error("Register your behavior implementation first: izi.registerBehaviorImpl(org.izi.behavior.impl.SomeImpl)");};
izi.registerBehaviorImpl=function(a){izi.perform=org.izi.behavior.register(a)};izi.bind=function(){throw Error("Register your binding implementation first: izi.registerBindingImpl(org.izi.binding.impl.SomeImpl)");};izi.registerBindingImpl=function(a){izi.bind=org.izi.binding.register(a)};izi.modelOf=function(a){return org.izi.model.Model.define(a)};izi.events=org.izi.events.IziEvents;