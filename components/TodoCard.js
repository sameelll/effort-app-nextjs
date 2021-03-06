import { addDoc, collection, deleteDoc, doc } from "@firebase/firestore";
import db from "../firebase/firebase";
import {
    CheckIcon, TrashIcon
} from "@heroicons/react/outline";

function TodoCard({ duty }) {

    const { task, title, id } = duty;

    const handleDelete = async (e) => {
        e.stopPropagation()
        await deleteDoc(doc(db, "data", id));
    }

    const handleDone = async () => {
        const collectionRef = collection(db, "done");
        const payload = { task, title }
        await addDoc(collectionRef, payload);
        await deleteDoc(doc(db, "data", id));
    };

    return (
        <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>
            <div className={`w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}></div>
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            <div className="flex-auto">
                <h1 className="text-xl mb-2 font-bold">{title}</h1>
                <h3>{task}</h3>
            </div>
            <div className="flex flex-col-3 ml-3">
                <div className="px-2" >
                    <CheckIcon onClick={handleDone} className="button w-15 h-15" />
                </div>
                <div className="px-2" >
                    <TrashIcon onClick={handleDelete} className="button w-15 h-15" />
                </div>
            </div>
        </div>
    )
}

export default TodoCard
