import React, { useState } from 'react';
import PropTypes from 'prop-types';

const durFromString = (s) => {
	if (typeof(s) !== 'string') return 0;
	let num = parseInt(s);
	let txt = "";
	
	for (let i = 0; i < s.length; i++)
		if (!(parseInt(s[i]) >= 0)) txt += s[i];
		
	if (txt === 's') return num * 1000;
	else if (txt === 'ms') return num;
	else return 0;
}

export const Animate = props => {
    // Hooks
    const [style, setStyle] = useState(props.from);
    const [firstRender, setFirstRender] = useState(true);
    const [duration, setDuration] = useState(props.durations ? props.durations[0] : '1s');

    // Changing style repeatedly logic
    const updateStyle = () => {
    	function update_func() {
            const durs = props.durations ? props.durations.map((dur) => durFromString(dur)) : [1000];
            let dur = 0;

            for (let i = 0; i < props.to.length; i++) {
                // if the user inputed a convenient list of durations
                if (props.durations && props.durations.length === props.to.length) {
                    setTimeout(() => setStyle(props.to[i]), dur);
                    setTimeout(() => setDuration(props.durations[i]), dur);
                    dur += durs[i];
                }
                // Otherwise
                else {
                    dur = durs[0] * i;                    
                    setTimeout(() => setStyle(props.to[i]), dur);
                }

                // For looping purpose
                if (props.loop && i === props.to.length-1) {
                	setTimeout(() => setStyle(props.from), dur);
                    setTimeout(update_func, dur + durs[0]);
                }
            }   
        }
        setTimeout(update_func, props.delay || 100);
    }
    
    // Only executed in the first render
    if (firstRender) {
        setFirstRender(false);
        updateStyle();
    }

    // JSX
    return (
        <div style={{...props.style, ...style, transition: duration}}>
            {props.children}
        </div>
    );
}
// PropTypes
Animate.propTypes = {
    from: PropTypes.object.isRequired,
    to: PropTypes.arrayOf(PropTypes.object).isRequired,

    style: PropTypes.object,
    delay: PropTypes.number,
    durations: PropTypes.arrayOf(PropTypes.string),
    loop: PropTypes.bool,
};

// useAnimate Hook
export const useAnimate = initProps => {
    const AnimateWrapper = rprops => (
        <Animate
        from={initProps.from}
        to={initProps.to}
        durations={initProps.durations}
        style={rprops.style || {}}
        delay={rprops.delay || 0}>

            {rprops.children}
            
        </Animate>
    );
    const [animate, setAnimate] = useState(() => AnimateWrapper);
    
    const hookSetter = props => {
        const AnimateWrapper = rprops => (
            <Animate
            from={props.from}
            to={props.to}
            durations={props.durations}
            style={rprops.style || {}}
            delay={rprops.delay || 0}>

                {rprops.children}

            </Animate>
        );
        setAnimate(() => AnimateWrapper);
    }

    return [animate, hookSetter];
}
