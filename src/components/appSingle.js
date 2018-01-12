import React ,{Component} from 'react';


export default class AppSingle extends Component{
    render(){
        let {data} = this.props
        
        return(
            <div className="appSingle">
            <div className="name"> Name : {data.name.title} {data.name.first} {data.name.last}</div>
            <div className="email">Email : {data.email}</div>
            <div className="address">Address : {data.location.street} {data.location.city} {data.location.state}</div>
            </div>
        )
    }
}