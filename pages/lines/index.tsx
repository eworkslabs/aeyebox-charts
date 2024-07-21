import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import LayoutLines from "@/components/subpages/lines/LayoutLines";

export default function Lines() {
  return (
    <div className="flex h-screen">
      <MenuLateral />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4 ml-28">
          <LayoutLines />
        </main>
      </div>
    </div>
  );
}