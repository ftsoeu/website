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
        <>
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

          <div>
            <div className='p-12 text-center'>
              <p className='text-lg'>
                We are a European based Signal Infrastructure Provider on the
                Flare Network.
              </p>
              <p className='text-md text-gray-600 mt-2'>
                We collect latest price ticker from multiple data sources
                (exchanges, dex and defi).
              </p>
            </div>
          </div>

          <div className='w-full text-slate-300 bg-gradient-to-b from-primary to-purple-950 bg-primary'>
            <div className='container'>
              <div className='flex flex-wrap justify-between items-center gap-8  text-white py-8'>
                <div className='p-6 w-full lg:w-80 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl'>
                  <h3 className='text-xl font-bold mb-2'>Earn FLR</h3>
                  <p className='font-ultralight'>
                    Earn FLR by your vote&apos;s delegation to us and our
                    system. Simply connect your Metamask or any other wallet.
                  </p>
                </div>
                <div className='p-6 w-full lg:w-80 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl'>
                  <h3 className='text-xl font-bold mb-2'>Risk Free</h3>
                  <p className='font-ultralight'>
                    While you connect with us by your wallet, your Sparks will
                    be always under your strict control. Your Keys, your Money!
                  </p>
                </div>
                <div className='p-6 w-full lg:w-80 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl'>
                  <h3 className='text-xl font-bold mb-2'>
                    Fast, Secure and Cheap
                  </h3>
                  <p className='font-ultralight'>
                    Earn Flare by your vote&apos;s delegation to us and our
                    system. Simply connect your Metamask or any other wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className='text-center py-8'>
            <p className='text-lg font-semibold'>
              We supply Signals under a set of main principles and rules:
            </p>
            <div className='flex justify-center lg:space-x-4 mt-4 text-gray-700 font-medium'>
              <span>Accuracy</span>
              <span>|</span>
              <span>Resiliency</span>
              <span>|</span>
              <span>Scalability</span>
              <span>|</span>
              <span>Privacy</span>
              <span>|</span>
              <span>Transparency</span>
            </div>
          </div>*/}
        </>
      )}
    </>
  );
}
