import "../styles/Reminder.css";
import "../styles/Card.css";
import { useSelector } from 'react-redux';
import { store } from "../store/store";
import cancel from "./Cancel.jpg"
import { deleteReminder } from "../store/reminderReducer";

const Reminder = () => {
    const reminder = useSelector((state) => state.reminderReducer); 
    const loggedIndex = useSelector((state => state.indexReducer[0]));
    const users = store.getState().userReducer;

    const handleDelete = (reminder) => {
        store.dispatch(deleteReminder(reminder));
    }

    return(
        <div className="reminder">
            <div className="reminder-header">
                Upcoming Reminder
            </div>
            <div className="row">
            {
                reminder.map((reminders)=>{
                    return(
                        reminder.username === users[loggedIndex].username &&
                        <div className="column">
                            <div className="card">
                                <img src={cancel} className="delete" onClick={() => handleDelete(reminders)} />
                                {reminders.text}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Reminder;
