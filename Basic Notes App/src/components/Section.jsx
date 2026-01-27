import CloseIcon from '@mui/icons-material/Close';

const Section = ({object , description , func , index}) => {
    return (
        <>
        <section className='p-[10px]'>
        <div className='border relative bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover w-[170px] h-[210px] rounded-[10px] py-[20px] px-[10px] overflow-hidden'>
          <h2 onClick={() => {func(index)}} className='absolute top-4 cursor-pointer right-3'><CloseIcon /></h2>
          <h3 className='text-gray-700'>{object}</h3>
          <p className='text-[11px]'>{description}</p>
        </div>
      </section>
        </>
    )
}
export default Section;