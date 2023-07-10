import { sidesService } from "../services/SidesService.js"
import BaseController from "../utils/BaseController.js"


export class SidesController extends BaseController {
  constructor() {
    super('api/sides')
    this.router

      .get('', this.getSides)
      .get('/:sidesId', this.getSideById)
      .post('', this.createSide)
      .delete('/:sidesId', this.deleteSide)
      .put('/:sidesId', this.updateSide)
  }
  async getSides(req, res, next) {
    try {
      const sides = await sidesService.getSides()
      res.send(sides)
    } catch (error) {
      next(error)
    }
  }
  async getSideById(req, res, next) {
    try {
      const sideId = req.params.sidesId
      const foundside = await sidesService.getSideById(sideId)
      res.send(foundside)
    } catch (error) {
      next(error)
    }
  }
  async deleteSide(req, res, next) {
    try {
      const sideId = req.params.sidesId
      const deletedSide = await sidesService.deleteSide(sideId)
    } catch (error) {
      next(error)
    }
  }
  async createSide(req, res, next) {
    try {
      const newSideData = req.body
      const newSide = await sidesService.createSide(newSideData)
      res.send(newSide)
    } catch (error) {
      next(error)
    }
  }
  updateSide(req, res, next) {
    try {
      const sideId = req.params.sidesId
      const sideData = req.body
      const updatedSide = sidesService.updateSide(sideId, sideData)
      res.send(updatedSide)
    } catch (error) {
      next(error)
    }
  }
}