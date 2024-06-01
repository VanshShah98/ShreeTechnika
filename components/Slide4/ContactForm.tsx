import Image from 'next/image'
import Form from './DetailForm'

export default function FormSlide() {
  return (
    <>
    <section id='Touch'>
    <div className='bg-white flex flex-row h-auto pt-16  pb-20 justify-center'>
        <div>
            <Form/>
        </div>
    </div>
    </section>
    </>
  )
}

