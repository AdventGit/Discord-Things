'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.getFeatures = getFeatures;

var _FeatureFlags = require('../common/FeatureFlags');

var _FeatureFlags2 = _interopRequireDefault(_FeatureFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var features = void 0;

function init() {
  features = new _FeatureFlags2.default();
  // TODO(constants): Should we shove the feature strings in constants?
  features.declareSupported('voice_in_renderer');
  features.declareSupported('utils_in_renderer');
}

function getFeatures() {
  return features;
}