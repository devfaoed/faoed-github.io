function Card(props) {
    return(
        <div className="tc bg-light-green dib pa3 ma3 br3 grow bw2 shadow-5">
            <h1>Robort friends</h1>
            <img alt="roborts" src={`https://robohash.org/${props.id}?200X200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;