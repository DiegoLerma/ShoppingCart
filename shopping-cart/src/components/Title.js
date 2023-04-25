import { Component } from "react";

const styles = {
    title: {
        marginBottom: '50px',
        color: '#0A283E',
    }
}

class Title extends Component {
  render() {
    return <h1 style={styles.title}>Tienda virtual</h1>;
  }
}

export default Title;