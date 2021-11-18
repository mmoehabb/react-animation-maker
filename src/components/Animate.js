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

    // Changing style repeatedly logic
    const updateStyle = () => {
    	function update_func() {
        	const init_dur = durFromString(props.duration || '1s');
            for (let i = 0; i < props.to.length; i++) {
                const dur = i * init_dur;
                setTimeout(() => setStyle(props.to[i]), dur);

                // For looping purpose
                if (props.loop && i === props.to.length-1) {
                	setTimeout(() => setStyle(props.from), dur + init_dur);
                    setTimeout(update_func, dur + init_dur*2);
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
        <div style={{...props.style, ...style, transition: props.duration || '1s'}}>
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
    duration: PropTypes.string,
    loop: PropTypes.bool,
};
