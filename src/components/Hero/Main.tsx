import heroData from '@/components/Hero/heroData';
import MainWrapper from '@/components/MainWrapper';
import CanvasWrapper from '@/components/Hero/CanvasWrapper';
const hero = heroData();

export default function Main(props: { canvas?: boolean }) {
  const isCanvas = props.canvas || false;
  return (
    <>
      {isCanvas ? (
        <CanvasWrapper>hi world</CanvasWrapper>
      ) : (
        <div className='w-full h-screen bg-slate-700 bg-opacity-100 p-0 mx-auto'>
          <div className='container text-slate-300'>
            hero main: {hero.title}
          </div>
        </div>
      )}
    </>
  );
}
