import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleLines from "./TitleLines";

export default function LayoutLines(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleLines />
            </div>
        </section>
    )
}