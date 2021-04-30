import { Foodsable } from './interfaces' //①
// import { Foodsable as FoodListable } from './interfaces.js' //②
// import * as interfaces from './interfaces.js' //③
// import fafafa from './interfaces.js' //④ default export構文をinterface.tsでも書く
import { Food } from './food'

// export class Foods implements FoodListable { //②
export class Foods implements Foodsable {
  private static instance: Foods
  elements = document.querySelectorAll<HTMLDivElement>('.food')
  private _activeElements: HTMLDivElement[] = []
  private _activeElementsScore: number[] = []
  get activeElements() {
    this._activeElements = []
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements
  }
  get activeElementsScore() {
    this._activeElementsScore = []
    //_activeElementsではなく activeElements (getter)
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score')
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))
      }
    })
    return this._activeElementsScore
  }
  private constructor() {
    this.elements.forEach(element => {
      new Food(element)
    })
  }
  //newは一回だけ行われる
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods()
    }
    return Foods.instance
  }
}
