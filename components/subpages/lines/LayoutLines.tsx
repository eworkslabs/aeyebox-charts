import HeaderSubPage from "@/components/headersubpage/HeaderSubPage";
import TitleLines from "./TitleLines";
import TableLines from "./TableLines";

export default function LayoutLines(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleLines />
                <TableLines />
            </div>
        </section>
    )
}