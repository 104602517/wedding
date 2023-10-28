import NameSearch from './NameSearch'
import Tables from './Tables'
import Lottie from 'react-lottie-player';
import * as bigRabbit from '../../assets/animation_lo18er86.json'

const NameSearchIndex: React.FC = () => (
  <>
    <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-rabbit'
      loop
      play
      animationData={bigRabbit}/>
    <NameSearch/>
    <Tables/>
  </>
)

export default NameSearchIndex