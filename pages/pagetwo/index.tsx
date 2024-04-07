import LateralMenu from "@/components/lateralmenu/LateralMenu";
import Overview from "@/components/overview/Overview";

export default function Teste() {
  return(
    <div>
      <div className="Overview">
      <Overview />
      </div>
      <div className="LateralMenu">
       <LateralMenu />
      </div>
    </div>
  )
}