import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/Header'


export const metadata = {
  icons: [{ rel: 'icon', type: 'image/ico', url: '/favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body >
          <Header />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}

