
export interface props{
    id:string
    organization: string
    username: string
    email:string
    phoneNumber: string
    dateJoined:string
    status:string
    className?: string
    icon:string
    click:any
}

const UserInterface = (props: props) => {
  return (
        <tr className={props.className} key={props.id}>
            <td>{props.organization}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.dateJoined}</td>
            <td>{<img alt='edit' src={props.status}/>}</td>
            <td><button onClick={props.click}><img alt='edit' src={props.icon}/></button></td>
        </tr>
  )
}

export default UserInterface