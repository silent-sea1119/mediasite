webpackJsonp([1,2],Array(18).concat([
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(118);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediasiteApi = function () {
  function MediasiteApi() {
    _classCallCheck(this, MediasiteApi);
  }

  _createClass(MediasiteApi, null, [{
    key: 'trackSongSheetCreation',
    value: function trackSongSheetCreation(songId) {
      fetch('/api/v1/song/' + songId + '/track/').then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'getSongs',
    value: function getSongs(searchText, callback) {
      fetch('/api/v1/songs/get/?searchText=' + searchText).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }, {
    key: 'getSongById',
    value: function getSongById(songId, callback) {
      fetch('/api/v1/song/' + songId).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }, {
    key: 'createSong',
    value: function createSong(songData, callback) {
      fetch('/api/v1/song/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
      }).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }, {
    key: 'updateSong',
    value: function updateSong(songData, callback) {
      fetch('/api/v1/song/' + songData.songId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(songData)
      }).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(userId, callback) {
      fetch('/api/v1/user/get/' + userId).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }, {
    key: 'login',
    value: function login(userId, callback) {
      fetch('/api/v1/user/login/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'userId': userId
        })
      }).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        return callback(jsonData);
      });
    }
  }]);

  return MediasiteApi;
}();

exports.default = MediasiteApi;

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(218),
    getValue = __webpack_require__(238);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(248),
    listCacheDelete = __webpack_require__(249),
    listCacheGet = __webpack_require__(250),
    listCacheHas = __webpack_require__(251),
    listCacheSet = __webpack_require__(252);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

var eq = __webpack_require__(123);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(245);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(20),
    isSymbol = __webpack_require__(71);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(71);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ },
/* 50 */
/***/ function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  login: function login(userId, cb) {
    var _this = this;

    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) {
        cb(true);
      }
      this.onChange(true);
      return;
    }

    if (userId === undefined) {
      this.onChange(false);
      if (cb) {
        cb(false);
      }
      return;
    }

    _MediasiteApi2.default.login(userId, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token;
        localStorage.userId = userId;
        if (cb) {
          cb(true);
        }
        _this.onChange(true);
      } else {
        if (cb) {
          cb(false);
        }
        _this.onChange(false);
      }
    });
  },
  getToken: function getToken() {
    return localStorage.token;
  },
  logout: function logout(cb) {
    delete localStorage.token;
    delete localStorage.userId;
    this.onChange(false);
    if (cb) {
      cb(false);
    }
  },
  loggedIn: function loggedIn() {
    return !!this.getToken();
  },
  onChange: function onChange() {}
};

/***/ },
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaterializeSelect = function MaterializeSelect(_ref) {
  var options = _ref.options;
  var label = _ref.label;
  var selectValue = _ref.selectValue;
  var handleOnSelect = _ref.handleOnSelect;

  // Put an empty option on
  options.unshift(_react2.default.createElement('option', { key: 'empty', value: '' }));

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement(
      'select',
      { className: 'browser-default', defaultValue: selectValue, onChange: handleOnSelect },
      options
    )
  );
};

exports.default = MaterializeSelect;

/***/ },
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(253),
    mapCacheDelete = __webpack_require__(254),
    mapCacheGet = __webpack_require__(255),
    mapCacheHas = __webpack_require__(256),
    mapCacheSet = __webpack_require__(257);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(126),
    isLength = __webpack_require__(70);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ },
