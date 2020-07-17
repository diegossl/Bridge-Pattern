import IColor from './src/IColor'
import Shape from './src/Shape'
import Rectangle from './src/Rectangle'
import Triangle from './src/Triangle'
import RedColor from './src/RedColor'
import BlueColor from './src/BlueColor'

const redColor: IColor = new RedColor()
const blueColor: IColor = new BlueColor()

const rectangle: Shape = new Rectangle(redColor)
rectangle.applyColor()

const triangle: Shape = new Triangle(blueColor)
triangle.applyColor()