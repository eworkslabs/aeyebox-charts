import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import LayoutPlants from "@/components/subpages/plants/LayoutPlants";

export default function Plants(){
  return (
    <div className="flex h-screen">
    <MenuLateral />
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex-1 p-4 ml-28">
        <LayoutPlants />
      </main>
    </div>
  </div>
    );
    }