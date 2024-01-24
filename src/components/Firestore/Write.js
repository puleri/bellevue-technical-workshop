import { db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore";


function Write() {

    const testWrite = async () => {
        try {
            const docRef = await addDoc(collection(db, "test"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <div>
                <button onClick={()=>testWrite()}>
                    Write
                </button>
            </div>
        </>
    );
}

export default Write;


