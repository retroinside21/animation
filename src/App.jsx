import "./App.css";
import { ContentBlock } from "./components/ContentBlock";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { content } from "./assets/configs/contents";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentBlock
        content={content.contentTop}
        title="ut aliquip ex ea commodo consequat"
        indent
      />
      <Slider />
      <ContentBlock
        content={content.contentBottom}
        title="ut aliquip ex ea commodo consequat"
      />
      <Footer />
    </div>
  );
}

export default App;
