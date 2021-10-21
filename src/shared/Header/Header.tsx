import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import styles from './styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useAppStore} from "../../hooks/useAppStore";
import {setQuery, switchOfflineMode} from "../../context/actions";

const Header = () => {
  const [state, dispatch] = useAppStore();
  const handleChange = () => {
    dispatch(switchOfflineMode(!state.offlineMode))
    dispatch( setQuery(''))
  }
  return (
      <AppBar
          sx={styles.appbar}
          position='relative'
      >

        <Toolbar
            //@ts-ignore
            sx={styles.toolbar}
        >
          <Typography variant='h4' color='inherit' noWrap>
            Find a Book
          </Typography>
          <FormGroup sx ={styles.formGroup}>
            <FormControlLabel
                sx={{ margin: 0 }}
                control={<Checkbox role='modeChanger' checked={state.offlineMode} onChange={handleChange} />}
                label='Offline Mode'
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
  )
};

export default Header;
