import Slider from './swiper'
import Text from './text'

export default function Slide3() {
  return (
    <>
      <section id="Capabilities">
        <div className='bg-[#040A3D] flex flex-col lg:flex-row h-auto lg:h-[600px]'>
          <div className='w-full lg:w-[50%] p-4 lg:pl-36 lg:pt-32'>
            <Text />
          </div>
          <div className='lg:pl-40'>
            <div className='rounded-lg shadow-md lg:w-96 lg:h-96 lg:pt-14 '>
              <Slider />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
