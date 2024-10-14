import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App({}) {
  const [color, setColor] = useState('')

  const infoAdd = useCallback(() => {
    if(color == 'red'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Red is a powerful and dynamic color associated with strong emotions like love, passion, danger, and energy. It grabs attention, symbolizing both excitement and warning. In design, it's often used to highlight important elements due to its high visibility. Red is culturally significant—linked to luck and celebration in China, and power or courage in many cultures. Psychologically, it can increase energy levels and stimulate appetite. Its shades range from bright scarlet to deep maroon, offering versatility in meaning and use.`
    }
    if(color == 'green'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Green is a calming and refreshing color, often associated with nature, growth, and harmony. It symbolizes life, renewal, and fertility. In many cultures, green represents balance, peace, and prosperity. It is also linked to environmental consciousness and health.`
    }
    if(color == 'blue'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Blue is a calming and serene color, often associated with the sky, water, and tranquility. It symbolizes trust, stability, and loyalty, making it a popular choice for corporate branding and uniforms. Blue can evoke feelings of peace and relaxation, and is linked to intelligence, responsibility, and wisdom.`
    }
    if(color == 'violet'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Violet is a color associated with creativity, mystery, and spirituality. It combines the calm stability of blue with the energy of red, making it a symbol of balance between opposites. Historically, violet has been linked to royalty, luxury, and wealth because the dye was rare and expensive to produce.`
    }
    if(color == 'pink'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Pink is a soft, gentle color often associated with love, affection, and compassion. It combines the passion of red with the calmness of white, creating a color that symbolizes nurturing, tenderness, and innocence. Pink is frequently linked to femininity, romance, and sweetness, though it has also grown to represent playfulness and fun.`
    }
    if(color == 'black'){
      document.getElementById('info').style.color = `white`
      document.getElementById('info').innerHTML = `Black is a powerful and versatile color, often associated with elegance, sophistication, and mystery. It represents strength, authority, and formality, commonly used in fashion (e.g., the classic "little black dress") and luxury branding. At the same time, black can symbolize darkness, the unknown, or even mourning and grief in many cultures.`
    }
    if(color == 'yellow'){
      document.getElementById('info').innerHTML = `Yellow is a bright, cheerful color associated with happiness, optimism, and energy. It often evokes feelings of warmth and joy, reminiscent of sunlight and springtime. Yellow is linked to creativity, clarity, and intellect, making it a popular choice in design to grab attention and inspire enthusiasm.`
      document.getElementById('info').style.color = `black`
    }
    if(color == 'orange'){
      document.getElementById('info').innerHTML = `Orange is a vibrant and energetic color associated with enthusiasm, creativity, and warmth. It combines the energy of red with the cheerfulness of yellow, making it a symbol of excitement and fun. Orange is often linked to feelings of adventure and playfulness, and it can stimulate appetite, which is why it's commonly used in food branding.`
      document.getElementById('info').style.color = `white`

    }
  }, [color])

  useEffect(() => {
    infoAdd()
  }, [color, infoAdd])

  return (
    <>
     <div className='w-screen h-screen' style={{backgroundColor : color}}>
        <div className='w-3/4 h-24 bg-red-200 rounded-2xl m-auto relative top-8'>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-red-600 p-4 text-white rounded-lg'
          onClick={() => setColor('red')}
          >red</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-green-600 p-4 text-white rounded-lg'
          onClick={() => setColor('green')}
          >green</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-blue-600 p-4 text-white rounded-lg'
          onClick={() => setColor('blue')}
          >blue</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-violet-600 p-4 text-white rounded-lg'
          onClick={() => setColor('violet')}
          >violet</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-pink-600 p-4 text-white rounded-lg'
          onClick={() => setColor('pink')}
          >pink</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-black p-4 text-white rounded-lg'
          onClick={() => setColor('black')}
          >black</span></button>
          <button className='cursor-pointer w-[12.5%] h-full'><span className='bg-yellow-500 p-4 text-white rounded-lg'
          onClick={() =>setColor('yellow')}
          >yellow</span></button>
          <button className='cursor-pointer w-[12.5%] h-full positionspan'><span className='bg-orange-500 p-4 text-white rounded-lg'
          onClick={() => setColor('orange')}
          >orange</span></button>
        </div>
        <div className='flex justify-center items-center w-3/4 h-2/4 m-auto relative top-8 text-3xl text-white italic'>
          <span id='info' className='text-black center'>Information about color</span>
        </div>
     </div>
    </>
  )
}

export default App
