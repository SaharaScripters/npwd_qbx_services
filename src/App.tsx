import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from './styles/header';
import { Loading } from './styles/loading';
import { IPhoneSettings } from '@npwd/types';
import { i18n } from 'i18next';
import {
  IconButton,
  Theme,
  StyledEngineProvider,
  ThemeProvider,
  Typography,
  CircularProgress,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { ServiceJob } from './types/contact';
import fetchNui from './utils/fetchNui';
import { ServerPromiseResp } from './types/common';
import { ContactList } from './components/ContactList';

const Container = styled.div<{ isDarkMode: boolean }>`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  background-color: #fafafa;
  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: #212121;
  `}
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

export function App(props: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [services, setServices] = useState<ServiceJob[] | undefined>([]);


  const isDarkMode = props.theme.palette.mode === "dark";

  useEffect(() => {
    fetchNui<ServerPromiseResp<ServiceJob[]>>("getServices").then(
      (resp) => {
        setIsLoading(false);
        setServices(resp.data);
      }
    );

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={props.theme}>
        <Container isDarkMode={isDarkMode}>
          <Header>
            <IconButton color="primary" onClick={() => history.goBack()}>
              <ArrowBack />
            </IconButton>
            <Typography fontSize={24} color="primary" fontWeight="bold">
              Services
            </Typography>
          </Header>
          {
            isLoading ? (
              <Loading>
                <CircularProgress />
              </Loading>
            ) : (
              services && (
                <ContactList isDarkMode={isDarkMode} services={services} />
              )
            )
          }
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default function WithProviders(props: AppProps) {
  return (
    <App {...props} />
  );
}
