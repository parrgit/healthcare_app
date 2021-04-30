//3つのクラスの早見ドキュメントとしてinterfaceが機能（imprementsでclassに使用している）
export interface Scoreable {
  readonly totalScore: number
  render(): void
}
export interface Foodable {
  element: HTMLDivElement
  clickEventHandler(): void
}
export interface Foodsable {
  elements: NodeListOf<HTMLDivElement>
  activeElements: HTMLDivElement[]
  activeElementsScore: number[]
}
