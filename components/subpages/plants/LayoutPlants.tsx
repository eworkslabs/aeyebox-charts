import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitlePlants from "./TitlePlants";
import TablePlants from "./TablePlants";


export default function LayoutPlants(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitlePlants />
                <TablePlants />
            </div>
        </section>
    )
}