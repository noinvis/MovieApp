import { memo } from 'react';
import img from '../../../src/shared/assets/logo.svg'
import { NavLink } from 'react-router-dom';
import banner from '../../../src/shared/assets/tv-2-fill.png'
import season from '../../../src/shared/assets/tablet-line.png'
import ticket from '../../../src/shared/assets/coupon-3-line.png'
import find from '../../../src/shared/assets/search-line.png'

const Header = () => {
  return (
    <header className='w-full sticky top-0 z-20 h-[80px] bg-black'>
      <nav className='container flex justify-between items-center h-full'>
        <div>
          <NavLink to={"/"}>
            <img src={img}/>
          </NavLink>
        </div>
        <ul className='flex items-center max-[670px]:hidden'>
          <li>
            <NavLink to={"/"} className={"flex flex-col items-center py-[3px] px-[10px]"}>
              <img src={banner}/>
              <p className='text-[#A1A1A1] text-[14px] font-medium'>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/movies"} className={"flex flex-col items-center py-[3px] px-[10px]"}>
              <img src={season}/>
              <p className='text-[#A1A1A1] text-[14px] font-medium'>Movies</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/bookmark"} className={"flex flex-col items-center py-[3px] px-[10px]"}>
              <img src={ticket}/>
              <p className='text-[#A1A1A1] text-[14px] font-medium'>Bookmark</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/find"} className={"flex flex-col items-center py-[3px] px-[10px]"}>
              <img src={find}/>
              <p className='text-[#A1A1A1] text-[14px] font-medium'>Find</p>
            </NavLink>
          </li>
        </ul>
        <div className=''>
          <button className='py-[18px] px-[65px] rounded-[12px] bg-[#C61F1F] text-white font-medium max-[520px]:px-[45px] max-[520px]:py-[8px]'>Войти</button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);