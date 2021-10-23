export const baseURL = {
    authenticationBaseURL : "http://localhost:2020",
    adminBaseURL: "https://keshavsuman.cruspo.com/api/admin",
} 

export const routes = {
    login:"/authentication/login",

    
    // createAppointment:"/appointment/createAppointment",
    getAppointmentById:(appointmentId)=>`/appointment/${appointmentId}`,
    updateAppointment:'/appointment/updateAppointment',
    // getBookings:(type)=>`/appointment/getBookedAppointments/${type}`,
    // getAppointments:'/appointment/allAppointments',
}

export const header = {
    'Content-type':'application/json',
    'authorization':localStorage.getItem('admin_access_key')
}

export async function cruspoFetch(url,data){
    const response = await fetch(url,data);
    if(response.status===406){
        window.location.pathname='/admin/login';
    }
    return response; 
}