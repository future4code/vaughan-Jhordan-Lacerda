export default function ProfileCard(props) {
  return (
      <div>
        <div><img src={props.profile.photo}/></div>
        <div>
            <p>{props.profile.name}</p>
            <p>{props.profile.bio}</p>
        </div>
      </div>
  )
}
