import { Component } from 'react'
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    img: {
        width: '100%',
    },

    parraph: {
        textAlign: 'center',
        fontSize: '1.25rem',
        underline: 'solid 1px #000',
    }
}

class Producto extends Component {
    render(){
        const { producto, agregarAlCarro } = this.props
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name}/>
                <h3>{producto.name}</h3>
                <p style={styles.parraph}>{`$ ${producto.price}.00`}</p>
                <Button 
                    onClick={()=> agregarAlCarro(producto)}
                    >
                    Agregar al carro
                </Button>
            </div>
                )
    }
}

export default Producto