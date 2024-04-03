import DatePicker from "@/components/calendar/DatePicker";
import Selects from "@/components/selects/Selects";
import Graphic from "@/components/chart/charts";
import Kpis from "@/components/kpi/kpis";


const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Selects />
      </div>
      <div>
        <Kpis />
      </div>
      <div className="Calendar p-4 ">
        <DatePicker />
      </div>
      <div>
        <Graphic />
      </div>
    </div>
  );
};

export default Home;