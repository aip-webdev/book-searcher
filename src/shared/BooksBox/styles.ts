import colors from '../../utils/enums/colors';

const styles = {
    listItem: {
        margin: '0',
        padding: '0',
        width: '45%',
        '&:nth-of-type(2n)': {
            alignSelf: 'flex-end',
            '.MuiPaper-root': {
                backgroundColor: colors.lime,
                color: colors.darkGray
            }
        },
        '.MuiPaper-root': {
            backgroundColor: colors.blue,
            color: colors.gallery
        },
        '&:not(last-child)': {
            marginBottom: '2rem'
        }
    },
    listItemLoading: {
        margin: '0',
        padding: '0',
        width: '45%',
        '&:nth-of-type(2n)': {
            alignSelf: 'flex-end',
        },
        '.MuiPaper-root': {
            backgroundColor: colors.mdGray,
            color: colors.mdGray
        },
        '.MuiTypography-root': {
            backgroundColor: colors.gray,
            color: colors.gray,
        },
        '&:not(last-child)': {
            marginBottom: '2rem'
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 4rem'
    }
}

export default styles;
