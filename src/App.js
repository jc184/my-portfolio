import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  List,
  Navbar,
  Jumbotron,
  Lead,
  Button,
  ButtonGroup,
  Card,
  BH1,
  BH4,
  BP,
  BA,
  BDiv,
  BSmall,
  BFooter
} from 'bootstrap-4-react';
import {Helmet} from "react-helmet";

const thumbnailSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
export const contosothumbnail = require('./ContosoUniversityThumbnail.png');
export const listofingredientsthumbnail = require('./LIstOfIngredients.png');
export const todoapplicationthumbnail = require('./ToDoApplication.png');
export const meancontactslistthumbnail = require('./MEANContactsList.png');
export const loginexamplelistthumbnail = require('./ReactReduxLoginExample.png');
export const maturefashionsthumbnail = require('./MatureFashions.png');

const AlbumCard = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={thumbnailSrc} />
        <Card.Body>
          <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button secondary outline sm>View</Button>
              <Button secondary outline sm>Source</Button>
            </ButtonGroup>
            <BSmall text="muted">9 mins</BSmall>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}
const AlbumCard1 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={contosothumbnail} onClick={()=> window.open("https://contosouniversity20200621180934.azurewebsites.net/", "_blank")}/>
        <Card.Body>
          <h4>Contoso University</h4>
          <Card.Text>Contoso University is an ASP.NET Core MVC web application, created by following this <BA href="https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/?view=aspnetcore-3.1" text="black">Microsoft tutorial</BA> It uses MVC and EF Core to link to a Sql Server database hosted on Azure. The app is also hosted on Azure and was published by using Visual Studio 2019's 'publish to Azure' wizard.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("https://contosouniversity20200621180934.azurewebsites.net/", "_blank")}>View</Button>
              <Button secondary outline sm onClick={()=> window.open("https://github.com/jc184/ContosoUniversity", "_blank")}>Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumCard2 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={listofingredientsthumbnail} onClick={()=> window.open("https://peaceful-wave-81061.herokuapp.com/", "_blank")}/>
        <Card.Body>
          <h4>List of Ingredients</h4>
          <Card.Text>List of Ingredients is a Ruby on Rails API web application that uses a React frontend and stores its data in an ActiveAdmin CMS. 
            It was created by following this <BA href="https://blog.heroku.com/a-rock-solid-modern-web-stack" text="black">Heroku Rails tutorial </BA> 
            It uses Heroku deployment to host the app with a PostgreSQL database, also on Heroku. The app can be administered by appending the string 
            '/admin' to the url, and carrying out Create / Read / Update / Delete actions on the ActiveAdmin CMS.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("https://peaceful-wave-81061.herokuapp.com/", "_blank")}>View</Button>
              <Button secondary outline sm >Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumCard3 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={todoapplicationthumbnail} onClick={()=> window.open("https://guarded-inlet-64438.herokuapp.com/", "_blank")}/>
        <Card.Body>
          <h4>ToDo Application</h4>
          <Card.Text>The ToDo Application is a Ruby on Rails API web application that also uses a React frontend and stores its data in a PostgreSQL database. 
            It was created by following this <BA href="https://stevepolito.design/blog/rails-react-tutorial/" text="black">Rails tutorial. </BA> 
            It uses Heroku deployment to host the app with a PostgreSQL database, also on Heroku. The app features a secure login facility, and it allows ToDos
            to be added, amended or deleted.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("https://guarded-inlet-64438.herokuapp.com/", "_blank")}>View</Button>
              <Button secondary outline sm >Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumCard4 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={meancontactslistthumbnail} onClick={()=> window.open("https://murmuring-temple-57986.herokuapp.com/", "_blank")}/>
        <Card.Body>
          <h4>MEAN Contacts List</h4>
          <Card.Text>The MEAN Contacts List is a MEAN Stack (MongoDB, Expressjs, Angularjs, Nodejs) web application that uses an Angular frontend, 
            a Node backend RESTful API and stores its data in a MongoDB database. 
            It was created by following this <BA href="https://devcenter.heroku.com/articles/mean-apps-restful-api" text="black">Mean Stack tutorial. </BA> 
            It also uses Heroku deployment to host the app, and the user can add, edit and remove contacts, which are stored in a MongoLabs database.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("https://murmuring-temple-57986.herokuapp.com/", "_blank")}>View</Button>
              <Button secondary outline sm >Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumCard5 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={loginexamplelistthumbnail} onClick={()=> window.open("http://52.174.30.43/", "_blank")}/>
        <Card.Body>
          <h4>React-Redux Login Example</h4>
          <Card.Text>React-Redux Login Example is a full stack ASP.NET Core Web API web application that uses a React frontend. 
            It is hosted on a Windows VM on Azure and uses IIS to run both frontend and backend applications. 
            It was created by following this <BA href="https://jasonwatmore.com/post/2020/01/10/react-aspnet-core-on-azure-with-sql-server-how-to-deploy-a-full-stack-app-to-microsoft-azure" text="black">React-Redux Login tutorial. </BA> 
            The application allows a user to register and login, and user details are stored in an Azure SqlServer database. All credit for this app should really go to Jason Watmore for his tutorial.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("http://52.174.30.43/", "_blank")}>View</Button>
              <Button secondary outline sm >Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumCard6 = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={maturefashionsthumbnail} onClick={()=> window.open("https://maturefashionsappv220200717120142.azurewebsites.net/Homes", "_blank")}/>
        <Card.Body>
          <h4>Mature Fashions</h4>
          <Card.Text>Mature Fashions is a full stack ASP.NET Core MVC web application that uses the Database First method in its creation. 
            It is hosted on a Azure and uses an Azure hosted SQL Server database to store data about fashion shows in nursing homes in the UK. 
            It was created by building the app from a pre-existing local database and deploying both to Azure by using Visual Studio's Publish wizard.
            The application allows a user to carry out C-R-U-D functions on the database of 11 tables via the applications interface</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button type="button" secondary outline sm onClick={()=> window.open("https://maturefashionsappv220200717120142.azurewebsites.net/Homes", "_blank")}>View</Button>
              <Button secondary outline sm >Source</Button>
            </ButtonGroup>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumHeader = (props) => {
  return (
    <header>
      <Collapse bg="dark" id="navbarHeader">
        <Container>
          <Row>
            <Col col="sm-8 md-4" py="4">
              <BH4 text="white">About</BH4>
              <BP text="muted">This portfolio of web applications has been assembled in my spare time over the last few weeks. It contains mainly ASP.NET Core MVC and WebAPI applications, but also React, Ruby on Rails and MEAN / MERN stack apps as well. They are all small applications - for anything sizeable e.g microservices, please see my GitHub page.</BP>
            </Col>
            <Col sm="2" offset="md-1" py="4">
              <BH4 text="white">Contact</BH4>
              <List unstyled>
                <List.Item><BA href="mailto:james.chalmers184@gmail.com" text="white">Email me</BA></List.Item>
                <List.Item><BA href="https://www.linkedin.com/in/james-chalmers-a47a85a6/" text="white" target="_blank">LinkedIn</BA></List.Item>
                <List.Item><BA href="https://stackoverflow.com/users/story/5830202" text="white" target="_blank">Stack Overflow</BA></List.Item>
                <List.Item><BA href="https://github.com/jc184" text="white" target="_blank">Github</BA></List.Item>
                <List.Item><BA href="https://twitter.com/jc1848" text="white" target="_blank">Twitter</BA></List.Item>
                <List.Item><BA href="https://happy-jepsen-102e57.netlify.app/blog/" text="white" target="_blank">My Blog</BA></List.Item>
              </List>
            </Col>
            <Col sm="4" offset="md-1" py="4">             
            <BH4 text="white">LinkedIn</BH4>
              <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="james-chalmers-a47a85a6">
              <Helmet>
                <script type="text/javascript"  src="https://platform.linkedin.com/badges/js/profile.js" async defer></script> 
              </Helmet>
                <a className="LI-simple-link" href='https://uk.linkedin.com/in/james-chalmers-a47a85a6?trk=profile-badge'>James Chalmers</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Collapse>
      <Navbar dark bg="dark" shadow="sm">
        <Container display="flex" justifyContent="between">
          <Navbar.Brand href="#" display="flex" alignItems="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Portfolio</strong>
          </Navbar.Brand>
          <Navbar.Toggler target="#navbarHeader" aria-controls="navbarHeader" aria-label="Toggle navigation" />
        </Container>
      </Navbar>
    </header>
  )
}

