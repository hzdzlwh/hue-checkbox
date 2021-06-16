hue-checkbox
=============


A react component can custome checkbox select background color

Install with [npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/)

```bash
# via npm
npm install hue-checkbox

# via Yarn
yarn add hue-checkbox
```

## Usage

```js
import HueCheckbox from 'hue-checkbox'

<HueCheckbox checked color="#000000">Apple</HueCheckbox>
<HueCheckbox disabled color="#0000FF">Orange</HueCheckbox>
```

## API

### Props

#### Checkbox

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checked | Specifies whether the checkbox is selected | boolean | false |  |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected | boolean | false |  |
| disabled | If disable checkbox | boolean | false |  |
| onChange | The callback function that is triggered when the state changes | function(e:Event) | - |  |

