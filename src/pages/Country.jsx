import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchCountry} from 'service/country-service'

export const Country = () => {

  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  
  useEffect(() => {
    const countryInfo = async () => {
    setLoading(true)  
      try {
        const data = await fetchCountry(id)
        setCountry(data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    countryInfo()
  }, [id])

  return (
    <Section>
      <Container>
        {loading && <Loader/>}
        <CountryInfo info={country} />
      </Container>
    </Section>
  );
};
