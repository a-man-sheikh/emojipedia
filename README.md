# Emojipedia

Emojipedia is a simple React project that displays a list of emojis with their meanings. Each emoji is rendered using a `Card` component, which includes an emoji symbol, name, description, and category.

## Features
- Displays a list of emojis with details
- Uses React components for reusability
- Maps through an emoji dataset to render individual cards

## Technologies Used
- React.js
- CSS (for styling)

## Project Structure
```
Emojipedia/
│── src/
│   ├── components/
│   │   ├── Card.js
│   ├── data/
│   │   ├── emojiList.js
│   ├── styles.css
│   ├── card.css
│   ├── App.js
│   ├── main.js
│── package.json
│── README.md
```

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/emojipedia.git
   cd emojipedia
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000` to view the app.

## Usage
- The app will display a list of emoji cards, each containing an emoji, name, description, and category.
- You can modify `emojiList.js` in the `data` folder to add or edit emoji details.

## Example Data (`emojiList.js`)
```js
const emojiList = [
  {
    emoji: "😀",
    name: "Grinning Face",
    description: "A yellow face with a broad, open smile.",
    category: "Smileys & Emotion"
  },
  {
    emoji: "🎉",
    name: "Party Popper",
    description: "Used for celebrations and parties.",
    category: "Activities"
  }
];
export default emojiList;
```

## Contributing
Feel free to fork the repository, make enhancements, and create a pull request!

## License
This project is open-source and available under the **MIT License**.
