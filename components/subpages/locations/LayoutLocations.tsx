import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleLocations from "./TitleLocations";
import TableLocations from "./TableLocations";

export default function LayoutLocations(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleLocations />
                <TableLocations />
            </div>
        </section>
    )
}