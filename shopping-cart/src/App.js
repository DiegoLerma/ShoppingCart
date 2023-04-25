import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {

  state={
    productos: [
      {name: 'Tomate', price: 15, img: './images/tomate.jpg'},
      {name: 'Arbejas', price: 5, img: './images/arbejas.jpg'},
      {name: 'Lechuga', price: 20, img: './images/lechuga.jpg'},
      // {name: 'Zanahoria', price: 5, img: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=1600'},
      // {name: 'Lechuga', price: 10, img: 'https://images.pexels.com/photos/5589053/pexels-photo-5589053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      // {name: 'Aguacate', price: 20, img: 'https://images.pexels.com/photos/3850649/pexels-photo-3850649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {

    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad + 1
      }) : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
    }

    mostrarCarro = () => {
      if (!this.state.carro.length) {
        return
      }
      this.setState({ esCarroVisible: !this.state.esCarroVisible })
    }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
