export default function ProfileCard(props) {
    console.log("dentro", props.profile)
  return (
      <>
        <div><img src={props.profile.photo}/></div>
        <div>
            <p>{props.profile.name}</p>
            <p>{props.profile.bio}</p>
        </div>
      </>
  )
}
