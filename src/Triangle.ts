import Shape from './Shape'
import IColor from './IColor'

class Triangule extends Shape {

  constructor(color: IColor) {
    super(color)
  }

  public applyColor (): void {
    console.log('Painted triangle')
    this.color.applyColor()
  }
}

export default Triangule