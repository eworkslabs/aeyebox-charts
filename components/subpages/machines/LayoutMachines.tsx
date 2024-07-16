import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleMachines from "./TitleMachines";


export default function LayoutMachines(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleMachines />
            </div>
        </section>
    )
}