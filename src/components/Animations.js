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
	from: {scale: 0},
	to: [{}]
}
export const ZoomOut = {
	from: {},
	to: [{scale: 0}]
}

// Bounce Animations
export const BounceIn = {
	from: {scale: '0'},
	to: [
		{scale: '1.15'},
		{scale: '1'},
	]
}
export const BounceOut = {
	from: {scale: '1'},
	to: [
		{scale: '1.2'},
		{scale: '0'},
	]
}

// Other
export const FancyPopIn = {
	from: { transform: 'rotate(20deg)', scale: 0 },
	to: [
        	{transform: 'rotate(-5deg)'}, 
        	{transform: 'rotate(0deg)'}
        ]
}
