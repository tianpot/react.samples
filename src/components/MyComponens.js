import MyDatePicker from "./DatePicker";
import DragFileUpload from "./DragFileUpload";
import MyUpload from "./FileUpload";

function MyComponents() {
    return (
        <>
            <div>
                <MyDatePicker />
                <MyUpload></MyUpload>
                <DragFileUpload></DragFileUpload>
            </div>
        </>
    );
}

export default MyComponents;