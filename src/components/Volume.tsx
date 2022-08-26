import React from "react";
import { VolumeKnob, Indicator } from "../styles/Volume.style";
import { VolumeWrapper } from "../styles/Octave.style";

type Props = {
  raiseVolume: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lowerVolume: (e: React.MouseEvent<HTMLButtonElement>) => void;
  volume: number;
};

const Volume: React.FC<Props> = ({ raiseVolume, lowerVolume, volume }) => {
  return (
    <VolumeWrapper>
      <VolumeKnob onClick={raiseVolume}>Volume Up</VolumeKnob>
      <VolumeKnob onClick={lowerVolume}>Volume Down</VolumeKnob>
      <Indicator>{Math.round(volume * 100)}%</Indicator>
    </VolumeWrapper>
  );
};

export default Volume;
