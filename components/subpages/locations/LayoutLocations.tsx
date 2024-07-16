import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleLocations from "./TitleLocations";

export default function LayoutLocations(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleLocations />
            </div>
        </section>
    )
}