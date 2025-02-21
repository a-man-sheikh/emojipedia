import "/src/card.css";

export default function Card({ emoji, name, description, category }) {
  return (
    <div className="card">
      <div className="emoji">{emoji}</div>
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
      <span className="category">{category}</span>
    </div>
  );
}
