import { memo } from 'react';
import logo from '../../../src/shared/assets/LOGOTYPE.svg'
import PlayMarket from '../../../src/shared/assets/image 8.png'
import AppStore from '../../../src/shared/assets/image 7.png'
import document from '../../../src/shared/assets/file-list-2-line.png'
import shining from '../../../src/shared/assets/shining-line.png'
import question from '../../../src/shared/assets/question-line.png'
import phone from '../../../src/shared/assets/phone-line.png'
import movie from '../../../src/shared/assets/movie-line.png'
import movie2 from '../../../src/shared/assets/movie-2-line.png'
import clapperboard from '../../../src/shared/assets/clapperboard-line.png'
import sport from '../../../src/shared/assets/basketball-line.png'
import insta from '../../../src/shared/assets/instagram-line.png'
import facebook from '../../../src/shared/assets/facebook-circle-line.png'
import youtube from '../../../src/shared/assets/youtube-line.png'

const Footer = () => {
  return (
    <footer>
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
            <p className='font-medium '>О нас</p>
            <li className='flex gap-[8px] items-center'>
              <img src={document} />
              <p className='font-medium '>Публичная оферта</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={shining} />
              <p className='font-medium '>Реклама</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={question} />
              <p className='font-medium '>F.A.Q</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={phone} />
              <p className='font-medium '>Контакты</p>
            </li>
          </ul>
          <ul className='flex flex-col gap-[20px]'>
            <p className='font-medium '>Категории</p>
            <li className='flex gap-[8px] items-center'>
              <img src={movie} />
              <p className='font-medium '>Кино</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={clapperboard} />
              <p className='font-medium '>Театр</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={movie2} />
              <p className='font-medium '>Концерты</p>
            </li>
            <li className='flex gap-[8px] items-center'>
              <img src={sport} />
              <p className='font-medium '>Спорт</p>
            </li>
          </ul>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-[20px]'>
              <p className='font-medium '>Связаться с нами</p>
                <p className='font-medium text-[#C61F1F] text-[20px]'>+998 (90) 813-64-03</p>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <p className='font-medium '>Социальные сети</p>
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