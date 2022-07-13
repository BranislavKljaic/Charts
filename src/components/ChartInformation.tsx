import React, { FC } from "react";
import {
  ApiDataSingleInformation,
  ApiDataSingleInformationData,
} from "../ui/AppUI";

const ChartInformation: FC<{ apiData: any }> = ({ apiData }) => {
  return (
    <>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Asset:</ApiDataSingleInformationData>
        {apiData.asset}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Asset ID:</ApiDataSingleInformationData>
        {apiData.assetId}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Blockchain:</ApiDataSingleInformationData>
        {apiData.blockchain}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Date added:</ApiDataSingleInformationData>
        {apiData.dateAdded}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>
          Date updated:
        </ApiDataSingleInformationData>
        {apiData.dateUpdated}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Farm:</ApiDataSingleInformationData>
        {apiData.farm}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Farm ID:</ApiDataSingleInformationData>
        {apiData.farmId}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Farm name:</ApiDataSingleInformationData>
        {apiData.farmName}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>
          Reward token B:
        </ApiDataSingleInformationData>
        {apiData.rewardTokenB}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Source:</ApiDataSingleInformationData>{" "}
        {apiData.source}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>
          Staking link:
        </ApiDataSingleInformationData>
        {apiData.stakingLink}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>
          TVL change 24h:
        </ApiDataSingleInformationData>
        {apiData.tvlChange24h}
      </ApiDataSingleInformation>
      <ApiDataSingleInformation>
        <ApiDataSingleInformationData>Yield type:</ApiDataSingleInformationData>
        {apiData.yieldType}
      </ApiDataSingleInformation>
    </>
  );
};

export default ChartInformation;
