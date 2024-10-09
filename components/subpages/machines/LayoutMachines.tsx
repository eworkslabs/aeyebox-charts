import HeaderMachines from "./HeaderMachines";
import TableMachines from "./TableMachines";


export default function LayoutMachines(){
    return(
        <section>
            <div className="bg-white">
                <HeaderMachines />
                <TableMachines />
            </div>
        </section>
    )
}