import * as React from 'react';
import { Alert as PFAlert, Button as PFButton, PageSection, Text, TextContent } from '@patternfly/react-core';
import '../../MUI-theme.css';
import {getTheme} from '../../MUI-theme.tsx';


import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

getTheme();

const MUIThemePOC: React.FunctionComponent = () => (
  <>
    <PageSection>
      <TextContent>
        <Text component="h1">Alert demo </Text>
        <Text component="p">
          Alert theming demo. This is a small demo to test theming the PF6 Alert component. Stylesheet contains themed tokens
          for PF6 component and has been loaded into this demo.
        </Text>
      </TextContent>
      <br />
      MUI Alert:
      <Alert variant="outlined" severity="warning">
        This is an outlined warning Alert.
      </Alert>
      <br />
      MUI-themed PF Alert:
      <PFAlert
        customIcon={<WarningAmberIcon />}
        variant="warning"
        title="This is an outlined warning Alert."
        ouiaId="WarningAlert"
      />
    </PageSection>
    <PageSection>
      <TextContent>
        <Text component="h1">Button demo </Text>
        <Text component="p">
          Button theming demo. This is a small demo to test theming the PF6 Button component. Stylesheet contains themed
          tokens for PF6 components and has been loaded into this demo.
        </Text>
        <br />
      </TextContent>
      MUI Button:
      <br />
      <Button variant="contained" disableElevation>
        Button
      </Button>
      <br />
      <br />
      MUI-themed PF button:
      <br />
      <PFButton onClick={() => console.log('success')}>Button</PFButton>
    </PageSection>
  </>
);

export { MUIThemePOC };
