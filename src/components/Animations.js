// Fade Animations
export const FadeIn = {
	from: {opacity: 0},
	to: [{opacity: 1}]
}
export const FadeOut = {
	from: {opacity: 1},
	to: [{opacity: 0}]
}

// Slide Animations
export const SlideInTop = {
	from: {transform: 'translate(0, -200%)'},
	to: [{transform: 'translate(0, 0)'}]
}
export const SlideOutTop = {
	from: {transform: 'translate(0, 0)'},
	to: [{transform: 'translate(0, -200%)'}]
}

export const SlideInRight = {
	from: {transform: 'translate(-200%, 0)'},
	to: [{transform: 'translate(0, 0)'}]
}
export const SlideOutRight = {
	from: {transform: 'translate(0, 0)'},
	to: [{transform: 'translate(-200%, 0)'}]
}

export const SlideInDown = {
	from: {transform: 'translate(0, 200%)'},
	to: [{transform: 'translate(0, 0)'}]
}
export const SlideOutDown = {
	from: {transform: 'translate(0, 0)'},
	to: [{transform: 'translate(0, 200%)'}]
}

export const SlideInLeft = {
	from: {transform: 'translate(200%, 0)'},
	to: [{transform: 'translate(0, 0)'}]
}
export const SlideOutLeft = {
	from: {transform: 'translate(0, 0)'},
	to: [{transform: 'translate(200%, 0)'}]
}

// Zoom Animations
export const ZoomIn = {
	from: {transform: 'scale(0)'},
	to: [{}]
}
export const ZoomOut = {
	from: {},
	to: [{transform: 'scale(0)'}]
}

// Bounce Animations
export const BounceIn = {
	from: {transform: 'scale(0)'},
	to: [
			{transform: 'scale(1.15)'},
			{transform: 'scale(1)'}
		]
}
export const BounceOut = {
	from: {transform: 'scale(1)'},
	to: [
			{transform: 'scale(1.15)'},
			{transform: 'scale(0)'}
		]
}

// Other
export const FancyPopIn = {
	from: { transform: 'rotate(20deg) scale(0)' },
	to: [
        	{transform: 'rotate(-5deg) scale(1)'}, 
        	{transform: 'rotate(0deg)'}
    	]
}
