import { sides } from "../db/fakeDb.js"


class SidesService {
  updateSide(sideId, sideData) {
    const foundSide = sides.find(side => side.id == sideId)

    foundSide.type = sideData.type || foundSide.type

    return foundSide
  }
  deleteSide(sideId) {
    const foundSide = sides.findIndex(side => side.id == sideId)
    if (foundSide == -1) {
      throw new Error(`${foundSide} is not a valid ID`)
    }
    sides.splice(foundSide, 1)
  }
  createSide(newSideData) {
    newSideData.id = Math.floor(Math.random() * Date.now())
    sides.push(newSideData)
    return newSideData
  }
  async getSideById(sideId) {
    const foundSide = await sides.find(side => side.id == sideId)
    if (!foundSide) {
      throw new Error(`${sideId} is not a valid ID`)
    }
    return foundSide
  }
  async getSides() {
    return sides
  }

}

export const sidesService = new SidesService()