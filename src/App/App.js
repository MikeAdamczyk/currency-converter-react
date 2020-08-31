import React from 'react';
import Header from "./Header"
import Footer from './Footer';
import Container from './Container';
import SectionHeader from './Container/Section/SectionHeader';
import Emoji from './Container/Section/SectionHeader/Emoji';
import Section from "./Container/Section";
import Form from "./Container/Section/Form"

function App() {

  return (

    <Container>

      <Header title="Kalkulator walut" />

      <Section
        header={
          <SectionHeader
            emoji={<Emoji symbol="🔒" label="lock" />}
            title="Bezpieczna wymiana przez internet!"
          />
        }

        form={<Form />}
      />

      <Footer title="© Copyright by Michał Adamczyk 2020. Wszelkie prawa zastrzeżone!" />

    </Container >
  )

};

export default App;