import "../styles/Home.css";
import Movies from "../components/Home/Movies";
import DisplayAllMovie from "../components/Home/DisplayAllMovie";
import Charts from "../components/Home/Charts";

import "../styles/Charts.css";
import HeaderStatistic from "../components/Statistic/HeaderStatistic";

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
