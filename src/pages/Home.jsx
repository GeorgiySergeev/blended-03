import { useState, useEffect } from 'react';
import { Container, CountryList, Heading, Loader, Section } from 'components';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fatchCountries = async () => {
      setLoader(true);
      setError(false);

      try {
        const data = await getCountries();
        console.log(data);
        setCountries(data);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };

    fatchCountries();
  }, []);

  return (
    <Section>
      {loader && <Loader />}

      <Container>
        {error && <Heading>Something go wrong!</Heading>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
