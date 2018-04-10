import axios from 'axios'
const url = 'https://www.easy-mock.com/mock/59ba12e6e0dc663341a97644/example/'

export const getList = ()=>{
   return axios.get(`${url}firstCategory`).then(res=> res.data)
}
