import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Home from './pages/Home';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import LinearProgress from '@mui/material/LinearProgress';
const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return <Home />;
}
// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" data-toolpad-color-scheme="light">
//       <body>
//         <AppRouterCacheProvider options={{ enableCssLayer: true }}>
//           <React.Suspense fallback={<LinearProgress />}>
//             <AppProvider theme={theme} navigation={NAVIGATION}>
//               {children}
//             </AppProvider>
//           </React.Suspense>
//         </AppRouterCacheProvider>
//       </body>
//     </html>
//   );
// }
export default function DashboardLayoutBranding() {
  router = useDemoRouter('dashboard');
  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'Orchid Dashboard',
        homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={theme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
