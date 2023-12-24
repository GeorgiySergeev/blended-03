import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const query = search.get('value');
    if (!query) {
      return;
    }

    const getByRegion = async () => {
      setLoader(true);
      setError(false);
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };
    getByRegion();
  }, [search]);

  function onSubmit(value) {
    setSearch({ value });
  }

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        {error && <Heading>Something go wrong!</Heading>}
      </Container>
    </Section>
  );
};
