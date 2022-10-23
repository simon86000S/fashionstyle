import React from 'react'
import Row from './Row/Row'
import Article from './Article/Article';
import Aside from './Aside/Aside';
import Menu from '../Menu/Menu';
function Home() {
  return (
    <div className='Home'>
      <Menu/>
<Row></Row>
<Article/>
<Aside/>

    </div>
  )
}

export default Home