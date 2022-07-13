import React, { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  AprChartDiv,
  MainDiv,
  TvlChartDiv,
  ApiDataInformation,
  ChartWrapper,
} from "./ui/AppUI";
import moment from "moment";
import gradient from "chartjs-plugin-gradient";
import { aprChartOptions, tvlChartOptions } from "./options/ChartOptions";
import ChartInformation from "./components/ChartInformation";

const Chart = () => {
  const [apiData, setApiData] = useState<any>();
  const [apiDataApr, setApiDataApr] = useState<any>();
  const [apiDataTVL, setApiDataTvl] = useState<any>();
  const [check, setCheck] = useState<any>();
  const countDownNumber = 10;
  const [countDown, setCountDown] = useState(countDownNumber);
  ChartJS.register(...registerables, gradient);

  useEffect(() => {
    fetch(
      "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/BNB_Pancakeswap__WBNB-BUSD"
    )
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .then(() => setCheck(true));
  }, []);

  useEffect(() => {
    if (check) {
      setApiDataApr({
        labels: apiData.aprHistory.map((data: any) =>
          moment(data.date).format("MMM DD")
        ),
        type: "line",
        datasets: [
          {
            display: true,
            label: "Asset APR (y)",
            data: apiData.aprHistory.map((data: any) => data.value),
            borderColor: "#AA336A",
            fill: true,
            pointRadius: 0,
            gradient: {
              backgroundColor: {
                axis: "y",
                colors: {
                  0: "rgb(100, 149, 237, 0.5)",
                  10: "rgba(102, 51, 153, 0.5)",
                },
              },
            },
          },
        ],
      });
      setApiDataTvl({
        labels: apiData.tvlStakedHistory.map((data: any) =>
          moment(data.date).format("MMM DD")
        ),
        type: "line",
        datasets: [
          {
            label: "Asset TVL",
            data: apiData.tvlStakedHistory.map((data: any) => data.value),
            borderColor: "#AA336A",
            fill: true,
            pointRadius: 0,
            gradient: {
              backgroundColor: {
                axis: "y",
                colors: {
                  0: "rgb(100, 149, 237, 0.5)",
                  270000000: "rgba(102, 51, 153, 0.5)",
                },
              },
            },
          },
        ],
      });
      setCheck(false);
    }
  }, [apiData, check]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownNumber - 1);
      apiData.aprHistory.forEach((data: any) => {
        data.value += data.value * 0.05;
      });
      setCheck(true);
    }, 10000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <MainDiv>
      <AprChartDiv>
        {apiDataApr ? (
          <ChartWrapper>
            <LineChart chartData={apiDataApr} chartOptions={aprChartOptions} />
          </ChartWrapper>
        ) : (
          <></>
        )}
      </AprChartDiv>
      <TvlChartDiv>
        {apiDataTVL ? (
          <ChartWrapper>
            <LineChart chartData={apiDataTVL} chartOptions={tvlChartOptions} />
          </ChartWrapper>
        ) : (
          <></>
        )}
      </TvlChartDiv>
      <ApiDataInformation>
        {apiData ? <ChartInformation apiData={apiData} /> : <></>}
      </ApiDataInformation>
    </MainDiv>
  );
}

export default Chart;
