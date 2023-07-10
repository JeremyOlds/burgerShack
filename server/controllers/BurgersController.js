import { send } from "express/lib/response.js";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurgerById)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }


  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId

      const burgerData = await burgersService.getBurgerById(burgerId)
      res.send(burgerData)
    } catch (error) {
      next(error)
    }
  }
  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const newBurger = burgersService.createBurger(burgerData)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const deletedBurger = burgersService.deleteBurger(burgerId)
      res.send(deletedBurger)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burgerData = req.body
      const updatedBurger = burgersService.updatedBurger(burgerId, burgerData)
      res.send(updatedBurger)
    } catch (error) {
      next(error)
    }
  }
}