/* 70 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(37);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

module.exports = isSymbol;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(208),
    baseKeys = __webpack_require__(221),
    isArrayLike = __webpack_require__(69);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ },
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valueOrEmptyString = function valueOrEmptyString(value) {
  return value ? value : '';
};

var SongData = function SongData(_ref) {
  var songData = _ref.songData;

  if (!songData) {
    return _react2.default.createElement(
      'div',
      { className: 'card' },
      'Loading...'
    );
  }
  var ccliSection = songData.ccli ? _react2.default.createElement(
    'p',
    null,
    'CCLI: ',
    _react2.default.createElement(
      'a',
      { target: '_blank', href: 'http://ca.search.ccli.com/songs/' + songData.ccli },
      songData.ccli
    )
  ) : '';
  var copyrightSection = songData.copyDate ? _react2.default.createElement(
    'p',
    null,
    'Copyright: ',
    songData.copyDate
  ) : '';
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'card-title' },
      songData.title,
      ' ',
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/song/' + songData.songId + '/edit' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons prefix' },
          'mode edit'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      songData.author1,
      songData.author2 ? ' & ' + songData.author2 : ''
    ),
    _react2.default.createElement(
      'p',
      null,
      'Key: ',
      valueOrEmptyString(songData.songKey)
    ),
    _react2.default.createElement(
      'p',
      null,
      'Style: ',
      valueOrEmptyString(songData.style)
    ),
    _react2.default.createElement(
      'p',
      null,
      'Notes: ',
      valueOrEmptyString(songData.notes)
    ),
    ccliSection,
    copyrightSection
  );
};

exports.default = SongData;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongField = function SongField(_ref) {
  var fieldValue = _ref.fieldValue;
  var handleOnChange = _ref.handleOnChange;
  var fieldId = _ref.fieldId;
  var labelText = _ref.labelText;

  return _react2.default.createElement(
    "div",
    { className: "input-field col s12" },
    _react2.default.createElement("input", { id: fieldId, type: "text", className: "validate", value: fieldValue, onChange: handleOnChange }),
    _react2.default.createElement(
      "label",
      { htmlFor: fieldId },
      labelText
    )
  );
};

exports.default = SongField;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SongPartCreator = function (_React$Component) {
  _inherits(SongPartCreator, _React$Component);

  function SongPartCreator() {
    _classCallCheck(this, SongPartCreator);

    return _possibleConstructorReturn(this, (SongPartCreator.__proto__ || Object.getPrototypeOf(SongPartCreator)).apply(this, arguments));
  }

  _createClass(SongPartCreator, [{
    key: 'gatherSongData',
    value: function gatherSongData() {
      var songParts = [];
      for (var i = 1; i <= 8; i++) {
        var partName = this['part' + i + 'name'].value;
        var partData = this['part' + i + 'data'].value;
        if (!partData) break;
        songParts.push({
          partName: partName,
          partData: (0, _helpers.songParagraphToJson)(partData)
        });
      }

      return songParts.filter(function (part) {
        return part.partName !== '';
      });
    }
  }, {
    key: 'hydrateSongData',
    value: function hydrateSongData() {
      for (var i = 1; i <= this.props.songParts.length; i++) {
        var currentPart = this.props.songParts[i - 1];

        this['part' + i + 'name'].value = currentPart.partName;
        this['part' + i + 'data'].value = currentPart.partData.reduce(function (prevString, currentPart, index) {
          var partData = void 0;
          if (currentPart.lyric !== null) {
            partData = currentPart.lyric;
          } else {
            partData = (0, _helpers.decodeNoteLine)(currentPart.note);
          }
          return prevString + partData + '\n';
        }, '').replace(/\s+$/g, '');
      }
    }
  }, {
    key: 'renderSongParts',
    value: function renderSongParts() {
      var _this2 = this;

      var songParts = [];

      var _loop = function _loop(i) {
        songParts.push(_react2.default.createElement(
          'div',
          { className: 'row', key: 'songPart' + i },
          _react2.default.createElement(
            'div',
            { className: 'input-field col m2 s12' },
            _react2.default.createElement('input', { id: 'part' + i + 'name', type: 'text', className: 'validate', ref: function ref(input) {
                return _this2['part' + i + 'name'] = input;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'part' + i + 'name' },
              'Part #' + i + ' name'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-field col m10 s12' },
            _react2.default.createElement('textarea', { id: 'part' + i + 'data', className: 'materialize-textarea', style: { fontFamily: ["Courier New", "Courier", "mono"] }, ref: function ref(input) {
                return _this2['part' + i + 'data'] = input;
              } }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'part' + i + 'data' },
              'Part #' + i + ':'
            )
          )
        ));
      };

      for (var i = 1; i <= 8; i++) {
        _loop(i);
      }
      return songParts;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.hydrateSongData();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderSongParts()
      );
    }
  }]);

  return SongPartCreator;
}(_react2.default.Component);

exports.default = SongPartCreator;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceAt = exports.replaceAll = exports.trimRight = exports.Song = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ES2015 version of MediaCodec2.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Transposer = __webpack_require__(167);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function () {
  function Song(id, title, songKey, songJson) {
    _classCallCheck(this, Song);

    this.id = id;
    this.title = title;
    this.songKey = songKey;
    this.songJson = songJson;
  }

  _createClass(Song, [{
    key: 'toHtml',
    value: function toHtml(transposeKey) {
      var _this = this;

      // TODO: This doesn't smell right, probably need to go with dependency injection at some point
      var transposer = this.createTransposer(transposeKey);

      var songHtml = '<div id=\'songInsert\' class=\'SongNotes\'>';

      songHtml += this.songJson.parts.reduce(function (previousHtml, songPart) {
        var partHtml = songPart.partData.reduce(function (previousPartHtml, songDatum) {
          var partLineHtml = void 0;
          if (songDatum.lyric !== null) {
            partLineHtml = '\n            <span class="lyricLine">' + replaceAll(' ', '&nbsp;', songDatum.lyric) + '</span>\n          ';
          } else {
            var line = _this.generateNoteLine(songDatum.note, transposer); // TODO: songDatum.note should be notes someday
            partLineHtml = '<span class=\'SongNoteLine\'>' + line + '</span>';
          }
          return previousPartHtml + '<br />' + partLineHtml;
        }, '');

        return previousHtml + ('\n        <div id="' + songPart.partName + '" class="songPart">\n          <div class="SongPartTitle">' + songPart.partName + '</div>\n          ' + partHtml + '\n        </div>\n        <br />\n      ');
      }, "");

      // Put everything together and close down.
      songHtml += "</div>";

      return songHtml;
    }
  }, {
    key: 'generateNoteLine',
    value: function generateNoteLine(notes, transposer) {
      var line = Array(150).join(" ");
      notes.forEach(function (note) {
        var position = parseInt(note.position);
        line = replaceAt(line, position, transposer.transposeNote(note.note));
      });
      line = trimRight(line); // Trim whitespace from the end of the line
      line = replaceAll(' ', '&nbsp;', line);

      return line;
    }
  }, {
    key: 'createTransposer',
    value: function createTransposer(transposeKey) {
      if (transposeKey === undefined) {
        transposeKey = this.songKey;
      }
      return new _Transposer.Transposer(this.songKey, transposeKey);
    }
  }]);

  return Song;
}();

// Some helpful functions.


function trimRight(str) {
  return str.replace(/\s*$/, "");
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function replaceAt(str, index, character) {
  return str.substr(0, index) + character + str.substr(index + character.length);
}

exports.Song = Song;
exports.trimRight = trimRight;
exports.replaceAll = replaceAll;
exports.replaceAt = replaceAt;

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(44),
    stackClear = __webpack_require__(266),
    stackDelete = __webpack_require__(267),
    stackGet = __webpack_require__(268),
    stackHas = __webpack_require__(269),
    stackSet = __webpack_require__(270);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ },
/* 113 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(116),
    isKey = __webpack_require__(47),
    toKey = __webpack_require__(49);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(216),
    isObject = __webpack_require__(50),
    isObjectLike = __webpack_require__(37);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

module.exports = baseIsEqual;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(20),
    stringToPath = __webpack_require__(271);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

module.exports = castPath;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(205),
    arraySome = __webpack_require__(209),
    cacheHas = __webpack_require__(230);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(387)))

/***/ },
/* 119 */
/***/ function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ },
/* 121 */
/***/ function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ },
/* 122 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ },
/* 123 */
/***/ function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(215),
    isObjectLike = __webpack_require__(37);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(18),
    stubFalse = __webpack_require__(278);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159)(module)))

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50);

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(219),
    baseUnary = __webpack_require__(229),
    nodeUtil = __webpack_require__(261);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ },
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done();
  };
  js.onerror = function () {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}

function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}

exports.loadScript = loadScript;
exports.browserSupportsAllFeatures = browserSupportsAllFeatures;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SongSheet = exports.Welcome = exports.MediasiteHeader = exports.FilterableSongTable = exports.Song = exports.Logout = exports.Login = exports.NewSong = exports.EditSong = undefined;

var _EditSong = __webpack_require__(169);

var _EditSong2 = _interopRequireDefault(_EditSong);

var _NewSong = __webpack_require__(172);

var _NewSong2 = _interopRequireDefault(_NewSong);

var _Login = __webpack_require__(170);

var _Login2 = _interopRequireDefault(_Login);

var _Logout = __webpack_require__(171);

var _Logout2 = _interopRequireDefault(_Logout);

var _Song = __webpack_require__(173);

var _Song2 = _interopRequireDefault(_Song);

var _SongTable = __webpack_require__(175);

var _SongTable2 = _interopRequireDefault(_SongTable);

var _header = __webpack_require__(177);

var _header2 = _interopRequireDefault(_header);

var _Welcome = __webpack_require__(176);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _SongSheet = __webpack_require__(174);

