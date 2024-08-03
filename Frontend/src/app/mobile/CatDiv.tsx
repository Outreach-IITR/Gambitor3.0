
interface CatDivProps {
  Name: string;
  Class: string;
}

const CatDiv = ({Name,Class}:CatDivProps ) => {
  return (
    <a href="/" className='font-overpass w-[217.63px]  h-[140px] border-[3px] rounded-[18.34px] border-[#013369] flex flex-col items-center justify-evenly hover:border-[#FFE909] hover:bg-[#FFF8DD] hover:text-[#003874] '>
      <h1 className='text-[32px] font-semibold  '>{Name}</h1>
      <h1 className='text-[24px] font-bold '>{Class}</h1>
    </a>
  )
}

export default CatDiv
