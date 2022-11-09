export interface props{
    organization: string
    username: string
    email:string
    phoneNumber: string
    dateJoined:string
    status:string
    className?: string
}

const UserInterface = (props: props) => {
  return (
        <tr className={props.className}>
            <td>{props.organization}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.dateJoined}</td>
            <td>{props.status}</td>
            <td><button>\\</button></td>
        </tr>
  )
}

export default UserInterface