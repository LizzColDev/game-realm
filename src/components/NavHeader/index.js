import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Offcanvas, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import { useQuery } from 'react-query';
import { fetchGames } from '../../App/GameContext/useDataGames';

function NavHeader() {

	const {data, isLoading, error} = useQuery('games', fetchGames);

	if (isLoading) {

		return <div>Loading...</div>;
		
	}

	if (error) {
		return <div>Error fetching </div>;
	}
	return (
		<header>
			<Navbar variant="dark" expand="lg" key="lg" className="mb-3">
				<Container fluid>
					<Navbar.Brand as={Link} to='/'>
						<img
							alt="logo-game-world"
							src="https://cdn-icons-png.flaticon.com/512/7205/7205615.png"
							className="d-inline-block align-top logo"
						/>{' '}
						Game World
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="togle-menu offcanvasNavbar-expand-lg">
						<img src='https://cdn-icons-png.flaticon.com/512/8367/8367536.png' className="menu-icon-bar"></img>
					</Navbar.Toggle>

					<Navbar.Offcanvas 
						id="offcanvasNavbar-expand-lg" 
						aria-labelledby="offcanvasNavbarLabel-expand-lg"
						placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='title'>
								<img
									alt="logo-game-world"
									src="https://cdn-icons-png.flaticon.com/512/7205/7205615.png"
									className="d-inline-block align-top logo"
								/>{' '}
								Game World
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="navbar-center justify-content-end flex-grow-1 pe-3">
								<Nav.Link as={Link} exact={true.toString()} to="/ranking-games" >Ranking Games</Nav.Link>
								<Nav.Link as={Link} exact={true.toString()} to="/upcoming-games">Upcoming Games</Nav.Link>
								<Nav.Link as={Link} exact={true.toString()} to="/popular-games">Popular Games</Nav.Link>
								<Nav.Link as={Link} exact={true.toString()} to="/news">News</Nav.Link>
								<NavDropdown title='Genres' id="offcanvasNavbarDropdown-expand-lg">
									{data && data.genresGames.map((genre) =>(
										<NavDropdown.Item key={genre.id} as={Link} to={`/${genre.name}`}>{genre.name}</NavDropdown.Item>
									))}
								</NavDropdown>
								<NavDropdown title='Platforms' id="offcanvasNavbarDropdown-expand-lg">
									{data && data.platformsGames.map((platform) =>(
										<NavDropdown.Item key={platform.id} as={Link} to={`/${platform.name}`}>{platform.name}</NavDropdown.Item>
									))}
								</NavDropdown>
								<NavDropdown title='Stores' id="offcanvasNavbarDropdown-expand-lg">
									{data && data.storesGames.map((store) =>(
										<NavDropdown.Item key={store.id} as={Link} to={`/${store.name}`}>{store.name}</NavDropdown.Item>
									))}
								</NavDropdown>
							</Nav>
							<InputGroup className=" d-flex" style={{ maxWidth: '360px', alignContent: 'center' }}>
								<Form.Control
									type="search"
									placeholder="Search"
									aria-label="Search"
									aria-describedby="basic-addon2"
								/>
								<Button variant="outline-secondary" id="button-addon2">
									🔍
								</Button>
							</InputGroup>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</header>
	  );
}
	
export { NavHeader };