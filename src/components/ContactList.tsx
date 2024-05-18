import {
  Box,
  ListItem,
  List,
  ListSubheader,
  Collapse,
  IconButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ServiceJob } from '../types/contact';
import PhoneIcon from '@mui/icons-material/Phone';
import { ServerPromiseResp } from '../types/common';
import fetchNui from '../utils/fetchNui';

interface ContactListProps {
  isDarkMode: boolean;
  services: ServiceJob[];
}

export const ContactList: React.FC<ContactListProps> = ({ services, isDarkMode }) => {
  const [collapseId, setCollapseId] = useState<string | null>(null);

  const expandItem = (id: string) => {
    setCollapseId(id);
  };

  const handleCallPlayer = (number: string, job: string) => {
    fetchNui<ServerPromiseResp>('npwd:services:callPlayer', { number, job }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Box>
      {
        services.length === 0 && (
          <Typography variant="h6" align="center">
            No services available
          </Typography>
        )
      }
      {
        services.map((serviceJob: ServiceJob) => {
          return (
            <List
              subheader={
                <ListSubheader sx={{ cursor: 'pointer' }} onClick={() => expandItem(serviceJob.jobHash)}>
                  {serviceJob.jobName.toUpperCase()}
                </ListSubheader>
              }
            >
              <Collapse in={collapseId === serviceJob.jobHash}>
                {serviceJob.contacts.map((contact) => {
                  return (
                    <ListItem
                      secondaryAction={
                        <IconButton
                          onClick={() => handleCallPlayer(contact.phoneNumber, serviceJob.jobName)}
                        >
                          <PhoneIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: isDarkMode ? '#fff' : '#000',
                          fontWeight: 'bold',
                        }}
                        primary={contact.name}
                        secondary={contact.phoneNumber}
                      />
                    </ListItem>
                  );
                })}
              </Collapse>
            </List>
          );
        })
      }
    </Box>
  );
};

