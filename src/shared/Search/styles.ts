import colors from '../../utils/enums/colors';

const styles = {
  width: '33%',
  marginBottom: '5rem',
  alignSelf: 'center',
  '.MuiOutlinedInput-root': {
    fontSize: '1.5rem',
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: colors.gallery,
  },
  '.MuiInputLabel-root': {
    fontSize: '1.5rem',
    color: colors.gallery,
  },
  '.MuiOutlinedInput-input': {
    color: `${colors.gallery} !important`,
  },
  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${colors.gallery} !important`,
  },
  '.Mui-focused': {
    color: `${colors.gallery} !important`
  }
}

export default styles;
