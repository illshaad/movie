import "../styles/Home.css";
import Movies from "../components/Home/Movies";
import DisplayAllMovie from "../components/Home/DisplayAllMovie";
import Charts from "../components/Home/Charts";
import HeaderStatistic from "../components/Statistic/HeaderStatistic";

import "../styles/Charts.css";

export default function Home() {
  return (
    <div>
      <Movies />
      <DisplayAllMovie />
      <HeaderStatistic />
      <Charts />
    </div>
  );
}
