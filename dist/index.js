'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const durFromString = s => {
  if (typeof s !== 'string') return 0;
  let num = parseInt(s);
  let txt = "";

  for (let i = 0; i < s.length; i++) if (!(parseInt(s[i]) >= 0)) txt += s[i];

  if (txt === 's') return num * 1000;else if (txt === 'ms') return num;else return 0;
};

const Animate = props => {
  // Hooks
  const [style, setStyle] = React.useState(props.from);
  const [firstRender, setFirstRender] = React.useState(true); // Changing style repeatedly logic

  const updateStyle = () => {
    function update_func() {
      const init_dur = durFromString(props.duration || '1s');

      for (let i = 0; i < props.to.length; i++) {
        const dur = i * init_dur;
        setTimeout(() => setStyle(props.to[i]), dur); // For looping purpose

        if (props.loop && i === props.to.length - 1) {
          setTimeout(() => setStyle(props.from), dur + init_dur);
          setTimeout(update_func, dur + init_dur * 2);
        }
      }
    }

    setTimeout(update_func, props.delay || 100);
  }; // Only executed in the first render


  if (firstRender) {
    setFirstRender(false);
    updateStyle();
  } // JSX


  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: { ...props.style,
      ...style,
      transition: props.duration || '1s'
    }
  }, props.children);
}; // PropTypes

Animate.propTypes = {
  from: PropTypes__default["default"].object.isRequired,
  to: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object).isRequired,
  style: PropTypes__default["default"].object,
  delay: PropTypes__default["default"].number,
  duration: PropTypes__default["default"].string,
  loop: PropTypes__default["default"].bool
};

const FancyPopIn = {
  from: {
    transform: 'rotate(20deg)',
    scale: 0
  },
  to: [{
    transform: 'rotate(-5deg)'
  }, {
    transform: 'rotate(0deg)'
  }]
};

exports.Animate = Animate;
exports.FancyPopIn = FancyPopIn;
