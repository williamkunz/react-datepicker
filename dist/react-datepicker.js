this["require"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _popover = __webpack_require__(2);

	var _popover2 = _interopRequireDefault(_popover);

	var _utilDate = __webpack_require__(4);

	var _utilDate2 = _interopRequireDefault(_utilDate);

	var _calendar = __webpack_require__(5);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _date_input = __webpack_require__(10);

	var _date_input2 = _interopRequireDefault(_date_input);

	var _lodash = __webpack_require__(8);

	var _lodash2 = _interopRequireDefault(_lodash);

	var DatePicker = _react2['default'].createClass({
	  displayName: 'DatePicker',

	  propTypes: {
	    weekdays: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    locale: _react2['default'].PropTypes.string,
	    dateFormatCalendar: _react2['default'].PropTypes.string,
	    onChange: _react2['default'].PropTypes.func.isRequired,
	    onBlur: _react2['default'].PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	      locale: "en",
	      dateFormatCalendar: "MMMM YYYY",
	      moment: moment,
	      onChange: function onChange() {},
	      disabled: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      focus: false,
	      virtualFocus: false,
	      selected: this.props.selected
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      selected: nextProps.selected
	    });
	  },

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !(_lodash2['default'].isEqual(nextProps, this.props) && _lodash2['default'].isEqual(nextState, this.state));
	  },

	  getValue: function getValue() {
	    return this.state.selected;
	  },

	  handleFocus: function handleFocus() {
	    this.setState({
	      focus: true
	    });
	  },

	  handleBlur: function handleBlur() {
	    this.setState({ virtualFocus: false });
	    setTimeout((function () {
	      if (!this.state.virtualFocus && typeof this.props.onBlur === "function") {
	        this.props.onBlur(this.state.selected);
	        this.hideCalendar();
	      }
	    }).bind(this), 200);
	  },

	  hideCalendar: function hideCalendar() {
	    setTimeout((function () {
	      this.setState({
	        focus: false
	      });
	    }).bind(this), 0);
	  },

	  handleSelect: function handleSelect(date) {
	    this.setSelected(date);

	    setTimeout((function () {
	      this.hideCalendar();
	    }).bind(this), 200);
	  },

	  setSelected: function setSelected(date) {
	    var moment = date.moment();

	    this.props.onChange(moment);

	    this.setState({
	      selected: moment,
	      virtualFocus: true
	    });
	  },

	  clearSelected: function clearSelected() {
	    this.props.onChange(null);

	    this.setState({
	      selected: null
	    });
	  },

	  onInputClick: function onInputClick() {
	    this.setState({
	      focus: true,
	      virtualFocus: true
	    });
	  },

	  calendar: function calendar() {
	    if (this.state.focus) {
	      return _react2['default'].createElement(
	        _popover2['default'],
	        null,
	        _react2['default'].createElement(_calendar2['default'], {
	          weekdays: this.props.weekdays,
	          locale: this.props.locale,
	          moment: this.props.moment,
	          dateFormat: this.props.dateFormatCalendar,
	          selected: this.state.selected,
	          onSelect: this.handleSelect,
	          hideCalendar: this.hideCalendar,
	          minDate: this.props.minDate,
	          maxDate: this.props.maxDate,
	          excludeDates: this.props.excludeDates,
	          weekStart: this.props.weekStart })
	      );
	    }
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(_date_input2['default'], {
	        name: this.props.name,
	        date: this.state.selected,
	        dateFormat: this.props.dateFormat,
	        focus: this.state.focus,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur,
	        handleClick: this.onInputClick,
	        handleEnter: this.hideCalendar,
	        setSelected: this.setSelected,
	        clearSelected: this.clearSelected,
	        hideCalendar: this.hideCalendar,
	        placeholderText: this.props.placeholderText,
	        disabled: this.props.disabled,
	        className: this.props.className,
	        title: this.props.title }),
	      this.props.disabled ? null : this.calendar()
	    );
	  }
	});

	module.exports = DatePicker;

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this[undefined]; }());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tether = __webpack_require__(3);

	var _tether2 = _interopRequireDefault(_tether);

	var Popover = _react2["default"].createClass({
	  displayName: "Popover",

	  componentWillMount: function componentWillMount() {
	    var popoverContainer = document.createElement("span");
	    popoverContainer.className = "datepicker__container";

	    this._popoverElement = popoverContainer;

	    document.querySelector("body").appendChild(this._popoverElement);
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderPopover();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._renderPopover();
	  },

	  _popoverComponent: function _popoverComponent() {
	    var className = this.props.className;
	    return _react2["default"].createElement(
	      "div",
	      { className: className },
	      this.props.children
	    );
	  },

	  _tetherOptions: function _tetherOptions() {
	    return {
	      element: this._popoverElement,
	      target: this.getDOMNode().parentElement,
	      attachment: "top left",
	      targetAttachment: "bottom left",
	      targetOffset: "10px 0",
	      optimizations: {
	        moveElement: false // always moves to <body> anyway!
	      },
	      constraints: [{
	        to: "window",
	        attachment: "together"
	      }]
	    };
	  },

	  _renderPopover: function _renderPopover() {
	    _react2["default"].render(this._popoverComponent(), this._popoverElement);

	    if (this._tether != null) {
	      this._tether.setOptions(this._tetherOptions());
	    } else if (window && document) {
	      this._tether = new _tether2["default"](this._tetherOptions());
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._tether.destroy();
	    _react2["default"].unmountComponentAtNode(this._popoverElement);
	    if (this._popoverElement.parentNode) {
	      this._popoverElement.parentNode.removeChild(this._popoverElement);
	    }
	  },

	  render: function render() {
	    return _react2["default"].createElement("span", null);
	  }
	});

	module.exports = Popover;

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() { module.exports = this[undefined]; }());

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function DateUtil(date) {
	  this._date = date;
	}

	DateUtil.prototype.isBefore = function (other) {
	  return this._date.isBefore(other._date, "day");
	};

	DateUtil.prototype.isAfter = function (other) {
	  return this._date.isAfter(other._date, "day");
	};

	DateUtil.prototype.sameDay = function (other) {
	  return this._date.isSame(other._date, "day");
	};

	DateUtil.prototype.sameMonth = function (other) {
	  return this._date.isSame(other._date, "month");
	};

	DateUtil.prototype.day = function () {
	  return this._date.date();
	};

	DateUtil.prototype.mapDaysInWeek = function (callback) {
	  var week = [];
	  var firstDay = this._date.clone();

	  for (var i = 0; i < 7; i++) {
	    var day = new DateUtil(firstDay.clone().add(i, "days"));

	    week[i] = callback(day, i);
	  }

	  return week;
	};

	DateUtil.prototype.mapWeeksInMonth = function (callback) {
	  var month = [];
	  var firstDay = this._date.clone().startOf("month").startOf("week");

	  for (var i = 0; i < 6; i++) {
	    var weekStart = new DateUtil(firstDay.clone().add(i, "weeks"));

	    month[i] = callback(weekStart, i);
	  }

	  return month;
	};

	DateUtil.prototype.weekInMonth = function (other) {
	  var firstDayInWeek = this._date.clone();
	  var lastDayInWeek = this._date.clone().weekday(7);

	  return firstDayInWeek.isSame(other._date, "month") || lastDayInWeek.isSame(other._date, "month");
	};

	DateUtil.prototype.format = function () {
	  return this._date.format.apply(this._date, arguments);
	};

	DateUtil.prototype.localeFormat = function () {
	  var args = Array.prototype.slice.call(arguments);
	  var locale = args.shift();
	  return this._date.locale(locale).format.apply(this._date, args);
	};

	DateUtil.prototype.addMonth = function () {
	  return new DateUtil(this._date.clone().add(1, "month"));
	};

	DateUtil.prototype.subtractMonth = function () {
	  return new DateUtil(this._date.clone().subtract(1, "month"));
	};

	DateUtil.prototype.clone = function () {
	  return new DateUtil(this._date.clone());
	};

	DateUtil.prototype.safeClone = function (alternative) {
	  if (!!this._date) return this.clone();

	  if (alternative === undefined) alternative = null;
	  return new DateUtil(alternative);
	};

	DateUtil.prototype.moment = function () {
	  return this._date;
	};

	module.exports = DateUtil;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _day = __webpack_require__(6);

	var _day2 = _interopRequireDefault(_day);

	var _utilDate = __webpack_require__(4);

	var _utilDate2 = _interopRequireDefault(_utilDate);

	var _lodash = __webpack_require__(8);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactOnclickoutside = __webpack_require__(9);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var Calendar = _react2["default"].createClass({
	  displayName: "Calendar",

	  mixins: [_reactOnclickoutside2["default"]],

	  handleClickOutside: function handleClickOutside() {
	    this.props.hideCalendar();
	  },

	  getInitialState: function getInitialState() {
	    return {
	      date: new _utilDate2["default"](this.props.selected).safeClone(this.props.moment())
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      weekStart: 1
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this.initializeMomentLocale();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.selected === null) {
	      return;
	    }

	    // When the selected date changed
	    if (nextProps.selected !== this.props.selected) {
	      this.setState({
	        date: new _utilDate2["default"](nextProps.selected).clone()
	      });
	    }
	  },

	  initializeMomentLocale: function initializeMomentLocale() {
	    var weekdays = this.props.weekdays.slice(0);
	    weekdays = weekdays.concat(weekdays.splice(0, this.props.weekStart));

	    this.props.moment.locale(this.props.locale, {
	      week: {
	        dow: this.props.weekStart
	      },
	      weekdaysMin: weekdays
	    });
	  },

	  increaseMonth: function increaseMonth() {
	    this.setState({
	      date: this.state.date.addMonth()
	    });
	  },

	  decreaseMonth: function decreaseMonth() {
	    this.setState({
	      date: this.state.date.subtractMonth()
	    });
	  },

	  weeks: function weeks() {
	    return this.state.date.mapWeeksInMonth(this.renderWeek);
	  },

	  handleDayClick: function handleDayClick(day) {
	    this.props.onSelect(day);
	  },

	  renderWeek: function renderWeek(weekStart, key) {
	    if (!weekStart.weekInMonth(this.state.date)) {
	      return;
	    }

	    return _react2["default"].createElement(
	      "div",
	      { key: key },
	      this.days(weekStart)
	    );
	  },

	  renderDay: function renderDay(day, key) {
	    var minDate = new _utilDate2["default"](this.props.minDate).safeClone(),
	        maxDate = new _utilDate2["default"](this.props.maxDate).safeClone(),
	        excludeDates,
	        disabled;

	    if (this.props.excludeDates && Array.isArray(this.props.excludeDates)) {
	      excludeDates = (0, _lodash2["default"])(this.props.excludeDates).map(function (date) {
	        return new _utilDate2["default"](date).safeClone();
	      });
	    }

	    disabled = day.isBefore(minDate) || day.isAfter(maxDate) || (0, _lodash2["default"])(excludeDates).some(function (xDay) {
	      return day.sameDay(xDay);
	    });

	    return _react2["default"].createElement(_day2["default"], {
	      key: key,
	      day: day,
	      date: this.state.date,
	      onClick: this.handleDayClick.bind(this, day),
	      selected: new _utilDate2["default"](this.props.selected),
	      disabled: disabled });
	  },

	  days: function days(weekStart) {
	    return weekStart.mapDaysInWeek(this.renderDay);
	  },

	  header: function header() {
	    return this.props.moment.weekdaysMin().map(function (day, key) {
	      return _react2["default"].createElement(
	        "div",
	        { className: "datepicker__day", key: key },
	        day
	      );
	    });
	  },

	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "datepicker" },
	      _react2["default"].createElement("div", { className: "datepicker__triangle" }),
	      _react2["default"].createElement(
	        "div",
	        { className: "datepicker__header" },
	        _react2["default"].createElement("a", { className: "datepicker__navigation datepicker__navigation--previous",
	          onClick: this.decreaseMonth }),
	        _react2["default"].createElement(
	          "span",
	          { className: "datepicker__current-month" },
	          this.state.date.localeFormat(this.props.locale, this.props.dateFormat)
	        ),
	        _react2["default"].createElement("a", { className: "datepicker__navigation datepicker__navigation--next",
	          onClick: this.increaseMonth }),
	        _react2["default"].createElement(
	          "div",
	          null,
	          this.header()
	        )
	      ),
	      _react2["default"].createElement(
	        "div",
	        { className: "datepicker__month" },
	        this.weeks()
	      )
	    );
	  }
	});

	module.exports = Calendar;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var Day = _react2["default"].createClass({
	  displayName: "Day",

	  handleClick: function handleClick(event) {
	    if (this.props.disabled) return;

	    this.props.onClick(event);
	  },

	  isWeekend: function isWeekend() {
	    var weekday = this.props.day.moment().weekday();
	    return weekday === 5 || weekday === 6;
	  },

	  render: function render() {
	    var classes = ["datepicker__day"];

	    if (this.props.disabled) classes.push("datepicker__day--disabled");

	    if (this.props.day.sameDay(this.props.selected)) classes.push("datepicker__day--selected");

	    if (this.props.day.sameDay((0, _moment2["default"])())) classes.push("datepicker__day--today");

	    if (this.isWeekend()) {
	      classes.push("datepicker__day--weekend");
	    }

	    return _react2["default"].createElement(
	      "div",
	      { className: classes.join(" "), onClick: this.handleClick },
	      this.props.day.day()
	    );
	  }
	});

	module.exports = Day;

