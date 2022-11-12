import logo from '../assets/logo.jpg';
import querc from '../assets/querc.png';
import MatchBox from './MatchBox';

interface IProps {
  oponent: string;
  isShrunk: boolean;
}

function MatchesCarousel(props: IProps) {
  const { oponent, isShrunk } = props;

  return (
    <div className={`justify-between ${isShrunk ? 'hidden' : 'flex'} duration-1000`}>
      <MatchBox oponent={oponent} isShrunk={isShrunk} />
      <MatchBox oponent={oponent} isShrunk={isShrunk}  />
    </div>
  );
};

export default MatchesCarousel;