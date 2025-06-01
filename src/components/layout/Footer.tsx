import { Link } from 'react-router-dom';

import Icon from '../common/Icon.tsx';

import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import { socialLinks } from '../../utils/socialLinks.ts';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const { t } = useTranslation('header');

  return (
    <div className="flex justify-center items-center p-11 table:px-10 table:py-[30px]">
      {isMobile ? (
        <div className={'flex flex-col gap-5 justify-center items-center w-[200px] h-auto'}>
          <ul className={'flex gap-3'}>
            {socialLinks.map((el, index) => (
              <li key={index}>
                <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'flex p-2.5 rounded-full bg-primary-cl'}
                >
                  <Icon id={el.label} width={20} height={20} color={'#330000'} />
                </a>
              </li>
            ))}
          </ul>
          <p
            className={
              'font-light text-[10px] leading-[140%] tracking-[0.1em] uppercase text-center'
            }
          >
            Hamptons & Soles © 2024 <br /> {t('footer.rights')}
          </p>
        </div>
      ) : (
        <div className={'flex justify-between items-center w-full'}>
          <ul className={'flex gap-3'}>
            {socialLinks.map((el, index) => (
              <li key={index}>
                <a
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'flex p-2.5 rounded-full bg-primary-cl'}
                >
                  <Icon id={el.label} width={20} height={20} color={'#330000'} />
                </a>
              </li>
            ))}
          </ul>
          <Link to={'/'}>
            <Icon id={'logo-1'} width={294} height={21} />
          </Link>
          <p
            className={
              'font-light text-[10px] leading-[120%] tracking-[0.1em] uppercase text-right'
            }
          >
            Hamptons & Soles © 2024 <br /> {t('footer.rights')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Footer;
