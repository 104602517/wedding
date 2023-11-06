import NameSearch from './NameSearch'
import Tables from './Tables'
import Lottie from 'react-lottie-player';
import * as bigRabbit from '../../assets/animation_lo18er86.json'
import * as flower from '../../assets/animation_lofl1a2z.json'

const NameSearchIndex: React.FC = () => (
  <>
    <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-rabbit'
      loop
      play
      speed={1.2}
      animationData={bigRabbit}/>
    <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-flower'
      loop
      play
      animationData={flower}/>
    <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-flower-2'
      loop
      play
      speed={0.9}
      animationData={flower}/>
    <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-flower-3'
      loop
      play
      speed={1.1}
      animationData={flower}/>
    <NameSearch/>
    <Tables/>
  </>
)

export default NameSearchIndex