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
};

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
};

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
};

export { BounceIn, BounceOut, FadeIn, FadeOut, FancyPopIn, SlideInDown, SlideInLeft, SlideInRight, SlideInTop, SlideOutDown, SlideOutLeft, SlideOutRight, SlideOutTop, ZoomIn, ZoomOut };
