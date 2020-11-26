import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';


const Dashboard = (props) => {
    const users = useSelector(state => state.registationReducer.login);

    console.log(users);
    console.log(users?.AUTH_LOGIN);
    return (
        <>
            { (users?.AUTH_LOGIN) ?
                <div className="App">
                    <AppBar
                        title="DashBoard"
                    />
                DashBoard </div> : <Redirect to="/" />}
        </>
    )
}
export default Dashboard;