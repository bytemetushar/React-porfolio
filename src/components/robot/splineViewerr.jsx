import { useEffect } from "react";
import { splineViewerScript, splineViewerUrl } from "./robot"; // Import script & URL

function SplineViewer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = splineViewerScript;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
}, []);

  return (
    <div className="spline-container">
      <spline-viewer url={splineViewerUrl}></spline-viewer>
    </div>
  );
}

export default SplineViewer;
