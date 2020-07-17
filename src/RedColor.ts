import IColor from './IColor'

class RedColor implements IColor {
  applyColor (): void {
    console.log('Red')
  }
}

export default RedColor