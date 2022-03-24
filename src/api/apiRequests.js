import react from 'react';

const axios = require('axios');

const getToken=()=>{
    return localStorage.getItem('userAccess');
}

const getRefreshToken=()=>{
    return localStorage.getItem('userRefresh');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`https://intern-management-backend.herokuapp.com/api/login`,
        //'url':`http://localhost:7070/api/login`,
        'data':authRequest
    })
}

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

export const getStudents=(authRequest)=>{
    return axios({
        'method':'GET',
        'url':`https://intern-management-backend.herokuapp.com/api/student/students`,
        //'url':`http://localhost:7070/api/student/students`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}
