import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';


function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
		size: 2,
		color: "#29e",
		delay: 80,
  });
  Router.events.on("routeChangeStart", () => progress.start());
  Router.events.on("routeChangeComplete", () => progress.finish());

  return <Component {...pageProps} />
}

export default MyApp
