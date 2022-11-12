import logo from '../assets/logo.jpg';
import querc from '../assets/querc.png';
import MatchBox, { MatchBoxSize } from './MatchBox';

interface IProps {
  oponent: string;
  size: MatchBoxSize;
}

function MatchesCarousel(props: IProps) {
  const { oponent, size } = props;

  return (
    <div className={`flex justify-between`}>
      <MatchBox oponent={oponent} size={size} />
      <MatchBox oponent={oponent} size={size}  />
    </div>
  );
};

export default MatchesCarousel;