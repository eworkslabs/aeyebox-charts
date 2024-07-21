import HeaderSubPage from "../../headersubpage/HeaderSubPage";
import TableCompany from "./Tables";
import TitleCompany from "./TitleCompany";

export default function LayoutCompanies(){
    return(
        <section>
            <div>
                <HeaderSubPage/>
            </div>
            <div className="bg-white">
                <TitleCompany />
                <TableCompany />
            </div>
        </section>
    )
}