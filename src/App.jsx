import "./styles.css";
import emojiList from "./data/emojiList";
import Card from "./components/Card";
export default function App() {
  return (
    <div className="container">
      {emojiList.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}
