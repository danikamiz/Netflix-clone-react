import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
        setSlideRows(results);
        } else {
        setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
        <>
          {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
    
          <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Futflix" />
                <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
                  Series
                </Header.TextLink>
                <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
                  Films
                </Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => firebase.auth().signOut()}> Log out </Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>

            <Header.Feature>
                <Header.FeatureCallOut>Ver Joker ahora</Header.FeatureCallOut>
                <Header.Text>
                    Ante el sentimiento de soledad incluso entre multitudes, el 
                    c??mico fallido, Arthur Fleck, busca algo con lo que conectar 
                    realmente en las calles de Gotham City. Arthur lleva dos 
                    m??scaras, una que adereza su trabajo como payaso y otra es
                    la que proyecta en un vanal intento por sentirse parte de el 
                    mundo que le rodea.
                </Header.Text>
                <Header.PlayButton>Ver</Header.PlayButton>
            </Header.Feature>
        </Header>

        <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}