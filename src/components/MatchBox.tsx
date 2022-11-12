import clsx from 'clsx';
import logo from '../assets/logo.jpg';
import querc from '../assets/querc.png';

export type MatchBoxSize = 'S' | 'M';

interface IProps {
  oponent: string;
  size: MatchBoxSize;
};

const matchBoxSize: Record<MatchBoxSize, string> = {
  'S': 'h-[60px]',
  'M': 'h-[120px] text-black'
};

const matchBoxTitleSize: Record<MatchBoxSize, string> = {
  'S': 'text-xs',
  'M': ''
};

const matchBoxLogoSize: Record<MatchBoxSize, string> = {
  'S': 'h-[30px]',
  'M': 'h-[80px]'
};

function MatchBox(props: IProps) {
  const { oponent, size } = props;

  return (
    <div className={clsx('flex flex-col justify-center items-center', matchBoxSize[size])}>
      <span className={clsx('pb-1', matchBoxTitleSize[size])}>Dom. 20 novembre</span>
      <div className="flex justify-center items-center">
        <div>
          <img src={logo} className={clsx(matchBoxLogoSize[size])}></img>
        </div>
        <span className="pl-4 pr-4">vs</span>
        <div>
          <img src={querc} className={clsx(matchBoxLogoSize[size])}></img>
        </div>
      </div>
    </div>
  );
};

export default MatchBox;