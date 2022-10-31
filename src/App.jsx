import "./styles/App.css";
import ProfileSection from "./components/profileSection";
import LinkSection from "./components/profileSection";
function App() {
  return (
    <div className="App">
      <main className="main-section">
        <div className="App__content">
          <ProfileSection />
          <LinkSection />
        </div>
      </main>
    </div>
  );
}

export default App;
