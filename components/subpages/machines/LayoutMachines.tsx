import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleMachines from "./TitleMachines";
import TableMachines from "./TableMachines";
import Welcome from "@/components/overview/Welcome";


export default function LayoutMachines(){
    return(
        <section>
            <div>
                <Welcome/>
            </div>
            <div className="bg-white">
                <TitleMachines />
                <TableMachines />
            </div>
        </section>
    )
}