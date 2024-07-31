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

const MUIThemePOC: React.FunctionComponent = () => {
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
      <PageSection>
        <TextContent>
          <Text component="h1">Button demo </Text>
          <Text component="p">
            Button theming demo. This is a small demo to test theming the PF6 Button component. Stylesheet contains
            themed tokens for PF6 components and has been loaded into this demo.
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
      <PageSection>
        <TextContent>
          <Text component="h1">Tabs demo </Text>
          <Text component="p">
            Tabs theming demo. This is a small demo to test theming the PF6 Tabs component. Stylesheet contains themed
            tokens for PF6 components and has been loaded into this demo.
          </Text>
          <br />
        </TextContent>
        MUI Tabs:
        <br />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab disableRipple={true} label="Item One" {...a11yProps(0)} />
              <Tab disableRipple={true} label="Item Two" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
        </Box>
        <br />
        <br />
        MUI-themed PF tabs:
        <PFTabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          aria-label="Tabs in the default example"
          role="region"
        >
          <PFTab eventKey={0} title={<TabTitleText>Item One</TabTitleText>} aria-label="Default content - users">
            <TabContent eventKey={0} id="tab1SectionBodyPadding">
              <TabContentBody hasPadding> Item One </TabContentBody>
            </TabContent>
          </PFTab>
          <PFTab eventKey={1} title={<TabTitleText>Item Two</TabTitleText>}>
            <TabContent eventKey={1} id="tab1SectionBodyPadding">
              <TabContentBody hasPadding> Item Two </TabContentBody>
            </TabContent>
          </PFTab>
        </PFTabs>
        <br />
      </PageSection>
    </>
  );
};

export { MUIThemePOC };
