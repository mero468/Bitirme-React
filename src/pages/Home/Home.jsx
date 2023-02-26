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
