# React Star Rating

A reusable and customizable star rating component built with React.

## Features

- Customizable number of stars
- Custom star colors and sizes
- Interactive hover effects
- Custom rating messages
- Initial rating value
- Rating callback with `onSetRating`
- Keyboard-friendly buttons

## Demo

The project includes three examples:

- Basic rating
- 10-star rating
- Rating with custom messages

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/react-star-rating.git
```

Go to the project folder:

```bash
cd react-star-rating
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Usage

Import the component:

```jsx
import StarRating from "./components/StarRating";
```

Use it in your application:

```jsx
<StarRating />
```

## Props

| Prop            | Type     | Default   | Description                        |
| --------------- | -------- | --------- | ---------------------------------- |
| `maxRating`     | number   | `5`       | Number of stars                    |
| `color`         | string   | `#f59e0b` | Star color                         |
| `size`          | number   | `36`      | Star size in pixels                |
| `className`     | string   | `""`      | Additional CSS class               |
| `messages`      | array    | `[]`      | Custom rating messages             |
| `defaultRating` | number   | `0`       | Initial rating                     |
| `onSetRating`   | function | —         | Callback when a rating is selected |

## Example

```jsx
<StarRating
  maxRating={5}
  color="#eab308"
  size={40}
  messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
  onSetRating={(rating) => console.log(rating)}
/>
```

## Technologies

- React
- JavaScript
- CSS
- Vite

## License

This project is licensed under the MIT License.
