import "./styles/App.css";
import ProfileSection from "./components/profileSection";
import LinksSection from "./components/linksSection";
import SocialSection from "./components/socialSection";

function App() {
  return (
    <div className="App">
      <main className="main-section">
        <div className="App__content">
          <ProfileSection />
          <LinksSection />
          <SocialSection />
        </div>
      </main>
    </div>
  );
}

export default App;
