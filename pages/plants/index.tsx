import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import Overview from "@/components/overview/Overview";

export default function Plants(){
    return (
        <div className="flex h-screen">
          <MenuLateral />
          <div className="flex flex-col w-full">
            <Header />
          </div>
        </div>
      );
}