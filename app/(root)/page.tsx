import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggesIn = { 
    firstName: "Yash"
  }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggesIn?.firstName || "Guest"}
            subtext = "Access and manage your account using Horizon"
          />

        </header>
        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  )
}

export default Home
