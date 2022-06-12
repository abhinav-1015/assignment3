import React, { Component } from 'react';


const styles={
    display:"flex",
    justifyContent:"center",
    margin:"20px",
    

}
class User extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false
        };
    }

    componentDidMount(){
        fetch("http://refertest.pythonanywhere.com/user/data")
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                items:json.data,
                isLoaded:true
            })
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }
    

    render() { 
        const {isLoaded,items}=this.state;
        if(!isLoaded){
            return <div>Loading...</div>;
        }
        return (
            <div style={styles}>
                <ul>
                    <img src={items.pictureUrl} alt="" />
                    <h5>Name:{items.name}</h5>
                    <h5>College:{items.college}</h5>
                    
                </ul>
            </div>
        );
    }
}
 
export default User;