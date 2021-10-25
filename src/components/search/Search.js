import classes from "./search.module.css"

import { useState, useContext } from 'react'

import { DataContext } from "../DataProvider"
import { Link, useHistory } from "react-router-dom";

function Search() {

    const { data } = useContext(DataContext);
    console.log(data);
    const [val, setVal] = useState("");
    const [att, setAtt] = useState("Name");
    const history = useHistory();

    const clickHandler = () => {
        history.push(`/player/${att}/${val}`)
    }

    return (
        <div className={classes.container}>
            <div className={classes.searchContainer}>
                <h1 className={classes.heading}>FIFA 19</h1>
                <form className={classes.search} onSubmit={e => e.preventDefault()}>
                    <div className={classes.leftcont}>
                        <input className={classes.inp} onChange={e => setVal(e.target.value)} type="text" placeholder='Search Player' value={val} />
                        <button onClick={clickHandler} className={classes.btn} type='submit'>Search</button>
                        <select onChange={(e) => setAtt(e.target.value)} className={classes.select} value={att}>
                            <option value="Name">Name</option>
                            <option value="Club">Club</option>
                            <option value="Nationality">Nationality</option>
                            <option value="Position">Position</option>
                        </select>
                        <div className={classes.searchres}>
                            {data.map((dt) => {
                                if (dt[att] === val) {
                                    return <Link className={classes.link} to={`/player/${att}/${val}`} > {val}</Link>
                                }
                            })}
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Search
