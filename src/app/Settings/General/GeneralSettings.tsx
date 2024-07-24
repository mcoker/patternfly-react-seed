import * as React from 'react';
import { Alert, Button, PageSection, Text, TextContent } from '@patternfly/react-core';
import '../../MUI-theme.css';

// import {MUIWarningIcon} from '../General/icons/warning_amber.svg'

const MUIThemePOC: React.FunctionComponent = () => (
  <>
    <PageSection>
      <TextContent>
        <Text component="h1">Alert demo </Text>
        <Text component="p">
          Alert theming demo. This is a small demo loading test PF6 component Create stylesheet containing themed tokens
          for PF6 component, load into demo.
        </Text>
      </TextContent>
      <br />
      <Alert
        // customIcon={<MUIWarningIcon />}
        variant="warning"
        title="Warning alert title"
        ouiaId="WarningAlert"
      />
    </PageSection>
    <PageSection>
      <TextContent>
        <Text component="h1">Button demo </Text>
        <Text component="p">
          Button theming demo. This is a small demo loading test PF6 component Create stylesheet containing themed
          tokens for PF6 component, load into demo.
        </Text>
        <br />
      </TextContent>
      <Button onClick={() => console.log('success')}>Button</Button>
    </PageSection>
  </>
);

export { MUIThemePOC };
