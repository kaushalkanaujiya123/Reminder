import AddReminder from "./AddReminder";
import Reminder from "./Reminder";

const Dashboard = () => {
    return(
        <div className="reminder-container">
            <AddReminder />
            <Reminder/>
        </div>
    )
}

export default Dashboard;
