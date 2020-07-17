import IColor from './IColor'

abstract class Shape {

  protected color: IColor

  constructor(color: IColor) {
    this.color = color
  }
  
  public abstract applyColor(): void
}

export default Shape