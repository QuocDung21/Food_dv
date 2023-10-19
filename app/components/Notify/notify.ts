import toast from "react-hot-toast";
import {toastStatus} from "@/lib/key";



// Not ..
export const notify = (msg: string, status: string) => {
    if (status === toastStatus.success) return toast.success(msg);
    toast.error(msg);
}