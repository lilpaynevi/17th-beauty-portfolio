import Header from '@/components/global/Header'
import Navbar from '@/components/global/Navbar'
import ServiceCard from '@/components/ui/service-card'
import React from 'react'

export default function services() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ServiceCard />
    </div>
  )
}
