import { memo } from 'react';
import logo from '../../../../public/LOGOTYPE.svg'

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
        <img src={logo} />
    </div>
  );
};

export default memo(Loading);