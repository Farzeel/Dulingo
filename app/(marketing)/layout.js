import Footer from "./Footer"
import Header from "./header"


const MarketingLayout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
      <main className="flex-1 flex flex-col justify-center items-center">
       {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MarketingLayout
