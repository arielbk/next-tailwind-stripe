import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Poppins overflow-hidden">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
