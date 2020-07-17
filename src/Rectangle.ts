import Shape from './Shape'
import IColor from './IColor'

class Rectangle extends Shape {

  constructor(color: IColor) {
    super(color)
  }

  public applyColor (): void {
    console.log('Painted rectangle')
    this.color.applyColor()
  }
}

export default Rectangle