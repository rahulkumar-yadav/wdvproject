import BagBox from "./components/BagBox"
import Chats from "./components/Chats"
import Filters from "./components/Filters"
import FootInput from "./components/FootInput"
import Head from "./components/Head"
import Tags from "./components/Tags"


function App() {

  return (
    <>
     <section className='w-full h-full flex justify-center items-center'>
            <div className='w-[360px] h-[812px] rounded-3xl bg-white my-20 p-1.5'>
                <Head />  
                <div className='h-[640px]'>
                    <Chats />
                    <Tags />
                    <BagBox />
                    <Filters />
                </div>
                <FootInput />
            </div>
        </section>
    </>
  )
}

export default App
