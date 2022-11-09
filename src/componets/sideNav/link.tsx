export interface props{
    icon: string
    title: string
    className?: string
}

const Link = (props: props) => {
  return (
    <li className={props.className}>
        <img alt={props.title} src={props.icon} />
        <h5>{props.title}</h5>
    </li>
  )
}

export default Link