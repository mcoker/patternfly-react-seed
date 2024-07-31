import * as React from 'react';
import {
  Alert as PFAlert,
  Button as PFButton,
  Tab as PFTab,
  Tabs as PFTabs,
  PageSection,
  TabContent,
  TabContentBody,
  TabTitleText,
  Text,
  TextContent,
} from '@patternfly/react-core';
import '../../MUI-theme.css';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const AlertDemo: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
