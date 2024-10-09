import HeaderLines from "./HeaderLines";
import TableLines from "./TableLines";

export default function LayoutLines(){
    return(
        <section>
            <div className="bg-white">
                <HeaderLines />
                <TableLines />
            </div>
        </section>
    )
}