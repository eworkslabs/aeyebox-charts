import HeaderPlants from "./HeaderPlants";
import TablePlants from "./TablePlants";


export default function LayoutPlants(){
    return(
        <section>
            <div className="bg-white">
                <HeaderPlants />
                <TablePlants />
            </div>
        </section>
    )
}