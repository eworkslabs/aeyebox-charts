import TitleLines from "./TitleLines";
import TableLines from "./TableLines";
import Welcome from "@/components/overview/Welcome";

export default function LayoutLines(){
    return(
        <section>
            <div>
                <Welcome/>
            </div>
            <div className="bg-white">
                <TitleLines />
                <TableLines />
            </div>
        </section>
    )
}