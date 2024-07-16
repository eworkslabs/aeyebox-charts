import HeaderSubPage from "../../headersubpage/HeaderSubPage";
import TitleCompany from "./TitleCompany";

export default function LayoutCompanies(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleCompany />
            </div>
        </section>
    )
}