var _SongSheet2 = _interopRequireDefault(_SongSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EditSong = _EditSong2.default;
exports.NewSong = _NewSong2.default;
exports.Login = _Login2.default;
exports.Logout = _Logout2.default;
exports.Song = _Song2.default;
exports.FilterableSongTable = _SongTable2.default;
exports.MediasiteHeader = _header2.default;
exports.Welcome = _Welcome2.default;
exports.SongSheet = _SongSheet2.default;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      _this.props.onUserInput(_this.searchTextInput.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof Materialize.updateTextFields === 'function') {
        Materialize.updateTextFields();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'input-field col s12' },
          _react2.default.createElement(
            'i',
            { className: 'material-icons prefix' },
            'search'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            ref: function ref(input) {
              return _this2.searchTextInput = input;
            },
            value: this.props.searchText,
            onChange: this.handleChange,
            id: 'search'
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'search' },
            'Search'
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _Select = __webpack_require__(62);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var TEXT_SIZES = [16, 18, 20, 24]; // unused for now 10, 11, 12, 13, 14, 15,

var SongSheetConfigurator = function (_React$Component) {
  _inherits(SongSheetConfigurator, _React$Component);

  function SongSheetConfigurator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SongSheetConfigurator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SongSheetConfigurator.__proto__ || Object.getPrototypeOf(SongSheetConfigurator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      songKey: '',
      textSize: 16
    }, _this.handleGenerateSheet = function (event) {
      event.preventDefault();
      _reactRouter.browserHistory.push(_this.calculateSongUrl());
    }, _this.handleGeneratePreview = function (event) {
      event.preventDefault();
      _reactRouter.browserHistory.push(_this.calculatePreviewUrl());
    }, _this.updateChosenSongKey = function (event) {
      var newKey = event.target.value;
      _this.setState({ songKey: newKey });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SongSheetConfigurator, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        songKey: this.props.songKey
      });
    }
  }, {
    key: 'calculateSongUrl',
    value: function calculateSongUrl() {
      return '/song/' + this.props.songId + '/print?songKey=' + this.state.songKey + '&textSize=' + this.state.textSize + '&printArrangements=' + this.arrangement.checked + '&printChords=' + this.chords.checked + '&printPartNames=' + this.partNames.checked;
    }
  }, {
    key: 'calculatePreviewUrl',
    value: function calculatePreviewUrl() {
      return this.calculateSongUrl() + '&preview=true';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var keyOptions = MUSICAL_KEYS.map(function (key) {
        return _react2.default.createElement(
          'option',
          { key: key, value: key },
          key
        );
      });
      var textSizeOptions = TEXT_SIZES.map(function (size) {
        return _react2.default.createElement(
          'option',
          { key: size, value: size },
          size
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          _react2.default.createElement(
            'div',
            { className: 'card-title' },
            'Print Song Sheet:'
          ),
          _react2.default.createElement(_Select2.default, {
            selectValue: this.state.songKey,
            options: keyOptions,
            label: 'Song Key',
            handleOnSelect: this.updateChosenSongKey
          }),
          _react2.default.createElement(_Select2.default, {
            selectValue: this.state.textSize,
            options: textSizeOptions,
            label: 'Text Size'
          }),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { ref: function ref(input) {
                return _this2.arrangement = input;
              }, defaultChecked: true, type: 'checkbox', id: 'arrangement' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'arrangement' },
              'Print Arrangement'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { ref: function ref(input) {
                return _this2.chords = input;
              }, type: 'checkbox', defaultChecked: true, id: 'chords' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'chords' },
              'Print Chords'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { ref: function ref(input) {
                return _this2.partNames = input;
              }, type: 'checkbox', defaultChecked: true, id: 'partnames' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'partnames' },
              'Print Part Names'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-action' },
          _react2.default.createElement(
            'a',
            { onClick: this.handleGenerateSheet, href: '#' },
            'Generate Sheet'
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.handleGeneratePreview, href: '#' },
            'Generate Preview'
          )
        )
      );
    }
  }]);

  return SongSheetConfigurator;
}(_react2.default.Component);

exports.default = SongSheetConfigurator;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SongTile = function (_React$Component) {
  _inherits(SongTile, _React$Component);

  function SongTile() {
    _classCallCheck(this, SongTile);

    return _possibleConstructorReturn(this, (SongTile.__proto__ || Object.getPrototypeOf(SongTile)).apply(this, arguments));
  }

  _createClass(SongTile, [{
    key: 'render',
    value: function render() {
      var songUrl = "/song/" + this.props.songId;
      return _react2.default.createElement(
        'div',
        { className: 'col l4 m6 s12' },
        _react2.default.createElement(
          'div',
          { className: 'card small' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'h5',
              null,
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.author1
            ),
            _react2.default.createElement(
              'p',
              null,
              this.props.author2
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-action' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: songUrl },
              'View'
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: songUrl + '/edit' },
              'Edit'
            )
          )
        )
      );
    }
  }]);

  return SongTile;
}(_react2.default.Component);

exports.default = SongTile;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _map = __webpack_require__(275);

var _map2 = _interopRequireDefault(_map);

var _SongTile = __webpack_require__(164);

var _SongTile2 = _interopRequireDefault(_SongTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SongTileGroup = function (_React$Component) {
  _inherits(SongTileGroup, _React$Component);

  function SongTileGroup() {
    _classCallCheck(this, SongTileGroup);

    return _possibleConstructorReturn(this, (SongTileGroup.__proto__ || Object.getPrototypeOf(SongTileGroup)).apply(this, arguments));
  }

  _createClass(SongTileGroup, [{
    key: 'render',
    value: function render() {
      var searchText = this.props.searchText;
      var songs = (0, _map2.default)(this.props.songs, function (song) {
        if (searchText !== "" && song.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
          return;
        }
        return _react2.default.createElement(_SongTile2.default, { key: song.songId,
          songId: song.songId,
          title: song.title,
          author1: song.author1,
          author2: song.author2 });
      });

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        songs.length > 0 ? songs : _react2.default.createElement(
          'div',
          { className: 'col sm12' },
          _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              'No songs matched your search!'
            )
          )
        )
      );
    }
  }]);

  return SongTileGroup;
}(_react2.default.Component);

exports.default = SongTileGroup;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTube = function YouTube(_ref) {
  var youTubeLink = _ref.youTubeLink;

  var youTubeId = void 0;
  if (youTubeLink.substr(0, 4) === 'http') {
    var parser = document.createElement('a');
    parser.href = youTubeLink;
    var queryParams = parser.search.substr(1); // Strip initial '?'
    // Youtu.be links do not work, need to fix.
    youTubeId = queryParams.split('&').filter(function (pair) {
      return pair.substr(0, 1) === 'v';
    })[0].split('=')[1];
  } else {
    youTubeId = youTubeLink;
  }

  var youtubeEmbedLink = 'https://www.youtube.com/embed/' + youTubeId;
  return _react2.default.createElement(
    'div',
    { className: 'card' },
    _react2.default.createElement(
      'div',
      { className: 'card-content' },
      _react2.default.createElement(
        'div',
        { className: 'card-title' },
        'YouTube'
      ),
      _react2.default.createElement('iframe', { className: 'youtube-video', src: youtubeEmbedLink, frameBorder: '0' })
    )
  );
};

