# Abstract
As the name indicates, the package seeks to make it easier for ReactJS developers to define and create their own animations. This objective is achieved, by giving devs the ability to design there own animations, just by using js-css objects in defining animation stages.

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
- ```style: js-css object``` for the general style of all stages.<br>
- ```durations: string[]``` the durations between stages, its default value ['1s'].```. <br>
- ```delay: int``` specifies the delay time in milliseconds.<br>
- ```loop: boolen``` to indicate wheather the animation loops forever or not.

## Using 'durations' Prop
This is an optional prop, whose only purpose is to descripe the duration between each stage and the one preceeding, starting from the first stage in "to" prop. The durations list length should be as the length of "to" list. If it's not, then the first value of the durations list is considered as the duration between each stage and the another.

### Example
```js
<Animate 
from={{backgroundColor: '#f00'}} 
to={[
    {backgroundColor: '#0f0'},
    {backgroundColor: '#00f'},
    {backgroundColor: '#f0f'},
    {backgroundColor: '#fff'},
]}
durations={['250ms', '500ms', '750ms', '1s']}>
    Hello, World!
</Animate>
```

## Using Pre-defined Animations
```js
import { Animate, FancyPopIn } from 'react-animation-maker'

<Animate 
from={FancyPopIn.from} 
to={FancyPopIn.to}
durations={FancyPopIn.durations}>
    Hello, World!
</Animate>
```

Checkout the whole list here:
[https://mahmoud-ehab.github.io/react-animation-maker](https://mahmoud-ehab.github.io/react-animation-maker)
