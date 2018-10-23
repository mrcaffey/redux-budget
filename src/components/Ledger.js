import React from 'react'
import Transactions from './Transactions'
import styled from 'styled-components'

const Container = styled.div`
  flex: 2
`

const Ledger = () => (
  <div>
    <Transactions />
  </div>
)

export default Ledger