exports.default = YouTube;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transposer = function () {
  function Transposer(songKey, transposeKey) {
    _classCallCheck(this, Transposer);

    this.songKey = songKey;
    this.transposeKey = transposeKey;
    this.noteShiftVal = null;
  }

  _createClass(Transposer, [{
    key: 'needsTransposition',
    value: function needsTransposition() {
      return this.songKey !== this.transposeKey;
    }
  }, {
    key: 'transposeNote',
    value: function transposeNote(note) {
      if (!this.needsTransposition()) {
        // No-op as it doesn't need to be transposed, it's in the proper key already.
        return note;
      }

      if (note.indexOf('/') >= 0) {
        // Complex note case like Csus4/F
        return note.split('/').map(this.transposeNote.bind(this)).join('/');
      }

      var intonation = void 0,
          isNoteFound = void 0,
          noteIndex = void 0;

      noteIndex = Transposer.flatKeys.indexOf(note);
      if (noteIndex >= 0) {
        intonation = 'flats';
        isNoteFound = true;
      } else {
        noteIndex = Transposer.sharpKeys.indexOf(note);
        if (noteIndex >= 0) {
          intonation = 'sharps';
          isNoteFound = true;
        }
      }

      if (isNoteFound === true) {
        var newNoteIndex = Transposer.shiftNote(noteIndex, this.getNoteShiftVal());
        if (intonation === 'flats') {
          return Transposer.flatKeys[newNoteIndex];
        } else if (intonation === 'sharps') {
          return Transposer.sharpKeys[newNoteIndex];
        }
      }

      if ('ABCDEFG'.indexOf(note.substring(0, 1)) >= 0) {
        if ('#b'.indexOf(note.substring(1, 2)) >= 0) {
          return this.transposeNote(note.substring(0, 2)) + note.substring(2);
        } else {
          return this.transposeNote(note.substring(0, 1)) + note.substring(1);
        }
      }
    }
  }, {
    key: 'getNoteShiftVal',
    value: function getNoteShiftVal() {
      if (this.noteShiftVal) {
        return this.noteShiftVal;
      }
      if (!this.needsTransposition()) {
        return 0;
      }

      this.noteShiftVal = Transposer.getNoteIndex(this.transposeKey) - Transposer.getNoteIndex(this.songKey);
      return this.noteShiftVal;
    }
  }], [{
    key: 'getNoteIndex',
    value: function getNoteIndex(strNote) {
      var sharpIndex = Transposer.sharpKeys.indexOf(strNote);
      var flatIndex = Transposer.flatKeys.indexOf(strNote);

      return sharpIndex === -1 ? flatIndex : sharpIndex;
    }
  }, {
    key: 'shiftNote',
    value: function shiftNote(noteIndex, shiftBy) {
      if (noteIndex + shiftBy < 0) {
        return noteIndex + shiftBy + 12;
      } else if (noteIndex + shiftBy < 12) {
        return noteIndex + shiftBy;
      } else {
        return noteIndex + shiftBy - 12;
      }
    }
  }]);

  return Transposer;
}();

Transposer.sharpKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
Transposer.flatKeys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
exports.Transposer = Transposer;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songParagraphToJson = exports.isNoteLine = exports.songTextToJson = exports.decodeNoteLine = undefined;

var _Song = __webpack_require__(101);

// Generates a note line without transcribing. Helpful for display.
function decodeNoteLine(notes) {
  var line = Array(150).join(" ");
  notes.forEach(function (note) {
    var position = parseInt(note.position);
    line = (0, _Song.replaceAt)(line, position, note.note);
  });
  line = (0, _Song.trimRight)(line); // Trim whitespace from the end of the line
  line = (0, _Song.replaceAll)('&nbsp;', ' ', line);

  return line;
}

function isNoteLine(line) {
  var legalChars = 'ABCDEFGabcdefgimjM2345679#SUsu/^|(): no';
  for (var i = 0; i < line.length; i++) {
    if (legalChars.indexOf(line[i]) === -1) {
      return false;
    }
  }
  return true;
}

function songParagraphToJson(partData) {
  if (!partData) {
    return [];
  }

  return partData.split('\n').reduce(function (prev, curr) {
    var lyric = null;
    var note = null;

    if (isNoteLine(curr)) {
      note = songTextToJson(curr);
    } else {
      lyric = curr;
    }
    prev.push({ lyric: lyric, note: note });
    return prev;
  }, []);
}

function songTextToJson(songText) {
  var notes = [];
  if (!songText) return notes;

  var currentNote = '';
  var foundIndex = 0;

  for (var i = 0; i <= songText.length; i++) {
    var currentChar = songText[i];

    if (currentChar && currentChar !== ' ') {

      if (currentNote === '') {
        foundIndex = i;
      }
      currentNote += currentChar;
    } else {
      if (currentNote !== '') {
        notes.push({ note: currentNote, position: foundIndex });
        currentNote = '';
      }
    }
  }
  return notes;
}

exports.decodeNoteLine = decodeNoteLine;
exports.songTextToJson = songTextToJson;
exports.isNoteLine = isNoteLine;
exports.songParagraphToJson = songParagraphToJson;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

__webpack_require__(30);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

var _Select = __webpack_require__(62);

var _Select2 = _interopRequireDefault(_Select);

var _SongPartCreator = __webpack_require__(100);

var _SongPartCreator2 = _interopRequireDefault(_SongPartCreator);

var _SongField = __webpack_require__(99);

