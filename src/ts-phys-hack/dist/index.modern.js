import React from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var index = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(index, _React$Component);

  function index(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = index.prototype;

  _proto.componentDidCatch = function componentDidCatch(_error) {
    try {
      var _this3 = this;

      console.log(_error);
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify({
        error: _error
      });
      var api = _this3.props.api;
      return Promise.resolve(fetch(api + '/book/sendError', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      })).then(function () {
        console.log('Request sent.');
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.render = function render() {
    return React.createElement("div", null, this.props.children);
  };

  return index;
}(React.Component);

export default index;
export { index };
//# sourceMappingURL=index.modern.js.map
