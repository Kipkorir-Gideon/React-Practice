import Profile from './Profile'

function Card(props) {
    return (
      <div className="card">
        <div className="top">
          <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Profile img={props.img} />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    )
  }

  function Emoji(props) {
    return(
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">{props.icon}</span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
      </dl>
    )
  }


  export {Card, Emoji};