var _SongField2 = _interopRequireDefault(_SongField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

var EditSong = function (_React$Component) {
  _inherits(EditSong, _React$Component);

  function EditSong() {
    var _ref, _this$state;

    var _temp, _this, _ret;

    _classCallCheck(this, EditSong);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditSong.__proto__ || Object.getPrototypeOf(EditSong)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = {
      isLoading: true,
      songKey: 'C',
      title: '',
      author1: '',
      author2: '',
      ccli: '',
      copyDate: '',
      youtubeLink: '',
      publisher: '',
      songOrder: '',
      externalUrl: ''
    }, _defineProperty(_this$state, 'songKey', ''), _defineProperty(_this$state, 'notes', ''), _defineProperty(_this$state, 'style', ''), _defineProperty(_this$state, 'songPartData', []), _this$state), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditSong, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.params.songId) {
        _MediasiteApi2.default.getSongById(this.props.params.songId, function (response) {
          var songData = response.data;
          _this2.setState({
            songKey: songData.songKey,
            title: songData.title,
            author1: songData.author1,
            author2: songData.author2 || '',
            ccli: songData.ccli || '',
            copyDate: songData.copyDate || '',
            youtubeLink: songData.youtubeLink || '',
            publisher: songData.publisher || '',
            songOrder: songData.songOrder || '',
            externalUrl: songData.externalUrl || '',
            songPartData: songData.songData || {},
            notes: songData.notes || '',
            style: songData.style || '',
            isLoading: false
          });
          if (typeof Materialize.updateTextFields === 'function') {
            setTimeout(Materialize.updateTextFields, 300);
          }
        });
      }
    }
  }, {
    key: 'gatherSongData',
    value: function gatherSongData() {
      var parts = this.songPartData.gatherSongData();
      return { parts: parts };
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var songObj = {
        title: this.state.title,
        author1: this.state.author1,
        author2: this.state.author2,
        ccli: this.state.ccli,
        copyDate: this.state.copyDate,
        youtubeLink: this.state.youtubeLink,
        publisher: this.state.publisher,
        songOrder: this.state.songOrder,
        externalUrl: this.state.externalUrl,
        songKey: this.state.songKey,
        notes: this.state.notes,
        style: this.state.style,
        songData: this.gatherSongData()
      };
      songObj.songId = this.props.params.songId;
      _MediasiteApi2.default.updateSong(songObj, function (response) {
        _reactRouter.browserHistory.push('/song/' + response.data.songId);
      });
    }
  }, {
    key: 'handleFormChange',
    value: function handleFormChange(event, stateKey) {
      var currentState = this.state;
      currentState[stateKey] = event.target.value;
      this.setState(currentState);
    }
  }, {
    key: 'updateChosenSongKey',
    value: function updateChosenSongKey(event) {
      var newKey = event.target.value;
      this.setState({ songKey: newKey });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.isLoading) {
        return _react2.default.createElement(
          'div',
          { className: 'progress' },
          _react2.default.createElement('div', { className: 'indeterminate' })
        );
      }
      var keyOptions = MUSICAL_KEYS.map(function (key) {
        return _react2.default.createElement(
          'option',
          { key: key, value: key },
          key
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              { className: 'card-title' },
              this.state.title === '' ? 'New Song' : this.state.title
            ),
            _react2.default.createElement(
              'form',
              { className: 'col s12', onSubmit: this.handleFormSubmit.bind(this) },
              _react2.default.createElement(_SongField2.default, { fieldId: 'title', fieldValue: this.state.title, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'title');
                }, labelText: 'Title' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'author1', fieldValue: this.state.author1, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'author1');
                }, labelText: 'Author #1' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'author2', fieldValue: this.state.author2, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'author2');
                }, labelText: 'Author #2' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'style', fieldValue: this.state.style, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'style');
                }, labelText: 'Style' }),
              _react2.default.createElement(_Select2.default, {
                selectValue: this.state.songKey,
                options: keyOptions,
                label: 'Song Key',
                handleOnSelect: function handleOnSelect(event) {
                  return function (event) {
                    return _this3.handleFormChange(event, 'songKey');
                  };
                }
              }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'ccli', fieldValue: this.state.ccli, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'ccli');
                }, labelText: 'CCLI #' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'copyDate', fieldValue: this.state.copyDate, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'copyDate');
                }, labelText: 'Copyright Date' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'youtubeLink', fieldValue: this.state.youtubeLink, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'youtubeLink');
                }, labelText: 'YouTube Link' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'publisher', fieldValue: this.state.publisher, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'publisher');
                }, labelText: 'Publisher' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'songOrder', fieldValue: this.state.songOrder, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'songOrder');
                }, labelText: 'Song Order/Arrangement' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'externalUrl', fieldValue: this.state.externalUrl, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'externalUrl');
                }, labelText: 'External URL' }),
              _react2.default.createElement(_SongField2.default, { fieldId: 'notes', fieldValue: this.state.notes, handleOnChange: function handleOnChange(event) {
                  return _this3.handleFormChange(event, 'notes');
                }, labelText: 'Notes' }),
              _react2.default.createElement('input', { className: 'btn', type: 'submit' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              { className: 'card-title' },
              'Song Information'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleFormSubmit.bind(this) },
              _react2.default.createElement(_SongPartCreator2.default, { songParts: this.state.songPartData.parts || [], ref: function ref(input) {
                  return _this3.songPartData = input;
                } }),
              _react2.default.createElement('input', { className: 'btn', type: 'submit' })
            )
          )
        )
      );
    }
  }]);

  return EditSong;
}(_react2.default.Component);

