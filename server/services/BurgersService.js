import { burgers } from "../db/fakeDb.js"

class BurgersService {
  updatedBurger(burgerId, burgerData) {
    const foundBurger = burgers.find(burger => burger.id == burgerId)

    foundBurger.bun = burgerData.bun || foundBurger.bun
    foundBurger.condiments = burgerData.condiments || foundBurger.condiments
    foundBurger.meat = burgerData.meat || foundBurger.meat

    return foundBurger
  }
  deleteBurger(burgerId) {
    const foundBurger = burgers.findIndex(burger => burger.id == burgerId)

    if (foundBurger == -1) {
      throw new Error(`${foundBurger} is not a valid ID`)
    }
    burgers.splice(foundBurger, 1)
  }
  async createBurger(burgerData) {
    burgerData.id = Math.floor(Math.random() * Date.now())
    burgers.push(burgerData)
  }
  async getBurgers() {
    return burgers
  }
  async getBurgerById(burgerId) {
    const foundBurger = burgers.find(burger => burger.id == burgerId)
    if (!foundBurger) {
      throw new Error(`${burgerId} is not a valid ID`)
    }
    return foundBurger
  }




}


export const burgersService = new BurgersService()