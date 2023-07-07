import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Offcanvas, InputGroup } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './styles.css';
import { useDataByMenu } from '../../../GameContext/useDataByMenu';
import { GameContext } from '../../../GameContext/GameProvider';

function NavHeader() {
	const { query, setQuery } = useContext(GameContext);
	const { data, isLoading } = useDataByMenu();
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);

	const handleSearch = (event) => {
		setQuery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/search/${query}`);
	};

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
					<Navbar.Toggle
						aria-controls="togle-menu offcanvasNavbar-expand-lg"
						onClick={() => setExpanded(!expanded)}
					>
						<img src='https://cdn-icons-png.flaticon.com/512/8367/8367536.png' className="menu-icon-bar" alt="menu-icon" />
					</Navbar.Toggle>

					<Navbar.Offcanvas
						show={expanded}
						onHide={() => setExpanded(false)}
						id="offcanvasNavbar-expand-lg"
						aria-labelledby="offcanvasNavbarLabel-expand-lg"
						placement="end"
					>
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
								<Nav.Link
									as={NavLink}
									exact={true.toString()}
									style={({ isActive }) => ({
										color: isActive ? '#fcb322' : '',
										fontWeight: isActive ? 'bold' : ''
									})}
									to="/ranking-games"
									onClick={() => setExpanded(false)}
								>
                  Ranking Games
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									exact={true.toString()}
									style={({ isActive }) => ({
										color: isActive ? '#fcb322' : '',
										fontWeight: isActive ? 'bold' : ''
									})}
									to="/upcoming-games"
									onClick={() => setExpanded(false)}
								>
                  Upcoming Games
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									exact={true.toString()}
									style={({ isActive }) => ({
										color: isActive ? '#fcb322' : '',
										fontWeight: isActive ? 'bold' : ''
									})}
									to="/popular-games"
									onClick={() => setExpanded(false)}
								>
                  Popular Games
								</Nav.Link>
								<Nav.Link
									as={NavLink}
									exact={true.toString()}
									style={({ isActive }) => ({
										color: isActive ? '#fcb322' : '',
										fontWeight: isActive ? 'bold' : ''
									})}
									to="/news"
									onClick={() => setExpanded(false)}
								>
                  News
								</Nav.Link>
								<NavDropdown
									title='Genres'
									id="offcanvasNavbarDropdown-expand-lg"
								>
									{isLoading ? (
										<div>Loading ...</div>
									) : (
										data && data.genresGames.map((genre) => (
											<NavDropdown.Item
												key={genre.id}
												as={NavLink}
												style={({ isActive }) => ({
													color: isActive ? '#fcb322' : '',
													backgroundColor: isActive ? 'white' : '',
													fontWeight: isActive ? 'bold' : ''
												})}
												to={`/genres/${genre.name.toLowerCase()}`}
												onClick={() => setExpanded(false)}
											>
												{genre.name}
											</NavDropdown.Item>
										))

									)}
								</NavDropdown>
							</Nav>
							<form onSubmit={handleSubmit}>
								<InputGroup className="d-flex" style={{ maxWidth: '360px', alignContent: 'center', marginTop: '12px' }}>
									<Form.Control
										type="search"
										placeholder="Search"
										aria-label="Search"
										aria-describedby="basic-addon2"
										value={query}
										onChange={handleSearch}
									/>
									<Button type='submit' variant="outline-secondary" id="button-addon2">
                    🔍
									</Button>
								</InputGroup>
							</form>

						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</header>
	);
}

export { NavHeader };