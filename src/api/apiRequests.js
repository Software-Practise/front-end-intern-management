import react from 'react';

const axios = require('axios');

// Gets Access Token to grant access to pages
const getAccessToken=()=>{
    console.log(localStorage.getItem('userAccess'))
    return localStorage.getItem('userAccess');
}

// Gets a new Access Token to refresh permissions
const getRefreshToken=()=>{
    return localStorage.getItem('userRefresh');
}

// Lets the User Login
export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`https://intern-management-backend.herokuapp.com/api/login`,
        //'url':`http://localhost:7070/api/login`,
        'data':authRequest
    })
}

// Refreshes the access token
export const refreshToken=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/token/refresh`,
        //'url':`http://localhost:7070/api/token/refresh`,
        headers:{
            'Authorization':'Bearer '+getRefreshToken()
        }
    })
}

// Returns ALL users and their information
export const getAllUsers=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/users`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Returns list of all students and their information
export const getStudents=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Returns a single student and their information
export const getSingleStudent=(studentId)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students/${studentId}`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Returns all applications under a faculty member
export async function makeGetRequest() {
    let res = await axios.get(`https://intern-management-backend.herokuapp.com/api/student/faculty/cavillh/students`, {
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }

    });
    let data = res.data;
    return data;
}

// Add application data to student
export const postStudentApplication=(studentId)=>{
    return axios({
        'method':'POST',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students/${studentId}/addApplication`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Get all applications and their data
export const getAllApplications=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students/application`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Drop single application from student
export const dropApplication=(studentId, applicationId)=>{
    return axios({
        'method':'POST',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students/${studentId}/dropApplication/${applicationId}`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}
// Get all faculty and their data
export const getAllFaculty=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/faculty/faculties`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}

// Get single faculty and their data
export const getSingleFaculty=(facultyId)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/faculty/faculties/${facultyId}`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getAccessToken()
        }
    })
}
