import React, { useState } from 'react'
import { Header } from '../../components/mainHeader/MainHeader'
import { getSneakers } from '../../services/getSneakers'
import { Checkbox } from '../../components/checkbox/Checkbox'
import { ItemCard } from '../../components/itemCard/ItemCard'
import { FilterActivationPanel } from '../../components/filterActivationPanel/FilterActivationPanel'
import { useDropdownFilterSection } from '../../hooks/useDropdownFilterSection'
import { PromoSectionBanner } from '../../components/promoSection/PromoSectionBanner'
import { Input } from '../../components/input/Input'
import jordan1Yellow from '../../assets/jordan-1-yellow.webp'
import filterIcon from '../../assets/filter-icon.svg'
import sortIcon from '../../assets/sort-icon.svg'
import { useFilters } from '../../hooks/useFilters'
import './Catalogue.css'

function Catalogue () {
  const initialSneakers = getSneakers()
  const [sneakers] = useState(initialSneakers)

  const { handleClick, filterRef, sortRef, filterSectionRef, sortSectionRef } = useDropdownFilterSection()
  const { filterSneakers, handleChangeMinPrice, handleChangeMaxPrice } = useFilters()

  const filteredSneakers = filterSneakers(sneakers)

  return (
    <main>
      <header className='headerContainer'>
        <Header />
      </header>

      <section className='mainSection'>
        <PromoSectionBanner imgRoute={jordan1Yellow} bannerText="Jordan 1 Retro High 'Yellow Ochre'" />
        <div className='filterSection'>
          <ul className='activationPanel'>
            <FilterActivationPanel handle={handleClick} reference={filterRef} onClick={handleClick} icon={filterIcon} span='Filtros' />
            <FilterActivationPanel handle={handleClick} reference={sortRef} icon={sortIcon} span='Ordenar' />
          </ul>
          <div ref={filterSectionRef} className='filterPanel'>
            <div className='filterDiv'>
              <h3>Género</h3>
              <form>
                <Checkbox filterName='gender' label='Niño' id='kid' name='kid' />
                <Checkbox filterName='gender' label='Hombre' id='men' name='men' />
                <Checkbox filterName='gender' label='Mujer' id='women' name='women' />
              </form>
            </div>
            <div className='filterDiv'>
              <h3>Marca</h3>
              <form>
                <Checkbox filterName='brand' label='Nike' id='nike' name='Nike' />
                <Checkbox filterName='brand' label='Adidas' id='adidas' name='adidas' />
                <Checkbox filterName='brand' label='Jordan' id='jordan' name='Jordan' />
              </form>
            </div>
            <div className='filterDiv'>
              <h3>Precio</h3>
              <form>
                <label htmlFor='minPrice'><input className='priceInput' type='number' id='minPrice' name='minPrice' placeholder='$0' onChange={handleChangeMinPrice} /> </label>
                <label htmlFor='maxPrice'><input className='priceInput' type='number' id='maxPrice' name='maxPrice' placeholder='$500' onChange={handleChangeMaxPrice} /> </label>
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
            {filteredSneakers.map(sneaker => (
              <ItemCard key={sneaker.id} imageRoute={sneaker.image} title={sneaker.title} price={sneaker.price} brand={sneaker.brand} gender={sneaker.gender} colorway={sneaker.colorway} />
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

export default Catalogue
