
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function SellCarPage() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 py-24">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center gap-6 animate-fade-in">
        <div className="flex flex-col items-center gap-2 text-center">
          <Info className="text-violet-600 mb-2" size={36} />
          <p className="font-semibold text-lg text-gray-700">
            Get the best deal for your vehicle in minutes!
          </p>
          <p className="text-base text-gray-500 font-medium">
            It’s 100% free to post!
          </p>
        </div>
        <Button
          onClick={() => navigate("/sell/list")}
          size="lg"
          className="w-full group bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-indigo-600 hover:to-purple-500 text-white text-xl py-5 shadow-md transition-all animate-fade-in"
        >
          + Sell Your Car
          <span className="ml-2 animate-slide-in-right">&#8594;</span>
        </Button>
      </div>
    </section>
  );
}
