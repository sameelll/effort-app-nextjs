import { deleteDoc, doc } from "@firebase/firestore";
import db from "../firebase/firebase";
import {
    TrashIcon
} from "@heroicons/react/outline";

function DoneCard({ doneDuty }) {

    const { task, title, id } = doneDuty;

    const handleDoneDelete = async (e) => {
        e.stopPropagation();
        await deleteDoc(doc(db, "done", id));
    };

    return (
        <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0`}>
            <div className={`w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0`}></div>
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
            <div className="flex-auto">
                <h1 className="text-xl mb-2 font-bold">{title}</h1>
                <h3>{task}</h3>
            </div>
            <div className="ml-5" >
                <TrashIcon onClick={handleDoneDelete} className="button w-15 h-15" />
            </div>
        </div>
    )
}

export default DoneCard
