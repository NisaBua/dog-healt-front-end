import axios from 'axios'
import { servicePath } from '../../utils/config'

const addAdmin = {
    addAdmin: async data => {
        let response = null
        try {
            const responseData = await axios.post(
                `${servicePath.service.general}/api/addAdmin`, {
                    data
                }
            )
            response = {
                status: responseData.status,
                lists: responseData.data
            }
        } catch (error) {
            console.log(error)
        }
        return response
    }
}
export default addAdmin