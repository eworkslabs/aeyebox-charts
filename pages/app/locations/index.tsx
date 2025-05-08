import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import LayoutLocations from "@/components/subpages/locations/LayoutLocations";

export default function Locations(){
  return (
    <div className="flex h-screen">
    <MenuLateral />
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex-1 p-4 lg:ml-28">
        <LayoutLocations />
      </main>
    </div>
  </div>
    );
    }