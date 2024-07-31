import * as React from 'react';
import {
  Alert as PFAlert,
  PageSection,
  Text,
  TextContent,
} from '@patternfly/react-core';
import '../../MUI-theme.css';

import Alert from '@mui/material/Alert';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const AlertDemo: React.FunctionComponent = () => {

  return (
    <>
      <PageSection>
        <TextContent>
          <Text component="h1">Alert demo </Text>
          <Text component="p">
            Alert theming demo. This is a small demo to test theming the PF6 Alert component. Stylesheet contains themed
            tokens for PF6 component and has been loaded into this demo.
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
        // hide this when the theme is toggled
          customIcon={<WarningAmberIcon />}
          variant="warning"
          title="This is an outlined warning Alert."
          ouiaId="WarningAlert"
        />
      </PageSection>
    </>
  );
};

export { AlertDemo };
