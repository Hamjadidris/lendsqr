import CardInterface from "./cardInterface"
import './card.scss'
import card1 from '../../assets/cards/card1.svg'
import card2 from '../../assets/cards/card2.svg'
import card3 from '../../assets/cards/card3.svg'
import card4 from '../../assets/cards/card4.svg'
import {useSpring, animated} from 'react-spring'

function Number({ n }:any) {
    const { number } = useSpring({
        from: { number:0 },
        number: n,
        delay: 100,
        config: { mass: 1, tension: 20, friction: 10 },
    })
    return <animated.div>{ number.to( (n) => n.toFixed(0)) }</animated.div>
}

const Card = () => {

  return (
    <div className='cards'>
    <CardInterface title='USERS' icon={card1} amount={<Number n={2453}/>} className='card'/>
    <CardInterface title='ACTIVE USERS' icon={card2} amount={<Number n={2453}/>} className='card'/>
    <CardInterface title='USERS WITH LOANS' icon={card3} amount={<Number n={12453}/>} className='card'/>
    <CardInterface title='USERS WITH SAVINGS' icon={card4} amount={<Number n={102453}/>} className='card'/>
  </div>
  )
}

export default Card