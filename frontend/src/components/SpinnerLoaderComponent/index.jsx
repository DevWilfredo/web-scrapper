import { Loader2 } from "lucide-react";

const SpinnerLoaderComponent = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoaderComponent;
