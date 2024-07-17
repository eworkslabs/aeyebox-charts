import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleMachines from "./TitleMachines";
import TableMachines from "./TableMachines";


export default function LayoutMachines(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleMachines />
                <TableMachines />
            </div>
        </section>
    )
}