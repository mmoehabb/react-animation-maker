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

// Fade Animations
const FadeIn = {
  from: {
    opacity: 0
  },
  to: [{
    opacity: 1
  }]
};
const FadeOut = {
  from: {
    opacity: 1
  },
  to: [{
    opacity: 0
  }]
}; // Slide Animations

const SlideInTop = {
  from: {
    transform: 'translate(0, -200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }]
};
const SlideOutTop = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, -200%)'
  }]
};
const SlideInRight = {
  from: {
    transform: 'translate(-200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }]
};
const SlideOutRight = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(-200%, 0)'
  }]
};
const SlideInDown = {
  from: {
    transform: 'translate(0, 200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }]
};
const SlideOutDown = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, 200%)'
  }]
};
const SlideInLeft = {
  from: {
    transform: 'translate(200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }]
};
const SlideOutLeft = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(200%, 0)'
  }]
}; // Zoom Animations

const ZoomIn = {
  from: {
    transform: 'scale(0)'
  },
  to: [{}]
};
const ZoomOut = {
  from: {},
  to: [{
    transform: 'scale(0)'
  }]
}; // Bounce Animations

const BounceIn = {
  from: {
    transform: 'scale(0)'
  },
  to: [{
    transform: 'scale(1.15)'
  }, {
    transform: 'scale(1)'
  }]
};
const BounceOut = {
  from: {
    transform: 'scale(1)'
  },
  to: [{
    transform: 'scale(1.15)'
  }, {
    transform: 'scale(0)'
  }]
}; // Other

const FancyPopIn = {
  from: {
    transform: 'rotate(20deg) scale(0)'
  },
  to: [{
    transform: 'rotate(-5deg) scale(1)'
  }, {
    transform: 'rotate(0deg)'
  }]
};

exports.Animate = Animate;
exports.BounceIn = BounceIn;
exports.BounceOut = BounceOut;
exports.FadeIn = FadeIn;
exports.FadeOut = FadeOut;
exports.FancyPopIn = FancyPopIn;
exports.SlideInDown = SlideInDown;
exports.SlideInLeft = SlideInLeft;
exports.SlideInRight = SlideInRight;
exports.SlideInTop = SlideInTop;
exports.SlideOutDown = SlideOutDown;
exports.SlideOutLeft = SlideOutLeft;
exports.SlideOutRight = SlideOutRight;
exports.SlideOutTop = SlideOutTop;
exports.ZoomIn = ZoomIn;
exports.ZoomOut = ZoomOut;
