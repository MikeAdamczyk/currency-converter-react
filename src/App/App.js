import React, { useState } from 'react';
import Header from "./Container/Header"
import Footer from './Container/Footer';
import Container from './Container';
import SectionHeader from './Container/Section/SectionHeader';
import Emoji from './Container/Section/SectionHeader/Emoji';
import Section from "./Container/Section";
import Form from "./Container/Section/Form";
import { currencies } from './currencies';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (sourceCurrency, sourceAmount, targetCurrency) => {

    const rate = currencies.find(({ shortName }) => shortName === targetCurrency).rate;

    let plnValue = (+sourceAmount * rate).toFixed(2);

    setResult({
      sourceAmount: +sourceAmount,
      sourceCurrency,
      targetAmount: sourceCurrency === "PLN" ? plnValue : plnValue / rate,
      targetCurrency,
    });

  };

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

        form={
          <Form
            result={result}
            calculateResult={calculateResult}
          />
        }
      />

      <Footer title="© Copyright by Michał Adamczyk 2020. Wszelkie prawa zastrzeżone!" />

    </Container >
  )

};

export default App;
