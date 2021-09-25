import Card from "./Card";

function CardList({robort}){
    const CardComponent = robort.map((user, i) => {
        return <Card key={i} id={robort[i].id} name={robort[i].name} username={robort[i].username} email={robort[i].email} />
    });
    return(
        <div>
            {CardComponent};
        </div>
    );
}

export default CardList;