import logo from '../assets/logo.jpg';
import querc from '../assets/querc.png';

interface IProps {
  oponent: string;
  isShrunk: boolean;
}

function MatchBox(props: IProps) {
  const { oponent, isShrunk } = props;

  return (
    <div className={`flex flex-col justify-center items-center ${isShrunk ? 'h-[60px]' : 'h-[120px] text-black'}`}>
      <span className={`${isShrunk ? 'text-xs' : ''} pb-1`}>Dom. 20 novembre</span>
      <div className="flex justify-center items-center">
        <div>
          <img src={logo} className={`${isShrunk ? 'h-[30px]' : 'h-[80px]'}`}></img>
        </div>
        <span className="pl-4 pr-4">vs</span>
        <div>
          <img src={querc} className={`${isShrunk ? 'h-[30px]' : 'h-[70px]'}`}></img>
        </div>
      </div>
    </div>
  );
};

export default MatchBox;