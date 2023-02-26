import React from 'react'

export default function Breadcrumb() {
  return (
    <div aria-label="breadcrumb" className='breadcrumb'>
        <ol >
            <li ><a href="/"><i class="fas fa-home fa-sm  "></i></a></li>
            <li><a href="">Etkinlik</a></li>
            <li aria-current="page">Cem Adrian Konseri</li>
        </ol>
    </div> 
  )
}
