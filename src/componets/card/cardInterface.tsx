export interface props{
    icon: string
    title: string
    amount: any
    className?: string
}

const CardInterface = (props: props) => {
  return (
    <div className={props.className}>
        <img alt={props.title} src={props.icon} />
        <h5>{props.title}</h5>
        <div>{props.amount}</div>
    </div>
  )
}

export default CardInterface