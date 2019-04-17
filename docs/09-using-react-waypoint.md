# Using react-waypoint for scroll based events

Now that we have a component that hides a its content based on a prop, how can we pass the prop based on where the user scrolls.

For that we could use `react-waypoint`

Add the module

```bash
yarn workspace portfolio add react-waypoint
```

In `components`  create @ `waypoint/WhenInView.js`

```jsx
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";

export default class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter} />
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}
```



In `Home.js` we use the component like this

```jsx
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView}>
              Lorem ipsum...
            
            
            </RevealP>
          )}
        </WhenInView>
```

Notice how we set the prop `hide` to true when `isInView` is false.  The library handles then value of `isInView` and changes it as the user scrolls into view.





