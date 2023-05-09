import { MOCK_DATA } from '../Data/MockData'

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(MOCK_DATA) }, 1000)
  }
  )
}
export const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(MOCK_DATA.find(item => item.id === id)) }, 1000)
  })
}

export const getItemByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(MOCK_DATA.filter(item => item.category === category)) }, 1000)
  })
}
