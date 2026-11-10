import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [basicRating, setBasicRating] = useState(0);

  return (
    <main className="app">
      <header className="app-header">
        <h1>React Star Rating</h1>
        <p>A simple and customizable star rating component built with React.</p>
      </header>

      <section className="demo-section">
        <h2>Basic rating</h2>
        <StarRating onSetRating={setBasicRating} />
        <p className="rating-result">
          {basicRating > 0
            ? `Your rating: ${basicRating} out of 5`
            : "Select a rating"}
        </p>
      </section>

      <section className="demo-section">
        <h2>10 stars</h2>
        <StarRating maxRating={10} size={30} color="#0d9488" />
      </section>

      <section className="demo-section">
        <h2>Rating with messages</h2>
        <StarRating
          color="#eab308"
          messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
        />
      </section>
    </main>
  );
}

export default App;
