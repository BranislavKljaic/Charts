import { Card, styled } from "@mui/material";

const MainDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginTop: "100px",
  gap: '20px',
}));

const AprChartDiv = styled("div")(() => ({
  minWidth: "600px",
}));

const TvlChartDiv = styled("div")(() => ({
  minWidth: "600px",
}));

const ApiDataInformation = styled("div")(() => ({
  color: "#fff",
}));

const ApiDataSingleInformation = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const ApiDataSingleInformationData = styled("p")(() => ({
  color: "#FF00FF",
}));

const ChartWrapper = styled(Card)(() => ({
  backgroundColor: "#58577d",
  borderRadius: "15px",
}));

export {
  MainDiv,
  AprChartDiv,
  TvlChartDiv,
  ApiDataInformation,
  ApiDataSingleInformation,
  ApiDataSingleInformationData,
  ChartWrapper,
};
