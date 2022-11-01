import "./styles/App.css";
import ProfileSection from "./components/profileSection";
import LinksSection from "./components/linksSection";
import SocialSection from "./components/socialSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <main className="main-section">
        <div className="App__content">
          <ProfileSection />
          <LinksSection />
        </div>
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
