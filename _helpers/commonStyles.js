import colors from "./colors";

const commonStyles = {
    h1: {
        fontSize: 26,
        lineHeight: 34,
        textAlign: 'left',
        fontWeight: '800',
        fontFamily: 'HelveticaNeueMedium',
        color: colors.white
    },
    h2: {
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
        fontFamily: 'HelveticaNeueMedium',
        color: colors.white
    },
 h3: {
        fontSize: 18,
        lineHeight: 31,
        textAlign: 'left',
     fontFamily: 'HelveticaNeueMedium',
     fontWeight: '800',
        color: colors.white
    },
 h4: {
        fontSize: 16,
        lineHeight: 21,
     fontFamily: 'HelveticaNeueMedium',
        textAlign: 'left',
        color: colors.white
    },
h5: {
        fontSize: 16,
        lineHeight: 21,
    fontFamily: 'HelveticaNeueMedium',
        textAlign: 'center',
    paddingTop: 18,
        color: colors.white
    },
h6: {
        fontSize: 12,
        lineHeight: 14,
    fontFamily: 'HelveticaNeueMedium',
        textAlign: 'left',
    paddingRight: 15,
        color: colors.secondary
    }
}

export default commonStyles
