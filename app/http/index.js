import axios from 'axios'
import {SERVER_URL} from '../constants'

// Trips endpoints
export function getAllTrips() {
    return axios.get(SERVER_URL + '/trips')
}

export function getTrip(id) {
    return axios.get(SERVER_URL + `/${id}`)
}

export function createTrip(id) {
    return axios.post(SERVER_URL + '/trips',
    {
        // TODO
    })
}

// Activities endpoints
export function getActivity(id) {
    return axios.get(SERVER_URL + `/activities/${id}`)
}

export function getAllActivities() {
    return axios.get(SERVER_URL + '/activities')
}

export function commitToActivity(id) {
    return axios.post(SERVER_URL + `/activities/${id}/commitments`)
}