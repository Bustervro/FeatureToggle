import React from "react";

function FeatureToggle({ isEnabled, featureName }) {
  return (
    <div>
      {isEnabled ? (
        <h3>Feature {featureName} is enabled</h3>
      ) : (
        <h3>Feature {featureName} is disabled</h3>
      )}
    </div>
  );
}

export default FeatureToggle;
