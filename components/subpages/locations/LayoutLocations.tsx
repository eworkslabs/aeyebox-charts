import HeaderLocations from "./HeaderLocations";
import TableLocations from "./TableLocations";

export default function LayoutLocations(){
    return(
        <section>
            <div className="bg-white">
                <HeaderLocations />
                <TableLocations />
            </div>
        </section>
    )
}