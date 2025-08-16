import { memo } from 'react';
import logo from '../../../public/LOGOTYPE.svg'
import PlayMarket from '../../../public/image 8.png'
import AppStore from '../../../public/image 7.png'
import document from '../../../public/file-list-2-line.png'
import shining from '../../../public/shining-line.png'
import question from '../../../public/question-line.png'
import phone from '../../../public/phone-line.png'
import movie from '../../../public/movie-line.png'
import movie2 from '../../../public/movie-2-line.png'
import clapperboard from '../../../public/clapperboard-line.png'
import sport from '../../../public/basketball-line.png'
import insta from '../../../public/instagram-line.png'
import facebook from '../../../public/facebook-circle-line.png'
import youtube from '../../../public/youtube-line.png'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='container'>
        <div className='rounded-[12px] bg-[#111111] grid grid-cols-4 p-[30px] gap-[30px] max-[930px]:grid-cols-2 max-[520px]:grid-cols-1'>
          <div>
            <img src={logo}/>
            <div className='flex flex-col gap-[8px] items-start mt-[50px]'>
              <img src={PlayMarket}/>
              <img src={AppStore}/>
            </div>
          </div>
          <ul className='flex flex-col gap-[20px]'>
            <p className='font-medium text-white'>О нас</p>
            <li className='flex gap-[8px] items-center'>
              <img src={document} />
              <p className='font-medium text-white'>Публичная оферта</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={shining} />
              <p className='font-medium text-white'>Реклама</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={question} />
              <p className='font-medium text-white'>F.A.Q</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={phone} />
              <p className='font-medium text-white'>Контакты</p>
            </li>
          </ul>
          <ul className='flex flex-col gap-[20px]'>
            <p className='font-medium text-white'>Категории</p>
            <li className='flex gap-[8px] items-center'>
              <img src={movie} />
              <p className='font-medium text-white'>Кино</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={clapperboard} />
              <p className='font-medium text-white'>Театр</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={movie2} />
              <p className='font-medium text-white'>Концерты</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={sport} />
              <p className='font-medium text-white'>Спорт</p>
            </li>
          </ul>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px]'>
              <p className='font-medium text-white'>Связаться с нами</p>
                <p className='font-medium text-[#C61F1F] text-[20px]'>+998 (90) 813-64-03</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <p className='font-medium text-white'>Социальные сети</p>
              <div className='flex items-center gap-[20px]'>
                <img src={insta}/>
                <img src={facebook}/>
                <img src={youtube}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);