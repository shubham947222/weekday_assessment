import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#8DA6E5",
//       main: "#1B4CCB",
//       dark: "#143998",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#FBDA8B",
//       main: "#F7B518",
//       dark: "#B98812",
//       contrastText: "#fff",
//     },
//     error: {
//       light: "#FB9097",
//       main: "#F8222F",
//       dark: "#BA1923",
//       contrastText: "#fff",
//     },
//     warning: {
//       light: "#F6B580",
//       main: "#ED6C02",
//       dark: "#B25101",
//       contrastText: "#fff",
//     },
//     info: {
//       light: "#80C3E8",
//       main: "#0288D1",
//       dark: "#01669D",
//       contrastText: "#fff",
//     },
//     success: {
//       light: "#8FE28E",
//       main: "#20C51C",
//       dark: "#189315",
//       contrastText: "#fff",
//     },

//     background: {
//       default: "#f5f5f5",
//     },
//   },
//   shadows: Array(25).fill("0px 4px 12px rgba(0, 0, 0, 0.1)"),
// });

const theme = createTheme({
  palette: {
    primary: {
      light: "#8DA6E5",
      main: "#1B4CCB",
      dark: "#143998",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FBDA8B",
      main: "#F7B518",
      dark: "#B98812",
      contrastText: "#fff",
    },
    background: {
      default: "#f5f5f5",
    },
    base: {
      white: "#FFFFFF",
      black: "#000000",
    },
    gray: {
      main: "#667085",
      dark1: "#475467",
      dark2: "#344054",
      dark3: "#1D2939",
      dark4: "#101828",
      light1: "#98A2B3",
      light2: "#D0D5DD",
      light3: "#EAECF0",
      light4: "#F2F4F7",
      light5: "#F9FAFB",
    },
    error: {
      main: "#F04438",
      light1: "#f36960",
      light2: "#f57c74",
      light3: "#f8a29c",
      light4: "#f9b4af",
      light5: "#fbc7c3",
      light6: "#fcdad7",
    },
    warning: {
      main: "#F79009",
      dark1: "DC6803",
      dark2: "#B54708",
      light1: "#FDB022",
      light2: "#FEC84B",
      light3: "#FEDF89",
      light4: "#FEF0C7",
      light6: "#FFFCF5",
    },
    success: {
      main: "#12B76A",
      dark1: "#039855",
      dark2: "#027A48",
      light1: "#32D583",
      light2: "#6CE9A6",
      light3: "#A6F4C5",
      light4: "#D1FADF",
      light5: "#ECFDF3",
      light6: "#F6FEF9",
    },
    blue: {
      main: "#2E90FA",
      dark: "#1849A9",
      light1: "#53B1FD",
      light2: "#84CAFF",
      light3: "#B2DDFF",
      light4: "#D1E9FF",
      light5: "#EFF8FF",
    },
    blueDark: {
      main: "#2970FF",
      light1: "#528BFF",
      light2: "#84ADFF",
      light3: "#B2CCFF",
      light4: "#D1E0FF",
      light5: "#EFF4FF",
      light6: "#F5F8FF",
      dark1: "#00359E",
      dark: "#155EEF",
      dark2: "#004EEB",
    },
    indigo: {
      main: "#6172F3",
      dark1: "#444CE7",
      dark2: "#3538CD",
      light1: "#8098F9",
      light2: "#A4BCFD",
      light3: "#C7D7FE",
    },
    violet: {
      main: "#875BF7",
      light2: "#C3B5FD",
    },
    purple: {
      main: "#7A5AF8",
    },
    fuchsia: {
      main: "#D444F1",
    },
    border: {
      main: "#EAECF0",
    },
    gradient: {
      main: "var(--gradient, linear-gradient(134deg, #2970FF 0%, #0040C1 100%))",
      background:
        "linear-gradient(327deg, rgba(251, 232, 255, 0.58) 0%, rgba(209, 224, 255, 0.58) 100%)",
    },
    gradient: {
      main: "var(--gradient, linear-gradient(134deg, #2970FF 0%, #0040C1 100%))",
      background:
        "linear-gradient(327deg, rgba(251, 232, 255, 0.58) 0%, rgba(209, 224, 255, 0.58) 100%)",
    },
  },
  border: {
    main: "1px solid #EAECF0",
  },
  typography: {
    heading1: {
      fontSize: "36px",
      lineHeight: "44px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 600,
    },
    heading2: {
      fontSize: "30px",
      lineHeight: "38px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 600,
    },
    heading3: {
      fontSize: "24px",
      lineHeight: "32px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 600,
    },
    xl: {
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 600,
    },
    lg: {
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "28px",
      fontFamily: "Inter",
      fontWeight: 600,
    },
    md: {
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "24px",
      fontFamily: "Inter",
      fontWeight: 400,
    },
    sm: {
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "20px",
      fontFamily: "Inter",
      fontWeight: 400,
    },
    xs: {
      fontSize: "12px",
      fontStyle: "normal",
      lineHeight: "18px",
      fontFamily: "Inter",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "14px",
    },
    outer: {
      fontFamily: "Outfit",
    },
    inter: {
      fontFamily: "Inter",
    },
  },
  shadows: [
    "none",
    "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    "0px 1px 3px 0px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
    "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
    "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
    "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
    "1px -1px 48px -12px rgba(16, 24, 40, 0.18)",
    "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
    ...Array(25).fill("0px 4px 12px rgba(0, 0, 0, 0.1)"),
  ],
  components: {
    // Name of the component ⚛️
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" && {
            background:
              "linear-gradient(134.37deg, #2970FF 7.97%, #0040C1 84%)",
            color: "#fff",
            borderRadius: "24px",
            padding: "12px 24px",
            height: "44px",
          }),
          ...(ownerState.variant === "outlined" && {
            color: "#fff",
            borderRadius: "24px",
            height: "44px",
            padding: "12px 24px",
            background: "#fff",
            color: "#344054",
            borderColor: "#D0D5DD",
          }),
          ...(ownerState.fullWidth && {
            width: "100%",
          }),
          "&.Mui-disabled": {
            color: "#98A2B3",
            background: "#D1E0FF",
            borderColor: "#84ADFF",
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant == "filled" && {
            background:
              "linear-gradient(134.37deg, #2970FF 7.97%, #0040C1 84%)",
            color: "#fff",
            borderRadius: "24px",
            p: "12px 16px",
          }),
          ...(ownerState.type == "square" && {
            borderRadius: 1,
          }),
          ...(ownerState.variant == "option" && {
            backgroundColor: "#ffffff",
            color: "#344054",
            borderRadius: "12px",
            padding: "12px",
            paddingTop: "16px",
            paddingBottom: "16px",
            border: "1px solid #EAECF0",
            border: "1px solid #D0D5DD",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }),
          ...(ownerState.variant == "selected" && {
            backgroundColor: "#EFF4FF",
            color: "#004EEB",
            borderRadius: "12px",
            padding: "12px",
            paddingTop: "16px",
            paddingBottom: "16px",
            border: "1px solid #004EEB",
            gap: 4,
          }),
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.type == "bold" && {
            fontWeight: 700,
          }),
          ...(ownerState.type == "semibold" && {
            fontWeight: 600,
          }),
          ...(ownerState.type == "medium" && {
            fontWeight: 500,
          }),
          ...(ownerState.type == "regular" && {
            fontWeight: 400,
          }),
          ...(ownerState.family == "outfit" && {
            fontFamily: "Outfit",
          }),
          ...(ownerState.family == "inter" && {
            fontFamily: "Inter",
          }),
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          // border: "1px solid red",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.type == "main" && {
            background:
              "linear-gradient(327deg, rgba(251, 232, 255, 0.58) 0%, rgba(209, 224, 255, 0.58) 100%)",
          }),
          // background:
          //   "linear-gradient(327deg, rgba(251, 232, 255, 0.58) 0%, rgba(209, 224, 255, 0.58) 100%)",
        }),
      },
    },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       color: "#EAECF0",
    //       width: "24px",
    //       height: "24px",
    //       flexShrink: 0,
    //     },
    //   },
    // },
  },
});

export default theme;