exports.default = EditSong;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _auth = __webpack_require__(60);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var query = this.props.location.query;

      this.loginByUserId(query.userId);
    }
  }, {
    key: 'loginByUserId',
    value: function loginByUserId(userId) {
      var _this2 = this;

      _auth2.default.login(userId, function (loggedIn) {
        if (!loggedIn) {
          return;
        }
        var location = _this2.props.location;


        if (location.query.nextUrl || location.query.nextPathName) {
          _this2.props.router.replace(location.query.nextUrl || location.query.nextPathName);
        } else {
          _this2.props.router.replace('/welcome');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var location = this.props.location;

      var loginDisabled = !!location.query.success || _auth2.default.loggedIn();
      var nextUrl = location.query ? location.query.nextPathName ? location.query.nextPathName : '' : '';
      return _react2.default.createElement(
        'div',
        { className: 'card login' },
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          _react2.default.createElement(
            'h2',
            null,
            'Welcome to Circle\'s Mediasite!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'This is the place that folks come when they need media.'
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-large waves-effect btn-primary' + (loginDisabled ? ' disabled' : ''),
              href: '/api/v1/cityoauth/login/' + (nextUrl ? '?nextUrl=' + nextUrl : '') },
            !loginDisabled ? 'Login with The City!' : 'Logging in...'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(Login);

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _auth = __webpack_require__(60);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logout = function (_React$Component) {
  _inherits(Logout, _React$Component);

  function Logout() {
    _classCallCheck(this, Logout);

    return _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).apply(this, arguments));
  }

  _createClass(Logout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _auth2.default.logout(function () {
        _reactRouter.browserHistory.push('/');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        'You are now logged out'
      );
    }
  }]);

  return Logout;
}(_react2.default.Component);

exports.default = Logout;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

__webpack_require__(30);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

var _Select = __webpack_require__(62);

var _Select2 = _interopRequireDefault(_Select);

var _SongPartCreator = __webpack_require__(100);

var _SongPartCreator2 = _interopRequireDefault(_SongPartCreator);

var _SongField = __webpack_require__(99);

var _SongField2 = _interopRequireDefault(_SongField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUSICAL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 24];

var EditSong = function (_React$Component) {
  _inherits(EditSong, _React$Component);

  function EditSong() {
    var _ref, _this$state;

    var _temp, _this, _ret;

    _classCallCheck(this, EditSong);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditSong.__proto__ || Object.getPrototypeOf(EditSong)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = {
      isLoading: true,
      songKey: 'C',
      title: '',
      author1: '',
      author2: '',
      ccli: '',
      copyDate: '',
      youtubeLink: '',
      publisher: '',
      songOrder: '',
      externalUrl: '',
      notes: ''
    }, _defineProperty(_this$state, 'songKey', ''), _defineProperty(_this$state, 'songPartData', []), _this$state), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditSong, [{
    key: 'gatherSongData',
    value: function gatherSongData() {
      var parts = this.songPartData.gatherSongData();
      return { parts: parts };
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var songObj = {
        title: this.state.title,
        author1: this.state.author1,
        author2: this.state.author2,
        ccli: this.state.ccli,
        copyDate: this.state.copyDate,
        youtubeLink: this.state.youtubeLink,
        publisher: this.state.publisher,
        songOrder: this.state.songOrder,
        externalUrl: this.state.externalUrl,
        songKey: this.state.songKey,
        notes: this.state.notes,
        songData: this.gatherSongData()
      };
      _MediasiteApi2.default.createSong(songObj, function (response) {
        _reactRouter.browserHistory.push('/song/' + response.data.songId);
      });
    }
  }, {
    key: 'handleFormChange',
    value: function handleFormChange(event, stateKey) {
      var currentState = this.state;
      currentState[stateKey] = event.target.value;
      this.setState(currentState);
    }
  }, {
    key: 'updateChosenSongKey',
    value: function updateChosenSongKey(event) {
      var newKey = event.target.value;
      this.setState({ songKey: newKey });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var keyOptions = MUSICAL_KEYS.map(function (key) {
        return _react2.default.createElement(
          'option',
          { key: key, value: key },
          key
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              { className: 'card-title' },
              this.state.title === '' ? 'New Song' : this.state.title
            ),
            _react2.default.createElement(
              'form',
              { className: 'col s12', onSubmit: this.handleFormSubmit.bind(this) },
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'title', type: 'text', className: 'validate', value: this.state.title, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'title');
                  }, required: true }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'title' },
                  'Title'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'author1', type: 'text', className: 'validate', value: this.state.author1, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'author1');
                  }, required: true }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'author1' },
                  'Author #1'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'author2', type: 'text', className: 'validate', value: this.state.author2, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'author2');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'author2' },
                  'Author #2'
                )
              ),
              _react2.default.createElement(_Select2.default, {
                selectValue: this.state.songKey,
                options: keyOptions,
                label: 'Song Key',
                handleOnSelect: function handleOnSelect(event) {
                  return _this2.handleFormChange(event, 'songKey');
                }
              }),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'ccli', type: 'text', className: 'validate', value: this.state.ccli, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'ccli');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'ccli' },
                  'CCLI #'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'copyDate', type: 'text', className: 'validate', value: this.state.copyDate, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'copyDate');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'copyDate' },
                  'Copyright Date'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'youtubeLink', type: 'text', className: 'validate', value: this.state.youtubeLink, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'youtubeLink');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'youtubeLink' },
                  'YouTube Link'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'publisher', type: 'text', className: 'validate', value: this.state.publisher, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'publisher');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'publisher' },
                  'Publisher'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'songOrder', type: 'text', className: 'validate', value: this.state.songOrder, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'songOrder');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'arrangement' },
                  'Song Order/Arrangement'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-field col s12' },
                _react2.default.createElement('input', { id: 'externalUrl', type: 'text', className: 'validate', value: this.state.externalUrl, onChange: function onChange(event) {
                    return _this2.handleFormChange(event, 'externalUrl');
                  } }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'externalUrl' },
                  'External URL'
                )
              ),
              _react2.default.createElement(_SongField2.default, { fieldId: 'notes', fieldValue: this.state.notes, handleOnChange: function handleOnChange(event) {
                  return _this2.handleFormChange(event, 'notes');
                }, labelText: 'Notes' }),
              _react2.default.createElement('input', { className: 'btn', type: 'submit' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'div',
              { className: 'card-title' },
              'Song Information'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.handleFormSubmit.bind(this) },
              _react2.default.createElement(_SongPartCreator2.default, { songParts: this.state.songPartData.parts || [], ref: function ref(input) {
                  return _this2.songPartData = input;
                } }),
              _react2.default.createElement('input', { className: 'btn', type: 'submit' })
            )
          )
        )
      );
    }
  }]);

  return EditSong;
}(_react2.default.Component);

exports.default = EditSong;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SongSheetConfigurator = __webpack_require__(163);

var _SongSheetConfigurator2 = _interopRequireDefault(_SongSheetConfigurator);

var _YouTube = __webpack_require__(166);

var _YouTube2 = _interopRequireDefault(_YouTube);

var _SongData = __webpack_require__(98);

var _SongData2 = _interopRequireDefault(_SongData);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Song = function (_React$Component) {
  _inherits(Song, _React$Component);

  function Song() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Song);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Song.__proto__ || Object.getPrototypeOf(Song)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      songData: null,
      isLoading: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Song, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _MediasiteApi2.default.getSongById(this.props.params.songId, function (songData) {
        _this2.setState({
          songData: songData.data,
          isLoading: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoading) {
        return _react2.default.createElement(
          'div',
          { className: 'progress' },
          _react2.default.createElement('div', { className: 'indeterminate' })
        );
      }
      var youtubeArea = void 0;
      if (this.state.songData.youtubeLink) {
        youtubeArea = _react2.default.createElement(_YouTube2.default, { youTubeLink: this.state.songData.youtubeLink });
      } else {
        youtubeArea = _react2.default.createElement(
          'div',
          null,
          'This song doesn\'t have a YouTube link yet.'
        );
      }
      var songConfiguratorArea = void 0;
      if (this.state.songData.songData.parts) {
        songConfiguratorArea = _react2.default.createElement(_SongSheetConfigurator2.default, { songKey: this.state.songData.songKey, songId: this.props.params.songId });
      } else {
        songConfiguratorArea = _react2.default.createElement(
          'div',
          null,
          'This song doesn\'t have a chart attached yet.'
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'card' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(_SongData2.default, { songData: this.state.songData })
          )
        ),
        songConfiguratorArea,
        youtubeArea
      );
    }
  }]);

  return Song;
}(_react2.default.Component);

exports.default = Song;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

var _Song = __webpack_require__(101);

var _SongData = __webpack_require__(98);

