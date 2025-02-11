import heroData from '@/components/Hero/heroData';
import CanvasWrapper from '@/components/Hero/CanvasWrapper';
import CallToAction from '../CallToAction/CallToAction';
import parse from 'html-react-parser';

export default async function Main(props: { canvas?: boolean }) {
  const isCanvas = props.canvas || false;
  const hero = await heroData();
  return (
    <>
      {isCanvas ? (
        <CanvasWrapper>hi world</CanvasWrapper>
      ) : (
        <div
          className='w-full h-screen overflow-hidden bg-hero-pattern bg-cover bg-center bg-opacity-100 p-0 mx-auto'
          style={{ height: 'calc(100vh - 78px)' }}
        >
          <div className='container h-full  text-slate-300'>
            <div className='flex w-full my-50 h-full flex-col lg:flex-row items-stretch justify-between'>
              <div className='my-auto mt-10 text-wrap backdrop-blur-xl p-10 pt-5 rounded-2xl shadow-md lg:mt-auto lg:mx-auto lg:basis-2/3 lg:max-w-[70%] flex-grow'>
                <h1
                  className='text-[32px] text-wrap text-[#ddf]'
                  style={{ textShadow: '1px 1px 2px black' }}
                >
                  {parse(hero.title)}
                </h1>
                <h2
                  className='text-[22px] text-[#ddf] text-justify font-thin'
                  style={{ textShadow: '1px 1px 1px black' }}
                >
                  {parse(hero.description)}
                </h2>
              </div>
              <div className='flex justify-center items-center w-auto grow-0 my-auto basis-2/3 lg:m-auto'>
                <CallToAction
                  label={hero.callToAction?.label}
                  url={hero.callToAction?.url}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
