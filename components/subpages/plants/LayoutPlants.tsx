import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitlePlants from "./TitlePlants";
import TablePlants from "./TablePlants";
import Welcome from "@/components/overview/Welcome";


export default function LayoutPlants(){
    return(
        <section>
            <div>
                <Welcome/>
            </div>
            <div className="bg-white">
                <TitlePlants />
                <TablePlants />
            </div>
        </section>
    )
}