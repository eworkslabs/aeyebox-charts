import LateralMenu from "@/components/lateralmenu/LateralMenu";
import FormPlants from "@/components/forms/FormPlants";

export default function FormMachines(){
  return(
    <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-64 bg-[#2F2F2F]">
        <LateralMenu />
      </aside>
      <main className="flex-1 bg-[#D9D9D9] ">
        <FormPlants/>
      </main>
    </div>
  </div>
  )
}