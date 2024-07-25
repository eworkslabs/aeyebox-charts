import LayoutCompanies from "@/components/subpages/companies/LayoutCompanies";
import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";

export default function Companies(){
    return (
      <div className="flex h-screen">
      <MenuLateral />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4 lg:ml-28">
          <LayoutCompanies />
        </main>
      </div>
    </div>
      );
}