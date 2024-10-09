import Header from "@/components/header/Header";
import MenuLateral from "@/components/lateralmenu/LateralMenu";
import Overview from "@/components/overview/Overview";

export default function HomeApp() {
  return (
    <div className="flex h-screen">
      <MenuLateral />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1 p-4 lg:ml-28">
          <Overview />
        </main>
      </div>
    </div>
  );
}
