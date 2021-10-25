import classes from "./profile.module.css"

import { useContext } from "react";
import { DataContext } from "../DataProvider";
import { Link } from "react-router-dom"

import { Radar } from 'react-chartjs-2';

// const options = {
//     scale: {
//         ticks: { beginAtZero: true },
//     },
// };
function Profile(props) {

    const { data } = useContext(DataContext);
    console.log(data);
    const att = props.match.params.att;
    const value = props.match.params.value;

    const dataobj = data.find((dt) => dt[att] === value)

    if (!dataobj) return (<h1>No player found</h1>)

    const chartdata = {
        labels: ['Crossing', 'Finishing', 'HeadingAccuracy', 'Volleys'],
        datasets: [
            {
                data: [dataobj.Crossing, dataobj.Finishing, dataobj.HeadingAccuracy, dataobj.Volleys,],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };
    console.log(dataobj);
    return (
        <div>
            <Link to="/" className={classes.back}>Home</Link>
            <h1 className={classes.heading}>  {dataobj.Name}</h1>
            <div className={classes.flex}>
                <div className={classes.graph}>


                    <Radar data={chartdata} options={options} />


                </div>
                <div className={classes.profile}>
                    <span className={classes.span}>Overall <strong>{dataobj.Overall}</strong></span>
                    <span className={classes.span}>Position <strong>{dataobj.Position}</strong></span>
                    <p className={classes.age}>Age <strong>{dataobj.Age}</strong></p>
                    <p >Club <strong>{dataobj.Club}</strong></p>
                    <p >Crossing <strong>{dataobj.Crossing}</strong></p>
                    <p >Joined <strong>{dataobj.Joined}</strong></p>
                    <p >ShortPassing <strong>{dataobj.ShortPassing}</strong></p>
                    <p>Height <strong>{dataobj.Height}</strong></p>
                    <p>Weight <strong>{dataobj.Weight}</strong></p>
                    <p>Preferred Foot <strong>{dataobj["Preferred Foot"]}</strong></p>
                    <p>Position <strong>{dataobj.Position}</strong></p>
                    <p>Jersey Number <strong>{dataobj["Jersey Number"]}</strong></p>
                    <p>Joined <strong>{dataobj.Joined}</strong></p>
                    <p>Nationality <strong>{dataobj.Nationality}</strong></p>
                    <p>Value <strong>{dataobj.Value}</strong></p>
                    <p>Wage <strong>{dataobj.Wage}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Profile
