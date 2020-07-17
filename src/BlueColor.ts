import IColor from './IColor'

class BlueColor implements IColor {
  applyColor (): void {
    console.log('Blue')
  }
}

export default BlueColor