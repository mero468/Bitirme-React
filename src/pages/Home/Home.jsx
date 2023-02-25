import React from 'react';
import Card from './components/Card';
import { NavBar } from '../../common/NavBar';
import "./home.css";
import Slider from './components/Slider';
const Home = () => {
  return (
    <>
        <NavBar/> 
        <div className=' a7a pb-5 '>
          <div className='search-area container-fluid px-5 '>
            <div class=" row no-gutters bars justify-content-center">
              <div className='col-9 bar'>
                  <div class="input-group mb-3">
                  <input type="text" class="ps-5 form-control search-inpt " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary my-0 search-btn" type="button"><i class="fas fa-search fa-lg fa-fw"></i></button>
                  </div>
                  </div>
              </div>
              <div className='col-3'>
              <div class="input-group mb-3">
                  <input type="text" class=" form-control search-inpt " placeholder="Izmir" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary my-0 search-btn" type="button"><i class="fas fa-search fa-lg fa-fw"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slider/>
          <div className='filter-area container-fluid '>
          <div class=" justify-content-center filter-btn-container">
            <button type="button" class="btn me-3 filter-btn  btn-primary"><i class="fas fa-music  me-2"></i> Concerts</button>
            <button type="button" class="btn me-3 filter-btn  btn-primary"><i class="fas fa-music me-2"></i> Tiyatro</button>
            <button type="button" class="btn me-3 filter-btn btn-primary"><i class="fas fa-music me-2"></i> Blog </button>
            <button type="button" class="btn me-3 filter-btn btn-primary"> <i class="fas fa-music me-2"></i>  Festival</button>

          </div>
          </div>
        </div>

        <div className='container-fluid px-5'>
          <div className='row gridlist mt-5 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </>
  )
}
export default Home
