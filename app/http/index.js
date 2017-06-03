import axios from 'axios'
import {SERVER_URL, ACCESS_TOKEN, GOOGLE_API_KEY} from '../constants'

export const reverseGeocode = (lat, lng) =>
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`)

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
    return client.get(`/trips/${id}`)
}

export function createTrip(trip) {
    return client.post('/trips', trip)
}

// Activities endpoints
export const getActivityRecommendations = (tripId) =>
    client.get(`/trips/${tripId}/recommendations`);

export const getActivity = (tripId, activityId) =>
    client.get(`/trips/${tripId}/activities/${activityId}`);


export function getAllActivities() {
    return client.get('/activities')
}

export function commitToActivity(id) {
    return client.post(`/activities/${id}/commitments`)
}

export const getAllCommitments = (tripId, activityId) =>
    client.get(`/trips/${tripId}/activities/${activityId}/commitments`);

// Profile Endpoints
export const getMyProfile = () => client.get('/me');