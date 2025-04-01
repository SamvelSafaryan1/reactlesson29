import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "4e0f7946-1faf-4c76-8d72-62d57cad379f"
    }
})

export const socialAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    },
    login(email, password){
        return instance.post(`/auth/login`, {email, password})
    },
    getProfile(userId){
        return instance.get(`/profile/${userId}`)
    },
    putPhotoEdit(file){
        const formData = new FormData()

        formData.append('file', file)
            return instance.put('/profile/photo', formData)
    }
}
