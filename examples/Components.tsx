import React from 'react';
import Input from '../components/Input';
import { H1, H2, H3, H4, P } from '../components/Text';
import { Box } from '../components/Box';
import Card from '../components/Card';
import Autocomplete from '../components/autocomplete/Autocomplete';
import FetchAutocomplete from '../components/autocomplete/FetchAutocomplete';
import MenuItem from '../components/autocomplete/MenuItem';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Icon from '../components/Icon';
import { faFanTable } from '@fortawesome/pro-duotone-svg-icons';
import Switch from '../components/Switch';
import { useSchemeContext } from '../context/SchemeContext';

type Props = {};

const Components = (props: Props) => {
  const { setScheme, setAuto, auto, scheme } = useSchemeContext();

  const handleSetAuto = () => {
    setAuto(!auto);
  };

  const handleSetScheme = () => {
    setAuto(false);
    setScheme(scheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Box bg="bg-0">
      <Box p={5}>
        <Box m={3}>
          <Box mb={3}>
            <H3 mb={2}>System</H3>
            <P mb={2}>When active, the color scheme will match the system's preference.</P>
            <Switch checked={auto} onClick={handleSetAuto} />
          </Box>

          <H3 mb={2}>Dark mode</H3>
          <P mb={2}>Cannot change dark mode unless system is deactivated.</P>
          <Switch disabled={auto} checked={scheme === 'dark'} onClick={handleSetScheme} />
        </Box>

        <Box bg="gray10" p={3}>
          Box
        </Box>

        <Card>Card</Card>

        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <P>P</P>

        <Box m={3}>
          <Input placeholder="Start typing..." />
        </Box>

        <Box m={3}>
          <Autocomplete
            placeholder="Autocomplete..."
            items={[{ id: 'Item 1' }, { id: 'Item 2' }]}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <MenuItem text={item.id} />}
          />
        </Box>

        <Box m={3}>
          <FetchAutocomplete
            placeholder="Autocomplete with fetch..."
            request={() =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve([{ id: 'Item 1' }, { id: 'Item 2' }]);
                }, 2000);
              })
            }
            keyExtractor={(item) => item.id}
            formatResponse={(res) => res}
            renderItem={(item) => <MenuItem text={item.id} />}
          />
        </Box>

        <Box>
          <Button>Basic button</Button>
          <Button color="white" bg="primary">
            Primary button
          </Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="transparent">Transparent button</Button>

          <IconButton icon={<Icon icon={faFanTable} />} />
        </Box>
      </Box>
    </Box>
  );
};

export default Components;
