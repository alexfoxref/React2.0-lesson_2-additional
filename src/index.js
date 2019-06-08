"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employers = _interopRequireDefault(require("./employers"));

var _sponsors = _interopRequireDefault(require("./sponsors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var employersNames = new _employers.default(employers),
    sp = new _sponsors.default(sponsors),
    money = sp.calcCash();

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        owner = _ref.owner,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? 'Viktor' : _ref$director,
        cash = _ref.cash,
        emp = _ref.emp;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(MakeBusiness, [{
    key: "sumSponsors",
    value: function sumSponsors() {
      var eu = sponsors.eu,
          rus = sponsors.rus,
          sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']);
      return sumSponsors;
    }
  }, {
    key: "reportResults",
    value: function reportResults() {
      var _console;

      var _sponsors$eu = _slicedToArray(sponsors.eu, 1),
          srl = _sponsors$eu[0];

      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');

      (_console = console).log.apply(_console, _toConsumableArray(this.sumSponsors()));

      console.log("Note. Be careful with ".concat(srl, ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var makeBusiness = new MakeBusiness({
  owner: 'Sam',
  cash: money,
  emp: employersNames.returnResult()
});
makeBusiness.reportResults();