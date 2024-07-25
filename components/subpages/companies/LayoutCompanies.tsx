import Welcome from "@/components/overview/Welcome";
import TableCompany from "./Tables";
import TitleCompany from "./TitleCompany";

export default function LayoutCompanies(){
    return(
        <section>
            <div>
                <Welcome/>
            </div>
            <div className="bg-white">
                <TitleCompany />
                <TableCompany />
            </div>
        </section>
    )
}