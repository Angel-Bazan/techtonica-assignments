import { useState, useEffect } from "react"; 


const Weather = (props) => {
        // const APIKEY = "91290aa34b77dd1517169822a284b6a8";
        const [weather, setWeather] = useState([]);

        const loadData = () =>{
            fetch('http://localhost:8080/api/weather')
            .then((response) => response.json())
            .then(data => {
                setWeather(data);
            })
        }

        useEffect(() =>{
            loadData(); 
        }, [])

       
        return (
            <div className="Container">
                <h1>Let's get the weather!</h1>
                {students.map((student, index)=>{
                    return (<div key={index}>
                        <p>{student.firstname}{student.lastname}</p>
                    </div>)
                })}

            </div>
        )
}

export default Weather;