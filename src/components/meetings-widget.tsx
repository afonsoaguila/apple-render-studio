import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const MeetingsWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "apple" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-full h-full min-h-[600px] bg-background border border-border rounded-lg overflow-hidden">
      <Cal
        namespace="apple"
        calLink="afonso-aguilar-tehl2z/apple"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default MeetingsWidget;