import apiConfig from '@/api/apiConfig'
class DataService{
    getSingleUser(uid: Number): Promise<Number>{
        return apiConfig.get(`user/${uid}`)
    }
}
export default new DataService()