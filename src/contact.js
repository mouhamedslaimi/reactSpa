import React, { Component } from "react";
import {MapContainer} from './MapContainer';
class contact extends Component {
render() {
return (
<div>
    <div>
    <h1>Contact </h1>
    <p>Adress :  xx rue yy num zz</p>
    <p>tel : xxx-xxx-xxx-xxx</p>
    <p>email : exemple@exemple.com</p>
    </div>
    <MapContainer/>
    </div>
);
}
}
export default contact;