import CommunitySection from "./components/CommunitySection";
import SubscriptionSection from "./components/SubscriptionSection";
import WhyUsSection from "./components/WhyUsSection";
import "./css/styles.css";

function App() {
  return (
    <div className="single-price-grid-container">
      <CommunitySection />
      <SubscriptionSection />
      <WhyUsSection />
    </div>
  );
}

export default App;