const AlbumFooter = (props) => {
  return (
    <BFooter text="muted">
      <Container>
        <BP float="right"><a href="#">Back to top</a></BP>
        <p>Portfolio is &copy; James Chalmers 2020</p>
      </Container>
    </BFooter>
  )
}

const AlbumJumbotron = (props) => {
  const style = {
    backgroundColor: '#fff',
    heading: {
      fontWeight: '300'
    }
  }

  return (
    <Jumbotron text="center" style={style}>
      <Container>
        <BH1 style={style.heading}>React / ASP.NET Core Web Development Portfolio</BH1>
        <Lead text="muted">This is my web development portfolio - my name is James Chalmers and I am an ASP.NET Core C# developer with 18 months commercial experience in Sports Betting development, using C#, ASP.NET Core, WebAPI, MVC, Angular and React. I possess a BSc Degree in Computing (Software Development) from Moray College UHI, Elgin, Scotland. I am also interested in Ruby on Rails and MEAN / MERN stack applications. These small applications are all developed in my spare time and have been deployed to Heroku, Azure and Amazon Web Services so they can be viewed by prospective employers etc.</Lead>
      </Container>
    </Jumbotron>
  )
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AlbumHeader />
        <main role="main">
          <AlbumJumbotron />
          <BDiv py="5" bg="light">
            <Container>
              <Row>
                <AlbumCard1 />
                <AlbumCard2 />
                <AlbumCard3 />
                <AlbumCard4 />
                <AlbumCard5 />
                <AlbumCard6 />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
              </Row>
            </Container>
          </BDiv>
        </main>
        <AlbumFooter />
      </React.Fragment>
    );
  }
}

export default App;
