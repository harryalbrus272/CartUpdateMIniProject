import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt=""/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>Phone</div>
                    <div style={{ color: '#777777' }}>Rs 999</div>
                    <div style={{ color: '#777777' }}>Qty : 2</div>
                    <div className="cart-item-actions">
                        {/* <Button>

                        </Button> */}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        background: '#cccccc'
    }
}
