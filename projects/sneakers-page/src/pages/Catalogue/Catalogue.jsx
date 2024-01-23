import React from 'react'
import { Header } from '../../components/mainHeader/MainHeader'
import { getSneakers } from '../../services/getSneakers'
import { Checkbox } from '../../components/checkbox/Checkbox'
import './Catalogue.css'

function Catalogue () {
  const sneakers = getSneakers()

  return (
    <main>
      <header>
        <Header />
      </header>

      <section>
        <section className='mainSection'>
          <div className='filterSection'>
            <div className='filterDiv'>
              <h2>Género</h2>
              <form>
                <Checkbox label='Niño' id='kid' name='kid' />
                <Checkbox label='Hombre' id='man' name='man' />
                <Checkbox label='Mujer' id='woman' name='woman' />
              </form>
            </div>
            <div className='filterDiv'>
              <h2>Marca</h2>
              <form>
                <Checkbox label='Nike' id='nike' name='nike' />
                <Checkbox label='Adidas' id='adidas' name='adidas' />
                <Checkbox label='New Balance' id='newBalance' name='newBalance' />
              </form>
            </div>
            <div className='filterDiv'>
              <h2>Precio</h2>
              <form>
                <label htmlFor='minPrice'><input type='number' id='minPrice' name='minPrice' placeholder='199.99' /> Precio mínimo</label>
                <label htmlFor='maxPrice'><input type='number' id='maxPrice' name='maxPrice' placeholder='499.99' /> Precio máximo</label>
              </form>
            </div>
            <div className='filterDiv'>
              <h2>Color</h2>
              <form>
                <Checkbox label='Azul' id='blue' name='blue' />
                <Checkbox label='Rojo' id='red' name='red' />
                <Checkbox label='Amarillo' id='yellow' name='yellow' />
              </form>
            </div>
          </div>
          <div className='catalogueSection'>
            <ul className='itemsContainer'>
              {sneakers.map(sneaker => (
                <li className='item' key={sneaker.id}>
                  <img src={sneaker.image} alt={sneaker.name} />
                  <p>{sneaker.title}</p>
                </li>
              ))}
            </ul>

          </div>
        </section>
      </section>

    </main>
  )
}

export default Catalogue
