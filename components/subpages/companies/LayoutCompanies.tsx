import TableCompanies from "./TableCompanies";
import HeaderCompanies from "./HeaderCompanies";

export default function LayoutCompanies(){
    return(
        <section>
            <div className="bg-white">
                <HeaderCompanies />
                <TableCompanies />
            </div>
        </section>
    )
}