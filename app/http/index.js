import axios from 'axios'
import {SERVER_URL, ACCESS_TOKEN} from '../constants'

const client = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'X-ACCESS-TOKEN': ACCESS_TOKEN,
        'Content-Type': 'application/json',
    }
});

// Trips endpoints
export function getAllTrips() {
    return client.get('/me/trips')
}

export function getTrip(id) {
    return client.get(`/${id}`)
}

export function createTrip(trip) {
    return client.post('/trips', trip)
}

// Activities endpoints
export const getActivityRecommendations = (tripId) =>
    client.get(`/trips/${tripId}/recommendations`);

export function getActivity(id) {
    return client.get(`/activities/${id}`)
}

export function getAllActivities() {
    return client.get('/activities')
}

export function commitToActivity(id) {
    return client.post(`/activities/${id}/commitments`)
}

// Profile Endpoints
export const getMyProfile = () => client.get('/me');