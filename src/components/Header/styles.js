import colors from '../../utils/colors';

const styles = {
  appbar: {
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    marginBottom: '5rem',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  formGroup: {
    color: colors.gallery,
    '.MuiCheckbox-root': {
      color: colors.gallery
    }
  }
};

export default styles;
