import { BryntumGrid } from "@bryntum/grid-react";
import { gridConfig } from "./Config";
import { db } from "./firebase";
import firebase from './assets/firebase.png'
import Bryntum from './assets/B_logo.png'
import './App.css';
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
    const [showform, setshowform] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        Class: "",
        city: "",
        email: "",
    });
    const [databaseData, setdatabaseData] = useState(null);







    const getData = async () => {
    const data = [];
        const docRef = collection(db, "listings");
        const docSnap = await getDocs(docRef);
        docSnap.forEach((doc) => {
            data.push({
                name: doc.data().name,
                class: doc.data().Class,
                email: doc.data().email,
                city: doc.data().city,
            });
        });
        console.log(data)
        setdatabaseData(data);
        gridConfig.data = data;
    }

    useEffect(() => {
        getData();
        
    }, [])
    const { name, city, email, Class } = formData;
    const handleToggleForm = () => {
        setshowform(prevShowForm => !prevShowForm);
    };
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        console.log(e.target.value)
    }
    async function onSubmit(e) {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "listings"), formData);
        getData();
    }
    return (
        <>
            <div className="nav" id="nav">
                <h2><img src={Bryntum} alt="" /> <span style={{margin: '10px'}}>X</span><img src={firebase} alt="" /></h2>
                <button style={{ backgroundColor: 'green' }} onClick={handleToggleForm}>
                    {showform ? "Hide Form" : "Add Listing"}
                </button>
            </div>
            {showform && (
                <form onSubmit={onSubmit}>
                    <div className="inputs">

                        <input
                            type="text"
                            value={name}
                            id="name"
                            placeholder="Name"
                            onChange={onChange}
                            required
                        />

                        <input
                            type="text"
                            value={city}
                            id="city"
                            placeholder="City"
                            onChange={onChange}
                        />

                        <input
                            type="text"
                            value={Class}
                            id="Class"
                            placeholder="Class"
                            onChange={onChange}
                        />

                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={onChange}
                        />

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px' }}>
                        <button
                            type="submit"
                            style={{ backgroundColor: 'green' }}>Add Data</button>
                    </div>
                </form>
            )}
            <BryntumGrid
                {...gridConfig}
            />
        </>
    );
}

export default App;
