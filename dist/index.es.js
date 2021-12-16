import React, { useState } from 'react';
import PropTypes from 'prop-types';

const durFromString = s => {
  if (typeof s !== 'string') return 0;
  let num = parseInt(s);
  let txt = "";

  for (let i = 0; i < s.length; i++) if (!(parseInt(s[i]) >= 0)) txt += s[i];

  if (txt === 's') return num * 1000;else if (txt === 'ms') return num;else return 0;
};

const Animate = props => {
  // Hooks
  const [style, setStyle] = useState(props.from);
  const [firstRender, setFirstRender] = useState(true);
  const [duration, setDuration] = useState(props.durations ? props.durations[0] : '1s'); // Changing style repeatedly logic

  const updateStyle = () => {
    function update_func() {
      const durs = props.durations ? props.durations.map(dur => durFromString(dur)) : [1000];
      let dur = 0;

      for (let i = 0; i < props.to.length; i++) {
        // if the user inputed a convenient list of durations
        if (props.durations && props.durations.length === props.to.length) {
          setTimeout(() => setStyle(props.to[i]), dur);
          setTimeout(() => setDuration(props.durations[i]), dur);
          dur += durs[i];
        } // Otherwise
        else {
          dur = durs[0] * i;
          setTimeout(() => setStyle(props.to[i]), dur);
        } // For looping purpose


        if (props.loop && i === props.to.length - 1) {
          setTimeout(() => setStyle(props.from), dur);
          setTimeout(update_func, dur + durs[0]);
        }
      }
    }

    setTimeout(update_func, props.delay || 100);
  }; // Only executed in the first render


  if (firstRender) {
    setFirstRender(false);
    updateStyle();
  } // JSX


  return /*#__PURE__*/React.createElement("div", {
    style: { ...props.style,
      ...style,
      transition: duration
    }
  }, props.children);
}; // PropTypes

Animate.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  delay: PropTypes.number,
  durations: PropTypes.arrayOf(PropTypes.string),
  loop: PropTypes.bool
}; // useAnimate Hook

const useAnimate = initProps => {
  const AnimateWrapper = rprops => /*#__PURE__*/React.createElement(Animate, {
    from: initProps.from,
    to: initProps.to,
    durations: initProps.durations,
    style: rprops.style || {},
    delay: rprops.delay || 0
  }, rprops.children);

  const [animate, setAnimate] = useState(() => AnimateWrapper);

  const hookSetter = props => {
    const AnimateWrapper = rprops => /*#__PURE__*/React.createElement(Animate, {
      from: props.from,
      to: props.to,
      durations: props.durations,
      style: rprops.style || {},
      delay: rprops.delay || 0
    }, rprops.children);

    setAnimate(() => AnimateWrapper);
  };

  return [animate, hookSetter];
};

// Fade Animations
const FadeIn = {
  from: {
    opacity: 0
  },
  to: [{
    opacity: 1
  }],
  durations: ['1s']
};
const FadeOut = {
  from: {
    opacity: 1
  },
  to: [{
    opacity: 0
  }],
  durations: ['1s']
}; // Slide Animations

const SlideInTop = {
  from: {
    transform: 'translate(0, -200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};
const SlideOutTop = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, -200%)'
  }],
  durations: ['1s']
};
const SlideInRight = {
  from: {
    transform: 'translate(-200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};
const SlideOutRight = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(-200%, 0)'
  }],
  durations: ['1s']
};
const SlideInDown = {
  from: {
    transform: 'translate(0, 200%)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};
const SlideOutDown = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(0, 200%)'
  }],
  durations: ['1s']
};
const SlideInLeft = {
  from: {
    transform: 'translate(200%, 0)'
  },
  to: [{
    transform: 'translate(0, 0)'
  }],
  durations: ['1s']
};
const SlideOutLeft = {
  from: {
    transform: 'translate(0, 0)'
  },
  to: [{
    transform: 'translate(200%, 0)'
  }],
  durations: ['1s']
}; // Zoom Animations

const ZoomIn = {
  from: {
    transform: 'scale(0)'
  },
  to: [{}],
  durations: ['1s']
};
const ZoomOut = {
  from: {},
  to: [{
    transform: 'scale(0)'
  }],
  durations: ['1s']
}; // Bounce Animations

const BounceIn = {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: [{
    transform: 'scale(1.2)',
    opacity: 1
  }, {
    transform: 'scale(0.9)'
  }, {
    transform: 'scale(1.05)'
  }, {
    transform: 'scale(0.975)'
  }, {
    transform: 'scale(1)'
  }],
  durations: ['250ms']
};
const BounceOut = {
  from: {
    transform: 'scale(1)'
  },
  to: [{
    transform: 'scale(1.2)'
  }, {
    transform: 'scale(0.8)',
    opacity: 0
  }],
  durations: ['250ms']
}; // Other

const FancyPopIn = {
  from: {
    transform: 'rotate(20deg) scale(0)'
  },
  to: [{
    transform: 'rotate(-5deg) scale(1)'
  }, {
    transform: 'rotate(0deg)'
  }],
  durations: ['1s']
};

export { Animate, BounceIn, BounceOut, FadeIn, FadeOut, FancyPopIn, SlideInDown, SlideInLeft, SlideInRight, SlideInTop, SlideOutDown, SlideOutLeft, SlideOutRight, SlideOutTop, ZoomIn, ZoomOut, useAnimate };
