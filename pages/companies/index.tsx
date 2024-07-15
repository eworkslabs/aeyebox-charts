import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";

export default function Companies(){
    return (
        <div className="flex h-screen">
          <MenuLateral />
          <div className="flex flex-col w-full">
            <Header />
          </div>
        </div>
      );
}