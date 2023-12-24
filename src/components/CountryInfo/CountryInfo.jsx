import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';
import { GoBackBtn } from 'components'; 
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const CountryInfo = ({ info: {
  flag,
  capital,
  country,  
  languages = [],
  population }
}) => {
  const location = useLocation()
  const path = useRef(location?.state?.from ?? '/')
  // console.log(location)
  return ( <> 
    <GoBackBtn path={path.current}>
        Go back
      </GoBackBtn>
        <CountryWrapper >
      
      <Flag>
        <Image src={flag} alt={country } />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{ capital}</Accent>
        </CountryCapital>

        <CountryTitle>{ country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{ population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{ languages.join(", ")}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
    </>
    );
};