var _SongData2 = _interopRequireDefault(_SongData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SongSheet = function (_React$Component) {
  _inherits(SongSheet, _React$Component);

  function SongSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SongSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SongSheet.__proto__ || Object.getPrototypeOf(SongSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: true,
      songData: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SongSheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _MediasiteApi2.default.getSongById(this.props.params.songId, function (songData) {
        _this2.setState({
          songData: songData.data,
          isLoading: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoading) {
        return _react2.default.createElement(
          'div',
          { className: 'progress' },
          _react2.default.createElement('div', { className: 'indeterminate' })
        );
      }

      var songData = this.state.songData;
      var _props$location$query = this.props.location.query;
      var songKey = _props$location$query.songKey;
      var textSize = _props$location$query.textSize;
      var printArrangements = _props$location$query.printArrangements;
      var printChords = _props$location$query.printChords;
      var printPartNames = _props$location$query.printPartNames;

      var songId = this.props.params.songId;

      var song = new _Song.Song(songId, songData.title, songData.songKey, songData.songData);

      var ccliSection = songData.ccli ? _react2.default.createElement(
        'p',
        null,
        'CCLI: ',
        _react2.default.createElement(
          'a',
          { target: '_blank', href: 'http://ca.search.ccli.com/songs/' + songData.CCLI },
          songData.ccli
        )
      ) : '';
      var copyrightSection = songData.copyDate ? _react2.default.createElement(
        'p',
        null,
        'Copyright: ',
        songData.copyDate
      ) : '';

      var arrangementSection = printArrangements === 'true' ? _react2.default.createElement(
        'div',
        { className: 'ArrangementTitle' },
        'Arrangement: ',
        songData.songOrder
      ) : '';

      return _react2.default.createElement(
        'div',
        { style: { backgroundColor: 'white', padding: '10px' } },
        _react2.default.createElement(
          'div',
          { className: 'song-data' },
          _react2.default.createElement(
            'div',
            { className: 'card-title' },
            songData.title
          ),
          _react2.default.createElement(
            'p',
            null,
            songData.author1,
            songData.author2 ? ' & ' + songData.author2 : ''
          ),
          _react2.default.createElement(
            'p',
            null,
            'Key: ',
            valueOrEmptyString(songData.songKey)
          ),
          _react2.default.createElement(
            'p',
            null,
            'Style: ',
            valueOrEmptyString(songData.style)
          ),
          _react2.default.createElement(
            'p',
            null,
            'Notes: ',
            valueOrEmptyString(songData.notes)
          ),
          ccliSection,
          copyrightSection
        ),
        arrangementSection,
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: song.toHtml(songKey) } })
      );
    }
  }]);

  return SongSheet;
}(_react2.default.Component);

;

exports.default = (0, _reactRouter.withRouter)(SongSheet);


var valueOrEmptyString = function valueOrEmptyString(value) {
  return value ? value : '';
};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

var _SongTileGroup = __webpack_require__(165);

var _SongTileGroup2 = _interopRequireDefault(_SongTileGroup);

var _SearchBar = __webpack_require__(162);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterableSongTable = function (_React$Component) {
  _inherits(FilterableSongTable, _React$Component);

  function FilterableSongTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FilterableSongTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilterableSongTable.__proto__ || Object.getPrototypeOf(FilterableSongTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchText: '',
      songData: [],
      isLoading: true
    }, _this.handleUserInput = function (searchText) {
      _this.setState({
        searchText: searchText // TODO: Has to be a way to do this stuff without setting state twice
      });
      // TODO: Attempt to avoid hammering the API with requests as someone types.
      _this.getSongsFromApi(searchText);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FilterableSongTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getSongsFromApi(this.state.searchText);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var query = this.props.location.query;

      var searchText = query && query.searchText ? query.searchText : '';
      this.setState({
        searchText: searchText
      });
    }
  }, {
    key: 'getSongsFromApi',
    value: function getSongsFromApi(searchText) {
      var _this2 = this;

      this.setState({
        isLoading: true
      });
      if (searchText !== '') {
        // Set searchText query parameter
        this.props.router.replace('/songs?searchText=' + searchText);
      } else {
        this.props.router.replace('/songs');
      }

      _MediasiteApi2.default.getSongs(searchText, function (songData) {
        _this2.setState({
          songData: songData.data,
          isLoading: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, { searchText: this.state.searchText,
          onUserInput: this.handleUserInput }),
        this.state.isLoading ? _react2.default.createElement(
          'div',
          { className: 'progress' },
          _react2.default.createElement('div', { className: 'indeterminate' })
        ) : _react2.default.createElement(_SongTileGroup2.default, { songs: this.state.songData,
          searchText: this.state.searchText })
      );
    }
  }]);

  return FilterableSongTable;
}(_react2.default.Component);

exports.default = (0, _reactRouter.withRouter)(FilterableSongTable);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Welcome = function Welcome() {
  return _react2.default.createElement(
    'div',
    { className: 'card' },
    _react2.default.createElement(
      'div',
      { className: 'card-content' },
      _react2.default.createElement(
        'h2',
        null,
        'Welcome to Circle\'s Mediasite!'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This is the place that folks come when they need media.'
      ),
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'btn btn-large waves-effect btn-primary', to: '/songs' },
        'Song Search'
      )
    )
  );
};

exports.default = Welcome;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediasiteHeader = function MediasiteHeader(props) {
  var addSongLink = '';
  var songsLink = '';
  if (props.loggedIn) {
    addSongLink = _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/song/new' },
        'Add Song'
      )
    );
    songsLink = _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/songs' },
        'Songs'
      )
    );
  }
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/', className: 'brand-logo' },
        'Circle\'s Mediasite'
      ),
      _react2.default.createElement(
        'a',
        { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'menu'
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'right hide-on-med-and-down' },
        addSongLink,
        songsLink,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            props.user !== null ? props.user.firstName : ''
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement('img', { src: props.user !== null ? props.user.profilePicture : '', className: 'user-profile__image' })
        ),
        _react2.default.createElement('li', { className: 'divider' }),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: props.loggedIn ? '/logout' : '/login' },
            props.loggedIn ? 'Logout' : 'Login'
          )
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'side-nav', id: 'mobile-demo' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/songs' },
            'Songs'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            props.user !== null ? props.user.firstName : ''
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement('img', { src: props.user !== null ? props.user.profilePicture : '', className: 'user-profile__image' })
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: props.loggedIn ? '/logout' : '/login' },
            props.loggedIn ? 'Logout' : 'Login'
          )
        )
      )
    )
  );
}; // Required for JSX magicks
exports.default = MediasiteHeader;

/***/ },
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(240),
    hashDelete = __webpack_require__(241),
    hashGet = __webpack_require__(242),
    hashHas = __webpack_require__(243),
    hashSet = __webpack_require__(244);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(68),
    setCacheAdd = __webpack_require__(263),
    setCacheHas = __webpack_require__(264);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(32),
    root = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(227),
    isArguments = __webpack_require__(124),
    isArray = __webpack_require__(20),
    isBuffer = __webpack_require__(125),
    isIndex = __webpack_require__(119),
    isTypedArray = __webpack_require__(127);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ },
