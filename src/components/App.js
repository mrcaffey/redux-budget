import React from 'react'
import styled from 'styled-components'
import Ledger from './Ledger'
import WishList from './WishList'

const Container = styled.div`
  display:flex;
  justify-content: space-around;
`


const App = () => (
  <div>
    <Container>
      <Ledger />
      <WishList />
    </Container>
  </div>
)




export default App