import React from 'react'
import { Header } from '../../components/mainHeader/MainHeader'
import { getSneakers } from '../../services/getSneakers'
import { Checkbox } from '../../components/checkbox/Checkbox'
import { ItemCard } from '../../components/itemCard/ItemCard'
import { FilterActivationPanel } from '../../components/filterActivationPanel/FilterActivationPanel'
import { useDropdownFilterSection } from '../../hooks/useDropdownFilterSection'
import { PromoSectionBanner } from '../../components/promoSection/PromoSectionBanner'
import { Input } from '../../components/input/Input'
import './Catalogue.css'

function Catalogue () {
  const sneakers = getSneakers()
  const { handleClick, filterRef, sortRef, filterSectionRef, sortSectionRef } = useDropdownFilterSection()

  return (
    <main>
      <header className='headerContainer'>
        <Header />
      </header>

      <section className='mainSection'>
        <PromoSectionBanner imgRoute='./src/assets/jordan-1-yellow.webp' bannerText="Jordan 1 Retro High 'Yellow Ochre'" />
        <div className='filterSection'>
          <ul className='activationPanel'>
            <FilterActivationPanel handle={handleClick} reference={filterRef} onClick={handleClick} icon='./src/assets/filter-icon.svg' span='Filtros' />
            <FilterActivationPanel handle={handleClick} reference={sortRef} icon='./src/assets/sort-icon.svg' span='Ordenar' />
          </ul>
          <div ref={filterSectionRef} className='filterPanel'>
            <div className='filterDiv'>
              <h3>Género</h3>
              <form>
                <Checkbox label='Niño' id='kid' name='kid' />
                <Checkbox label='Hombre' id='man' name='man' />
                <Checkbox label='Mujer' id='woman' name='woman' />
              </form>
            </div>
            <div className='filterDiv'>
              <h3>Marca</h3>
              <form>
                <Checkbox label='Nike' id='nike' name='nike' />
                <Checkbox label='Adidas' id='adidas' name='adidas' />
                <Checkbox label='New Balance' id='newBalance' name='newBalance' />
              </form>
            </div>
            <div className='filterDiv'>
              <h3>Precio</h3>
              <form>
                <label htmlFor='minPrice'><input type='number' id='minPrice' name='minPrice' placeholder='199.99' /> </label>
                <label htmlFor='maxPrice'><input type='number' id='maxPrice' name='maxPrice' placeholder='499.99' /> </label>
              </form>
            </div>
            <div className='filterDiv'>
              <h3>Color</h3>
              <form>
                <Checkbox label='Azul' id='blue' name='blue' />
                <Checkbox label='Rojo' id='red' name='red' />
                <Checkbox label='Amarillo' id='yellow' name='yellow' />
              </form>
            </div>
          </div>
          <div ref={sortSectionRef} className='filterPanel'>
            <div className='sortDiv'>
              <h3>Ordenar por</h3>
              <form className='sortOptions'>
                <Input label='Precio: alto-bajo' id='ascendant' name='ascendant' />
                <Input label='Precio: bajo-alto' id='descendent' name='descendent' />
                <Input label='Más reciente' id='recent' name='recent' />
              </form>
            </div>
          </div>
        </div>
        <div className='catalogueSection'>
          <ul className='itemsContainer'>
            {sneakers.map(sneaker => (
              <ItemCard key={sneaker.id} imageRoute={sneaker.image} title={sneaker.title} price={sneaker.price} brand={sneaker.brand} gender={sneaker.gender} colorway={sneaker.colorway} />
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

export default Catalogue