/***/ },
/* 7 */
/***/ function(module, exports) {

	(function() { module.exports = this[undefined]; }());

/***/ },
/* 8 */
/***/ function(module, exports) {

	(function() { module.exports = this[undefined]; }());

/***/ },
/* 9 */
/***/ function(module, exports) {

	(function() { module.exports = this[undefined]; }());

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilDate = __webpack_require__(4);

	var _utilDate2 = _interopRequireDefault(_utilDate);

	var _moment = __webpack_require__(7);

	var _moment2 = _interopRequireDefault(_moment);

	var DateInput = _react2["default"].createClass({
	  displayName: "DateInput",

	  getDefaultProps: function getDefaultProps() {
	    return {
	      dateFormat: "YYYY-MM-DD",
	      className: "datepicker__input",
	      onBlur: function onBlur() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      value: this.safeDateFormat(this.props.date)
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this.toggleFocus(this.props.focus);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
	    this.toggleFocus(newProps.focus);

	    this.setState({
	      value: this.safeDateFormat(newProps.date)
	    });
	  },

	  toggleFocus: function toggleFocus(focus) {
	    if (focus) {
	      _react2["default"].findDOMNode(this.refs.input).focus();
	    } else {
	      _react2["default"].findDOMNode(this.refs.input).blur();
	    }
	  },

	  handleChange: function handleChange(event) {
	    var date = (0, _moment2["default"])(event.target.value, this.props.dateFormat, true);

	    this.setState({
	      value: event.target.value
	    });

	    if (date.isValid()) {
	      this.props.setSelected(new _utilDate2["default"](date));
	    } else if (event.target.value === "") {
	      this.props.clearSelected();
	    }
	  },

	  safeDateFormat: function safeDateFormat(date) {
	    return !!date ? date.format(this.props.dateFormat) : null;
	  },

	  handleKeyDown: function handleKeyDown(event) {
	    switch (event.key) {
	      case "Enter":
	        event.preventDefault();
	        this.props.handleEnter();
	        break;
	      case "Escape":
	        event.preventDefault();
	        this.props.hideCalendar();
	        break;
	    }
	  },

	  handleClick: function handleClick(event) {
	    if (!this.props.disabled) {
	      this.props.handleClick(event);
	    }
	  },

	  render: function render() {
	    return _react2["default"].createElement("input", {
	      ref: "input",
	      type: "text",
	      name: this.props.name,
	      value: this.state.value,
	      onClick: this.handleClick,
	      onKeyDown: this.handleKeyDown,
	      onFocus: this.props.onFocus,
	      onBlur: this.props.onBlur,
	      onChange: this.handleChange,
	      className: this.props.className,
	      disabled: this.props.disabled,
	      placeholder: this.props.placeholderText });
	  }
	});

	module.exports = DateInput;

/***/ }
/******/ ]);