import { useState, useEffect } from "react"; 


const Students = (props) => {

        const [students, setStudents] = useState([]);

        const loadData = () =>{
            fetch('http://localhost:5000/api/students')
            .then((response) => response.json())
            .then(data => {
                setStudents(data);
            })
        }

        useEffect(() =>{
            loadData(); 
        }, [])

        // return students.map((student, index) => {
        //     return (
        //       <div key={index}>
        //         <p>
        //           {student.firstName} {student.lastName}
        //         </p>
        //       </div>
        //     );
        //   });
        return (
            <div className="Container">
                <h1>Hello from {props.school}</h1>
                {students.map((student, index)=>{
                    return (<div key={index}>
                        <p>{student.firstname}{student.lastname}</p>
                    </div>)
                })}

            </div>
        )
}

export default Students;