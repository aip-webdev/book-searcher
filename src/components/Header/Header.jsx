import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import styles from './styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch, useSelector} from "react-redux";
import {setOfflineMode} from "../../utils/utils";
import {setQuery, switchOfflineMode} from "../../store/actions";

const Header = () => {
  const dispatch = useDispatch();
  const offline = useSelector(state => state.offlineMode)
  const handleChange = () => {
    setOfflineMode(!offline)
    dispatch(switchOfflineMode(!offline))
    dispatch(setQuery(''))
  }
  return (
      <AppBar
          sx={styles.appbar}
          position='relative'
      >
        <Toolbar sx={styles.toolbar}>
          <Typography variant='h4' color='inherit' noWrap>
            Find a Book
          </Typography>
          <FormGroup sx ={styles.formGroup}>
            <FormControlLabel
                sx={{ margin: 0 }}
                control={<Checkbox checked={offline} onChange={handleChange} />}
                label='Offline Mode'
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
  )
};

export default Header;
