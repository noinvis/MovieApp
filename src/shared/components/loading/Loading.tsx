import { memo } from 'react';
import logo from '../../../../src/shared/assets/LOGOTYPE.svg'

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black dark:bg-white">
        <img src={logo} />
    </div>
  );
};

export default memo(Loading);