import LateralMenu from "@/components/lateralmenu/LateralMenu";
import FormMachine from "@/components/forms/FormMachine";

export default function FormMachines(){
  return(
    <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-64 bg-[#2F2F2F]">
        <LateralMenu />
      </aside>
      <main className="flex-1 bg-[#D9D9D9] ">
        <FormMachine/>
      </main>
    </div>
  </div>
  )
}