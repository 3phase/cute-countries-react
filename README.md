# cute-countries-react

Beautiful country flag icons for React. All flags are provided as importable images by React.

## Documentation and Playground

- [Playground](https://3phase.github.io/cute-countries-react-docs)

## Available Icons
- All available icons can be found [here](https://3phase.github.io/cute-countries-react-docs/#available-icons).

## Installation

```shell
npm install --save cute-countries-react
```
or

```shell
yarn add cute-countries-react
```

## Usage

```js
import Flag from 'cute-countries-react';
```

Displays the flag of the United States (US)

```js
<Flag country="us" />
```

Component can render different flags by country, a list of all codes can be found [here](https://3phase.github.io/cute-countries-react-docs/#available-icons).

```js
<Flag country="de" />
```

It's also possible to make those flags whatever pixel size you want.

Big

```js
<Flag country="ca" size={84} />
```

or small

```js
<Flag country="uk" size={15} />
```

If needed you can also make the flag interactive with an `onClick` handler, just make sure to change the `role` to `button`

```js
<Flag
  country="se"
  role="button"
  onClick={() => {
    alert('You just clicked on the flag.');
  }}
/>
```

## Thanks
- **stephenway** for https://github.com/stephenway/react-flagkit
- **I don't know who** for the beautiful [SVG icons with an open license](https://www.svgrepo.com/collection/flags-collection-4/) - Thank you 💖 
