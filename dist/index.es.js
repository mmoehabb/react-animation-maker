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
  const [firstRender, setFirstRender] = useState(true); // Changing style repeatedly logic

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


  return /*#__PURE__*/React.createElement("div", {
    style: { ...props.style,
      ...style,
      transition: props.duration || '1s'
    }
  }, props.children);
}; // PropTypes

Animate.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  delay: PropTypes.number,
  duration: PropTypes.string,
  loop: PropTypes.bool
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
    scale: 0
  },
  to: [{}]
};
const ZoomOut = {
  from: {},
  to: [{
    scale: 0
  }]
}; // Bounce Animations

const BounceIn = {
  from: {
    scale: '0'
  },
  to: [{
    scale: '1.15'
  }, {
    scale: '1'
  }]
};
const BounceOut = {
  from: {
    scale: '1'
  },
  to: [{
    scale: '1.2'
  }, {
    scale: '0'
  }]
}; // Other

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

export { Animate, BounceIn, BounceOut, FadeIn, FadeOut, FancyPopIn, SlideInDown, SlideInLeft, SlideInRight, SlideInTop, SlideOutDown, SlideOutLeft, SlideOutRight, SlideOutTop, ZoomIn, ZoomOut };
