class Foods extends React.Component {
    render() {
        const my_card = {
            padding: "0",
            margin: "5px",
            borderRadius: "10px",
            overflow: "hidden"
        }
        //this.props.data.length = 50;
        const foodList = this.props.data.map((element, index) =>
            <div className="col-3" key={index}>
                <div className="card" style={my_card}>
                    <img style={{height: '200px', width: '100%', display: 'block'}} src={element.image} alt="Card image"/>
                    <div className="card-body">
                        <p className="card-text">{element.name}</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                    <div className="card-footer text-muted">
                        {element.description}
                    </div>
                </div>
            </div>
        );
        return (
            <div className="row">
                {foodList}
            </div>
        )
    }
}
export default Foods;