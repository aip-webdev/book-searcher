import colors from "../../utils/colors";

const styles = {
  width: '33%',
  margin: '5rem 0',
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
