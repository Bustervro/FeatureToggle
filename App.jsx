import React from "react";
import FeatureToggle from "./FeatureToggle";

function App() {
  return (
    <div>
      <h1>Feature Toggle Demo</h1>

      <FeatureToggle isEnabled={true} featureName="Login System" />
      <FeatureToggle isEnabled={false} featureName="Dark Mode" />
      <FeatureToggle isEnabled={true} featureName="Notifications" />
      <FeatureToggle isEnabled={false} featureName="Payment Gateway" />

    </div>
  );
}

export default App;
