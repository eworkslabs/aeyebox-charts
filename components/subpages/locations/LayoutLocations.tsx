import TitleLocations from "./TitleLocations";
import TableLocations from "./TableLocations";
import Welcome from "@/components/overview/Welcome";

export default function LayoutLocations(){
    return(
        <section>
            <div>
                <Welcome/>
            </div>
            <div className="bg-white">
                <TitleLocations />
                <TableLocations />
            </div>
        </section>
    )
}