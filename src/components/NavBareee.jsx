import React from 'react'
import { Container, Form, FormControl, Navbar } from 'react-bootstrap'
import './NavBareee.css'
const NavBareee = () => {
  return (
    <div className='navi'>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img className='Logoo' src="https://fabiendubessy.com/wp-content/uploads/2019/05/Logo-Insta-1.png" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Rechercher"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
  <div className='menuo'> 
            <img className='acceuil' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2YsUrDQByHv2q0giAIOrjo4qCL6BN0d1McLAjt5Cv4Cr6Cm4s4ugmKk76AdHERp+KkgiBolbYOySHE5JJc7vJv4T74LQ355/uFSy8EPB6PKxrAU5SGsEthDoFvYBjlBzgCapJSeZgBTvkTj+ccmBWzy2AV6JAur/IArAs5prINvJEtr/IO7IiYxqgRru0++eVVBsAxMFG5dcQccKERzJtLYL5id9YI13JZeZVHYKMq+SbwYVFe5RNouxQPCNesbfF4ToAp2/KLwE0F8ip3wJIt+S2gW6G8Sje6dik2Kfb/bjuvlHi4A+BeUF6lg+Ez0R4BeZVWmqRuF2wWbeyQfZOTnpG/8yrdNEnd+3kfwfeUGANgMumArsDQjYsxia6jcoeN8QWk8QWkGfsCgYOZX8AZ8BL7fQE4AOoOrpmI6a65q5m5V2JuIi42sjrhV7kkpoGe4dxEVxcFsj4fWp079g+xLyCNLyCNLyCNrkDaZqQjzyZlda6uwK3BhfKc42ruP1aAa8L2We8pPeAKWBac6/F4xpFfAxaQ3HWlPjoAAAAASUVORK5CYII=" alt="" />
            <img className='msg' src="https://cdn-icons.flaticon.com/png/512/5728/premium/5728145.png?token=exp=1646001340~hmac=60beefe8b83acf18cce8103e4cfa7817" alt="" />
            <img className='pub' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYsuU1RPk2KW7ByCcLnQVZa9kjciaNg65m4bjgEgslrAa-tgUu" alt="" />
            <img className='exp' src="https://cdn-icons-png.flaticon.com/512/565/565504.png" alt="" />
           <img className='like' src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1646002344~hmac=ffb2398297aa85da1c9fa7228d20dfca" alt="" />
            <img className='profil' src="https://guidelook.fr/wp-content/uploads/2020/04/tenue-ete-pour-homme.jpg" alt="" />
            </div>  
</Navbar>
    </div>
  )
}

export default NavBareee