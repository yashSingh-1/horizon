import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggesIn = await getLoggedInUser()
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggesIn?.name || "Guest"}
            subtext = "Access and manage your account using Horizon"
          />

        <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
        </header>
        RECENT TRANSACTIONS

      </div>
      <RightSidebar 
        user = {loggesIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50} ,{
          currentBalance: 500
        }]}

      />
    </section>
  )
}

export default Home
