# Abstract
As the name indicates, the package seeks to make it easier for ReactJS developers to define and create their own animations.

> The package does not contain animated components or already written animations. However, It might be added in new versions.

# Installing
```
npm install react-animation-maker
```

# Usage
## Animate Component
This component is used to define your own animations only using css-js objects. It animate the div from the object of the 'from' prop, to the list of objects of the 'to' prop.

```js
import { Animate } from 'react-animation-maker'

<Animate 
from={{backgroundColor: '#f00'}} 
to={[{backgroundColor: '#0f0'}]}>
    Hello, World!
</Animate>
```

We can create multi-staged animation, as well. In other words, adding more than one object in the 'to' prop list.

```js
<Animate 
from={{backgroundColor: '#f00'}} 
to={[
    {backgroundColor: '#0f0'},
    {backgroundColor: '#00f'},
]}>
    Hello, World!
</Animate>
```

### Other props (OPTIONAL)
- ```style: js-object```
for the general style of all stages.<br>
- ```duration: string``` the duration of changing the state of the div from stage to another. take the values '1s', '2s'...etc.<br>
- ```delay: int``` specifies the delay time in milliseconds.<br>
- ```loop: boolen``` to indicate wheather the animation loops forever or not.

## Using Pre-defined Animations
```js
import { Animate, FancyPopIn } from 'react-animation-maker'

<Animate 
from={FancyPopIn.from} 
to={FancyPopIn.to}>
    Hello, World!
</Animate>
```