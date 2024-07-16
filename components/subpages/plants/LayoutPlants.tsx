import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitlePlants from "./TitlePlants";


export default function LayoutPlants(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitlePlants />
            </div>
        </section>
    )
}