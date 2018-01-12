import React, {Component} from 'react';
import AppSingle from './appSingle';

export default class AppList extends Component{
    renderData(ele){  
    //     return(         
    //     ele.forEach(element => {
    //         return <AppSingle data={element}/>
    //     })

    // )

        return(
            <div className="appSingle">
            <div className="name"> Name : {ele.name.title} {ele.name.first} {ele.name.last}</div>
            <div className="email">Email : {ele.email}</div>
            <div className="address">Address : {ele.location.street} {ele.location.city} {ele.location.state}</div>
            </div>
        )
    }
    render(){
        let {data} = this.props;
       
        return(
            <div className="appList">
            {data.map(this.renderData)}
            {/* {this.renderData(data)} */}
            </div>
        )
    }
}