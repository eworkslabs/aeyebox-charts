import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import LayoutMachines from "@/components/subpages/machines/LayoutMachines";

export default function Machines(){
  return (
    <div className="flex h-screen">
    <MenuLateral />
    <div className="flex flex-col w-full">
      <Header />
      <main className="flex-1 p-4 lg:ml-28">
        <LayoutMachines />
      </main>
    </div>
  </div>
    );
    }