/* 209 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(212),
    createBaseEach = __webpack_require__(232);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(233);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(211),
    keys = __webpack_require__(72);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ },
/* 213 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

module.exports = baseGetTag;


/***/ },
/* 214 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(37);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && objectToString.call(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(111),
    equalArrays = __webpack_require__(117),
    equalByTag = __webpack_require__(234),
    equalObjects = __webpack_require__(235),
    getTag = __webpack_require__(237),
    isArray = __webpack_require__(20),
    isBuffer = __webpack_require__(125),
    isTypedArray = __webpack_require__(127);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

module.exports = baseIsEqualDeep;


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(111),
    baseIsEqual = __webpack_require__(115);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(126),
    isMasked = __webpack_require__(246),
    isObject = __webpack_require__(50),
    toSource = __webpack_require__(122);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

var isLength = __webpack_require__(70),
    isObjectLike = __webpack_require__(37);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = baseIsTypedArray;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(223),
    baseMatchesProperty = __webpack_require__(224),
    identity = __webpack_require__(274),
    isArray = __webpack_require__(20),
    property = __webpack_require__(277);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(247),
    nativeKeys = __webpack_require__(260);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(210),
    isArrayLike = __webpack_require__(69);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(217),
    getMatchData = __webpack_require__(236),
    matchesStrictComparable = __webpack_require__(121);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(115),
    get = __webpack_require__(272),
    hasIn = __webpack_require__(273),
    isKey = __webpack_require__(47),
    isStrictComparable = __webpack_require__(120),
    matchesStrictComparable = __webpack_require__(121),
    toKey = __webpack_require__(49);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ },
/* 225 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(114);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ },
/* 227 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(112),
    arrayMap = __webpack_require__(113),
    isArray = __webpack_require__(20),
    isSymbol = __webpack_require__(71);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ },
/* 229 */
/***/ function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ },
/* 230 */
/***/ function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(18);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(69);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ },
/* 233 */
/***/ function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(112),
    Uint8Array = __webpack_require__(206),
    eq = __webpack_require__(123),
    equalArrays = __webpack_require__(117),
    mapToArray = __webpack_require__(258),
    setToArray = __webpack_require__(265);

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

var keys = __webpack_require__(72);

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG = 2;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(120),
    keys = __webpack_require__(72);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(201),
    Map = __webpack_require__(67),
    Promise = __webpack_require__(203),
    Set = __webpack_require__(204),
    WeakMap = __webpack_require__(207),
    baseGetTag = __webpack_require__(213),
    toSource = __webpack_require__(122);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ },
/* 238 */
/***/ function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(116),
    isArguments = __webpack_require__(124),
    isArray = __webpack_require__(20),
    isIndex = __webpack_require__(119),
    isKey = __webpack_require__(47),
    isLength = __webpack_require__(70),
    toKey = __webpack_require__(49);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(48);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ },
/* 241 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(48);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(48);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ },
/* 245 */
/***/ function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(231);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ },
/* 247 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ },
/* 248 */
/***/ function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(45);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(45);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(45);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(45);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(202),
    ListCache = __webpack_require__(44),
    Map = __webpack_require__(67);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(46);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(46);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(46);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(46);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ },
/* 258 */
/***/ function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(276);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(262);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(118);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159)(module)))

/***/ },
/* 262 */
/***/ function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ },
/* 263 */
/***/ function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ },
/* 264 */
/***/ function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ },
/* 265 */
/***/ function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(44);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ },
/* 267 */
/***/ function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ },
/* 268 */
/***/ function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ },
/* 269 */
/***/ function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(44),
    Map = __webpack_require__(67),
    MapCache = __webpack_require__(68);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(259),
    toString = __webpack_require__(279);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(114);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(214),
    hasPath = __webpack_require__(239);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ },
/* 274 */
/***/ function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(113),
    baseIteratee = __webpack_require__(220),
    baseMap = __webpack_require__(222),
    isArray = __webpack_require__(20);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(68);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(225),
    basePropertyDeep = __webpack_require__(226),
    isKey = __webpack_require__(47),
    toKey = __webpack_require__(49);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ },
/* 278 */
/***/ function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(228);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ },
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(30);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(61);

var _reactRouter = __webpack_require__(10);

var _browserHelpers = __webpack_require__(160);

var _pages = __webpack_require__(161);

var _auth = __webpack_require__(60);

var _auth2 = _interopRequireDefault(_auth);

var _MediasiteApi = __webpack_require__(23);

var _MediasiteApi2 = _interopRequireDefault(_MediasiteApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loggedIn: _auth2.default.loggedIn(),
      user: null
    }, _this.updateAuth = function (loggedIn) {
      var newState = {
        loggedIn: loggedIn
      };
      if (!loggedIn && _this.state.loggedIn && _this.state.user !== null) {
        newState.user = null;
      }
      _this.setState(newState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadUserInfo();
      $('.button-collapse').sideNav();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadUserInfo();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _auth2.default.onChange = this.updateAuth;
      _auth2.default.login();
    }
  }, {
    key: 'loadUserInfo',
    value: function loadUserInfo() {
      var _this2 = this;

      if (this.state.user === null && this.state.loggedIn) {
        _MediasiteApi2.default.getUserInfo(localStorage.userId, function (userInfo) {
          _this2.setState({
            user: {
              'title': userInfo.data.title,
              'profilePicture': userInfo.data.profile_picture,
              'firstName': userInfo.data.first_name,
              'lastName': userInfo.data.last_name,
              'email': userInfo.data.email
            }
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mediasite' },
        _react2.default.createElement(_pages.MediasiteHeader, { loggedIn: this.state.loggedIn, user: this.state.user }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          this.props.children
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

function requireAuth(nextState, replace) {
  if (!_auth2.default.loggedIn()) {
    replace('/login?nextPathName=' + nextState.location.pathname);
  }
}

function startRender(error) {
  if (error) {
    console.error(error);
  } else {
    (0, _reactDom.render)(_react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.browserHistory },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: !_auth2.default.loggedIn() ? _pages.Login : _pages.Welcome }),
        _react2.default.createElement(_reactRouter.Route, { path: 'welcome', component: _pages.Welcome, onEnter: requireAuth }),
        _react2.default.createElement(_reactRouter.Route, { path: 'songs', component: _pages.FilterableSongTable, onEnter: requireAuth }),
        _react2.default.createElement(_reactRouter.Route, { path: 'song/new', component: _pages.NewSong, onEnter: requireAuth }),
        _react2.default.createElement(_reactRouter.Route, { path: 'song/:songId', component: _pages.Song, onEnter: requireAuth }),
        _react2.default.createElement(_reactRouter.Route, { path: 'song/:songId/edit', component: _pages.EditSong, onEnter: requireAuth }),
        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _pages.Login }),
        _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: _pages.Logout })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: 'song/:songId/print', component: _pages.SongSheet, onEnter: requireAuth })
    ), document.getElementById('mediasite'));
  }
}

if ((0, _browserHelpers.browserSupportsAllFeatures)()) {
  startRender();
} else {
  // If it's not all supported, load some polyfills.
  (0, _browserHelpers.loadScript)('https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,fetch&rum=1', startRender);
}

// Register service worker because why not do it in here? :)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
  });
}

/***/ }
]),[388]);