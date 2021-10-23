import {store} from 'react-notifications-component';
import { baseURL,routes,cruspoFetch,header } from './config';

export async function updateAppointment(data,type){
    data.mode=type;
    var response = await cruspoFetch(baseURL.adminBaseURL+routes.updateAppointment,{
        body:JSON.stringify(data),
        headers:header,
        mode:'cors',
        method:'POST'
    });
    if(response.ok){
        store.addNotification({
            title: "Appointment updated successfully ",
            message: "Appointment updated",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
            }
        });
    }else{
        store.addNotification({
            title: "Error while updating Appointment",
            message: "appointment not updated",
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
            }
        });
    }
}


export async function getAppointmentById(appointmentId){
    var response = await cruspoFetch(baseURL.adminBaseURL+routes.getAppointmentById(appointmentId),{
        mode:'cors',
        method:'GET',
        headers:header
    });
    if(response.ok){
        return response;
    }else{
        return null;
    }
}